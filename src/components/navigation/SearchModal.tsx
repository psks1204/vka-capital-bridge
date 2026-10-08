import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X, ArrowRight, FileText, Layers, ExternalLink } from 'lucide-react'

interface SearchItem {
  id: string
  title: string
  category: 'Page' | 'Service' | 'Sub-Service'
  url: string
  description: string
  keywords: string[]
}

const SEARCH_DATABASE: SearchItem[] = [
  {
    id: 'home',
    title: 'Home',
    category: 'Page',
    url: '/',
    description: 'VKA Capital Bridge — Building the bridge to global opportunities.',
    keywords: ['home', 'overview', 'main', 'capital', 'bridge', 'landing']
  },
  {
    id: 'about',
    title: 'About Us',
    category: 'Page',
    url: '/about',
    description: 'Institutional heritage, global network, and leadership philosophy.',
    keywords: ['about', 'team', 'heritage', 'firm', 'history', 'network', 'leadership']
  },
  {
    id: 'why-vka',
    title: 'Why VKA',
    category: 'Page',
    url: '/why-vka',
    description: 'Our competitive advantage, institutional rigor, and client outcomes.',
    keywords: ['why', 'advantage', 'performance', 'difference', 'trust', 'track record']
  },
  {
    id: 'contact',
    title: 'Contact Us',
    category: 'Page',
    url: '/contact',
    description: 'Schedule a confidential consultation with our senior advisory team.',
    keywords: ['contact', 'email', 'phone', 'consultation', 'talk', 'inquiry', 'reach']
  },
  {
    id: 'services-overview',
    title: 'All Services Overview',
    category: 'Page',
    url: '/services',
    description: 'Explore our full spectrum of cross-border institutional advisory services.',
    keywords: ['services', 'all services', 'capabilities', 'practice areas', 'solutions']
  },
  {
    id: 'infrastructure-advisory',
    title: 'Infrastructure Advisory',
    category: 'Service',
    url: '/services/infrastructure-advisory',
    description: 'Project structuring, concession modeling, PPPs, and large-scale capital projects.',
    keywords: ['infrastructure', 'ppp', 'projects', 'concessions', 'capital', 'engineering']
  },
  {
    id: 'surety-bonds',
    title: 'Surety Bonds & BG Advisory',
    category: 'Service',
    url: '/services/surety-bonds-bg-advisory',
    description: 'Lender-compliant surety bonds, bank guarantees (BG), and performance guarantees.',
    keywords: ['surety', 'bonds', 'bg', 'bank guarantee', 'performance bond', 'guarantees', 'risk']
  },
  {
    id: 'us-accounting-tax',
    title: 'U.S. Accounting & Compliance Advisory',
    category: 'Service',
    url: '/services/us-accounting-tax-compliance-advisory',
    description: 'Navigate complex IRS frameworks, GAAP standards, and cross-border structuring.',
    keywords: ['us', 'accounting', 'compliance', 'irs', 'gaap', 'cross border']
  },
  {
    id: 'us-accounting-compliance',
    title: 'U.S. Accounting & Compliance',
    category: 'Sub-Service',
    url: '/services/us-accounting-compliance',
    description: 'Corporate reporting, GAAP reconciliations, audit readiness, and tax strategy.',
    keywords: ['accounting', 'compliance', 'gaap', 'audit', 'financial statements']
  },
  {
    id: 'hedge-accounting',
    title: 'U.S. Investment Hedge Accounting',
    category: 'Sub-Service',
    url: '/services/us-investment-hedge-accounting',
    description: 'Derivative risk mitigation, portfolio hedging, and ASC 815 compliance.',
    keywords: ['hedge', 'investment', 'derivatives', 'hedging', 'risk mitigation', 'asc 815']
  },
  {
    id: 'dubai-real-estate',
    title: 'Dubai Real Estate Capital Bridge',
    category: 'Service',
    url: '/services/dubai-real-estate-capital-bridge',
    description: 'Premium UAE and Dubai real estate structuring, Golden Visa, and high-yield assets.',
    keywords: ['dubai', 'uae', 'real estate', 'gulf', 'property', 'golden visa', 'capital bridge']
  },
  {
    id: 'management-consultancy',
    title: 'Advisory & Management Consultancy',
    category: 'Service',
    url: '/services/advisory-management-consultancy',
    description: 'Board-level guidance, corporate reorganization, restructuring, and market entry.',
    keywords: ['management', 'consultancy', 'advisory', 'strategy', 'restructuring', 'growth']
  }
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredResults = query.trim() === ''
    ? SEARCH_DATABASE.slice(0, 6)
    : SEARCH_DATABASE.filter((item) => {
        const q = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.toLowerCase().includes(q))
        )
      })

  const handleSelect = (url: string) => {
    onClose()
    navigate(url)
  }

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search size={20} className="search-input-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search capabilities, practice areas, or pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="search-clear-btn"
              onClick={() => setQuery('')}
              aria-label="Clear query"
            >
              <X size={16} />
            </button>
          )}
          <button className="search-close-btn" onClick={onClose} aria-label="Close search">
            ESC
          </button>
        </div>

        <div className="search-results-list">
          {filteredResults.length === 0 ? (
            <div className="search-no-results">
              <p>No results found for &ldquo;{query}&rdquo;</p>
              <span>Try searching for &quot;Infrastructure&quot;, &quot;Tax&quot;, &quot;Dubai&quot;, or &quot;About&quot;</span>
            </div>
          ) : (
            <div className="search-results-group">
              <div className="search-results-heading">
                {query.trim() === '' ? 'Recommended Pages & Practice Areas' : `Matching Results (${filteredResults.length})`}
              </div>
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="search-result-item"
                  onClick={() => handleSelect(item.url)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSelect(item.url)
                  }}
                >
                  <div className="search-result-left">
                    <span className={`search-result-tag tag-${item.category.toLowerCase().replace('-', '')}`}>
                      {item.category}
                    </span>
                    <div className="search-result-text">
                      <span className="search-result-title">{item.title}</span>
                      <span className="search-result-desc">{item.description}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="search-result-arrow" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="search-modal-footer">
          <span>Tip: Navigate directly to key advisory pages</span>
          <span className="search-modal-footer-brand">VKA Capital Bridge</span>
        </div>
      </div>
    </div>
  )
}
