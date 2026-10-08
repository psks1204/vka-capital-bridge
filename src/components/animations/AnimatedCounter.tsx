import React, { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  children: string;
  className?: string;
  as?: React.ElementType;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  children,
  className = '',
  as: Component = 'span',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isReducedMotion = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  }, []);

  // Split string into numbers and non-numbers, supporting commas
  const chunks = useMemo(() => {
    if (typeof children !== 'string') return [{ isNumber: false, text: String(children), value: 0 }];
    
    // Match consecutive digits, optionally with commas inside
    const parts = children.split(/([\d,]+)/);
    return parts.map((part) => {
      // Check if it's a number (can include commas but must contain digits)
      const isNumber = /^[\d,]+$/.test(part) && /\d/.test(part);
      return {
        isNumber,
        text: part,
        value: isNumber ? parseInt(part.replace(/,/g, ''), 10) : 0,
        hasCommas: part.includes(','),
        // Determine format based on comma placement (Indian vs US)
        isIndianFormat: part.match(/^\d{1,2}(,\d{2})+,\d{3}$/) !== null,
      };
    });
  }, [children]);

  useEffect(() => {
    if (isReducedMotion || !containerRef.current || hasAnimated) return;

    const numberElements = containerRef.current.querySelectorAll('.gsap-counter-num');
    
    if (numberElements.length === 0) return;

    // Set up GSAP animation
    const targets = Array.from(numberElements).map((el) => {
      const targetVal = parseInt(el.getAttribute('data-target') || '0', 10);
      const originalText = el.getAttribute('data-original') || '';
      const hasCommas = el.getAttribute('data-has-commas') === 'true';
      const isIndianFormat = el.getAttribute('data-is-indian') === 'true';
      
      return {
        el,
        val: 0,
        targetVal,
        originalText,
        hasCommas,
        isIndianFormat
      };
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%', // 20% into viewport
      once: true,
      onEnter: () => {
        targets.forEach((target) => {
          gsap.to(target, {
            val: target.targetVal,
            duration: 1.5,
            ease: 'power3.out',
            onUpdate: () => {
              let currentValStr = Math.round(target.val).toString();
              
              if (target.hasCommas) {
                // Format with commas
                if (target.isIndianFormat) {
                  currentValStr = new Intl.NumberFormat('en-IN').format(Math.round(target.val));
                } else {
                  currentValStr = new Intl.NumberFormat('en-US').format(Math.round(target.val));
                }
              } else {
                // Preserve leading zeros based on original text length if no commas
                if (target.originalText.startsWith('0') && target.originalText.length > currentValStr.length) {
                  currentValStr = currentValStr.padStart(target.originalText.length, '0');
                }
              }
              
              if (target.el) {
                target.el.textContent = currentValStr;
              }
            },
            onComplete: () => {
              if (target.el) {
                target.el.textContent = target.originalText; // Ensure exact final text
              }
              setHasAnimated(true);
            },
          });
        });
      },
    });

    // Initialize to 0 (with proper padding)
    targets.forEach((target) => {
      let initialVal = '0';
      if (target.originalText.startsWith('0') && target.originalText.length > 1) {
        initialVal = '0'.padStart(target.originalText.length, '0');
      }
      if (target.el) {
        target.el.textContent = initialVal;
      }
    });

    return () => {
      trigger.kill();
    };
  }, [isReducedMotion, hasAnimated]);

  return (
    <Component ref={containerRef} className={className}>
      {chunks.map((chunk, i) => {
        if (!chunk.isNumber) {
          return <React.Fragment key={i}>{chunk.text}</React.Fragment>;
        }
        
        if (isReducedMotion) {
          return <React.Fragment key={i}>{chunk.text}</React.Fragment>;
        }

        return (
          <span
            key={i}
            className="gsap-counter-num"
            data-target={chunk.value}
            data-original={chunk.text}
            data-has-commas={String('hasCommas' in chunk ? chunk.hasCommas : false)}
            data-is-indian={String('isIndianFormat' in chunk ? chunk.isIndianFormat : false)}
          >
            {chunk.text}
          </span>
        );
      })}
    </Component>
  );
};
