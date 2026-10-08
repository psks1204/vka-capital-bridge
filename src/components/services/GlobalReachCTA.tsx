import { ArrowUpRight } from 'lucide-react'
import { SplitTextReveal } from '../animations/SplitTextReveal'

export function GlobalReachCTA() {
  return (
    <section className="global-reach-cta-section">
      <div className="global-reach-network-bg" />
      <div className="section global-reach-content-container">
        <div className="global-reach-left">
          <div className="section-label-gold light-label">
            <span className="dash-line" />
            <span className="label-text">GLOBAL REACH</span>
          </div>
          <h2 className="global-reach-title">
            <SplitTextReveal>
              Your strategic partner<br />
              across borders.
            </SplitTextReveal>
          </h2>
        </div>

        <div className="global-reach-center">
          <p className="global-reach-copy">
            From established markets to emerging economies, we bring cross-border expertise and local insight to help you navigate complex opportunities.
          </p>
          <a href="/#contact" className="button global-reach-btn">
            Start a conversation <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}
