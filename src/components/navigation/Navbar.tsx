import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Search,
  ArrowRight,
  Home,
  Users,
  Layers,
  ShieldCheck,
  Shield,
  Mail,
  Landmark,
  Calculator,
  Building,
  Briefcase,
  LayoutGrid
} from 'lucide-react'
import vkaLogo from '../../assets/vka-logo.png'
import { SearchModal } from './SearchModal'
import './Navbar.css'

interface ServiceMeta {
  slug: string
  title: string
  shortTitle: string
  badge: string
  tagline: string
  icon: typeof Landmark
  path: string
  children?: { title: string; path: string }[]
}

const SERVICES_CONFIG: ServiceMeta[] = [
  {
    slug: 'insurance-risk-management',
    title: 'Insurance & Risk Management Advisory',
    shortTitle: 'Insurance & Risk',
    badge: 'Risk & Capital Protection',
    tagline: 'Enterprise risk assessment and insurance program structuring.',
    icon: Shield,
    path: '/services/insurance-risk-management'
  },
  {
    slug: 'infrastructure-advisory',
    title: 'Infrastructure Advisory',
    shortTitle: 'Infrastructure',
    badge: 'Asset Development',
    tagline: 'Large-scale capital project structuring, concession modeling & PPP delivery.',
    icon: Landmark,
    path: '/services/infrastructure-advisory'
  },
  {
    slug: 'surety-bonds-bg-advisory',
    title: 'Surety Bonds & BG Advisory',
    shortTitle: 'Surety Bonds & BG',
    badge: 'Risk Mitigation',
    tagline: 'Lender-compliant surety programs and international bank guarantee solutions.',
    icon: ShieldCheck,
    path: '/services/surety-bonds-bg-advisory'
  },
  {
    slug: 'us-accounting-tax-compliance-advisory',
    title: 'U.S. Accounting & Compliance Advisory',
    shortTitle: 'U.S. Accounting & Compliance',
    badge: 'Cross-Border Finance',
    tagline: 'Navigate regulations. Ensure growth.',
    icon: Calculator,
    path: '/services/us-accounting-tax-compliance-advisory',
    children: [
      { title: 'U.S. Investment Hedge Accounting', path: '/services/us-investment-hedge-accounting' },
      { title: 'U.S. Accounting & Compliance', path: '/services/us-accounting-compliance' }
    ]
  },
  {
    slug: 'dubai-real-estate-capital-bridge',
    title: 'Dubai Investment Real Estate',
    shortTitle: 'Dubai Investment Real Estate',
    badge: 'Global Capital',
    tagline: 'Exclusive tier-one master developer access and high-yield asset structuring.',
    icon: Building,
    path: '/services/dubai-real-estate-capital-bridge'
  },
  {
    slug: 'advisory-management-consultancy',
    title: 'Advisory & Management Consultancy',
    shortTitle: 'Management Consultancy',
    badge: 'Corporate Growth',
    tagline: 'Board-level strategic guidance, market expansion, and turnaround execution.',
    icon: Briefcase,
    path: '/services/advisory-management-consultancy'
  }
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [hoveredService, setHoveredService] = useState<ServiceMeta | null>(null) // Show submenu only on hover
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true)
  const [mobileExpandedSub, setMobileExpandedSub] = useState<string | null>('us-accounting-tax-compliance-advisory')
  const [searchOpen, setSearchOpen] = useState(false)

  const dropdownTimeoutRef = useRef<number | null>(null)
  const location = useLocation()

  const isServicesActive = location.pathname.startsWith('/services')

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Reset dropdown and mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  // Mouse hover handlers for Services Mega Menu
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(false)
    }, 220)
  }

  const closeAll = () => {
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <>
      <header className={`nav-wrap ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          {/* Left: Brand Logo */}
          <div className="nav-brand-wrap">
            <Link to="/" className="nav-brand" onClick={closeAll}>
              <img src={vkaLogo} alt="VKA Capital Bridge" className="brand-logo" />
            </Link>
          </div>

          {/* Center: Menus (Centered) */}
          <ul className="nav-center-menu">
            <li>
              <Link
                to="/"
                className={`nav-link-item ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeAll}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link-item ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeAll}
              >
                About
              </Link>
            </li>

            {/* Services with Mega Dropdown */}
            <li
              className={`nav-dropdown-wrapper ${dropdownOpen ? 'open' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`nav-dropdown-trigger ${isServicesActive ? 'active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown size={14} className="nav-chevron-icon" />
              </button>

              {/* Mega Dropdown Menu */}
              <div className="mega-dropdown-menu">
                <div className="mega-left-col">
                  {/* All Services Overview */}
                  <Link
                    to="/services"
                    className="mega-overview-link"
                    onClick={closeAll}
                    onMouseEnter={() => setHoveredService(null)}
                  >
                    <div className="overview-text">
                      <span className="overview-title">All Services Overview</span>
                      <span className="overview-sub">Explore all strategic capabilities</span>
                    </div>
                  </Link>

                  {/* Services List */}
                  {SERVICES_CONFIG.map((srv) => {
                    const isHovered = hoveredService?.slug === srv.slug
                    const isActive = location.pathname.startsWith(`/services/${srv.slug}`)
                    const hasChildren = srv.children && srv.children.length > 0

                    return (
                      <div
                        key={srv.slug}
                        className="mega-service-item-wrapper"
                        onMouseEnter={() => setHoveredService(srv)}
                      >
                        <Link
                          to={srv.path}
                          className={`mega-service-item ${isHovered ? 'hovered' : ''} ${isActive ? 'active' : ''}`}
                          onClick={closeAll}
                        >
                          <span className="service-item-title">{srv.title}</span>
                          {hasChildren && <ChevronRight size={14} className="mega-arrow-right" />}
                        </Link>

                        {/* Flyout Submenu */}
                        {isHovered && hasChildren && (
                          <div className="mega-submenu-flyout">
                            {srv.children!.map((sub, index) => (
                              <Link
                                key={index}
                                to={sub.path}
                                className="mega-sub-link"
                                onClick={closeAll}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/why-vka"
                className={`nav-link-item ${location.pathname === '/why-vka' ? 'active' : ''}`}
                onClick={closeAll}
              >
                Why VKA
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link-item ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeAll}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right: Search + CTA + Mobile Hamburger */}
          <div className="nav-right-actions">
            {/* Search Button */}
            <button
              className="nav-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search services and pages"
              title="Search (Ctrl + K)"
            >
              <Search size={17} />
            </button>

            {/* Desktop CTA Pill */}
            <Link to="/contact" className="nav-cta-pill" onClick={closeAll}>
              <span>Start a conversation</span>
              <ArrowRight size={15} className="cta-arrow-icon" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= Mobile Menu Drawer ================= */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeAll}
      >
        <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
          {/* Drawer Header */}
          <div className="mobile-drawer-header">
            <Link to="/" onClick={closeAll}>
              <img src={vkaLogo} alt="VKA Capital Bridge" className="brand-logo" />
            </Link>
            <button
              className="mobile-drawer-close"
              onClick={closeAll}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Menu Items */}
          <div className="mobile-drawer-content">
            {/* Home */}
            <Link
              to="/"
              className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeAll}
            >
              <div className="mobile-item-icon">
                <Home size={17} />
              </div>
              <span>Home</span>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`mobile-nav-item ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeAll}
            >
              <div className="mobile-item-icon">
                <Users size={17} />
              </div>
              <span>About</span>
            </Link>

            {/* Services with Accordion */}
            <div className="mobile-services-section">
              <button
                className={`mobile-nav-item ${isServicesActive ? 'active' : ''}`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <div className="mobile-item-icon">
                  <Layers size={17} />
                </div>
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`mobile-chevron-toggle ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mobile-services-accordion">
                  {/* All Services Overview */}
                  <Link
                    to="/services"
                    className={`mobile-sub-item ${location.pathname === '/services' ? 'active' : ''}`}
                    onClick={closeAll}
                  >
                    <LayoutGrid size={15} className="mobile-sub-item-icon" />
                    <span>All Services Overview</span>
                  </Link>

                  {/* List of Services */}
                  {SERVICES_CONFIG.map((srv) => {
                    const IconComp = srv.icon
                    const isSubExpanded = mobileExpandedSub === srv.slug
                    const isActive = location.pathname.startsWith(`/services/${srv.slug}`)

                    return (
                      <div key={srv.slug} className="mobile-nested-group">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Link
                            to={srv.path}
                            className={`mobile-sub-item ${isActive ? 'active' : ''}`}
                            onClick={closeAll}
                            style={{ flex: 1 }}
                          >
                            <IconComp size={15} className="mobile-sub-item-icon" />
                            <span>{srv.title}</span>
                          </Link>
                          {srv.children && srv.children.length > 0 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setMobileExpandedSub(isSubExpanded ? null : srv.slug)
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                padding: '8px 10px',
                                cursor: 'pointer',
                                color: '#94a3b8'
                              }}
                              aria-label="Toggle sub-services"
                            >
                              <ChevronDown
                                size={14}
                                className={`mobile-chevron-toggle ${isSubExpanded ? 'rotate-180' : ''}`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Nested Sub-Services (e.g. U.S. Hedge Accounting, International Tax) */}
                        {srv.children && isSubExpanded && (
                          <div className="mobile-nested-children">
                            {srv.children.map((child, idx) => (
                              <Link
                                key={idx}
                                to={child.path}
                                className={`mobile-nested-child-link ${location.pathname === child.path ? 'active' : ''}`}
                                onClick={closeAll}
                              >
                                <ArrowRight size={12} />
                                <span>{child.title}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Why VKA */}
            <Link
              to="/why-vka"
              className={`mobile-nav-item ${location.pathname === '/why-vka' ? 'active' : ''}`}
              onClick={closeAll}
            >
              <div className="mobile-item-icon">
                <ShieldCheck size={17} />
              </div>
              <span>Why VKA</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`mobile-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeAll}
            >
              <div className="mobile-item-icon">
                <Mail size={17} />
              </div>
              <span>Contact</span>
            </Link>
          </div>

          {/* Drawer Footer Sticky CTA */}
          <div className="mobile-drawer-footer">
            <Link to="/contact" className="mobile-cta-btn" onClick={closeAll}>
              <span>Start a conversation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
export default Navbar
