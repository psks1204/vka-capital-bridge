import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import vkaLogo from '../../assets/vka-logo.png'
import { servicesData } from '../../data/services'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-grid section">
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand-link">
            <img src={vkaLogo} alt="VKA Capital Bridge" className="brand-logo footer-logo" />
          </Link>
          <p className="footer-brand-tagline">
            Strategic advisory and capital solutions for a connected world.
          </p>
        </div>

        <div className="footer-nav-col footer-quick-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><a href="/#why-vka">Why VKA</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-nav-col">
          <h4 className="footer-col-title">Our Services</h4>
          <ul className="footer-links-list">
            {servicesData.map((svc) => (
              <li key={svc.slug}>
                <Link to={`/services/${svc.slug}`}>{svc.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-nav-col">
          <h4 className="footer-col-title">Contact</h4>
          <div className="footer-contact-details">
            <a href="tel:+919618211000" className="footer-contact-row">
              <Phone size={14} />
              <span>+91 96182 11000</span>
            </a>
            <a href="mailto:vinod@vkacapitalbridge.com" className="footer-contact-row">
              <Mail size={14} />
              <span>vinod@vkacapitalbridge.com</span>
            </a>
            <div className="footer-contact-row">
              <MapPin size={14} />
              <span>Jaipur, Rajasthan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar section" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="footer-copyright" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px', margin: 0, padding: 0 }}>
            <span>© {new Date().getFullYear()} VKA Capital Bridge. All rights reserved.</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="mobile-hide" style={{ opacity: 0.5 }}>|</span> Made with <span style={{ color: '#e74c3c', fontSize: '14px' }}>❤️</span> by
              <a href="https://nitstack.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a050', fontWeight: '600', textDecoration: 'none', letterSpacing: '0.5px' }}>NitStack</a>
            </span>
          </span>

        </div>
      </div>

      <div className="footer-disclaimer-wrap section">
        <p className="disclaimer">
          VKA Capital Bridge is an independent strategic advisory firm. We facilitate institutional solutions across infrastructure, risk management, and capital partners through regulated domestic and international frameworks.
        </p>
      </div>
    </footer>
  )
}
