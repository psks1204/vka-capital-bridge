import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Linkedin
} from 'lucide-react'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/footer/Footer'
import { SEO } from '../components/common/SEO'
import { servicesData } from '../data/services'
import { SplitTextReveal } from '../components/animations/SplitTextReveal'
import { AnimatedCounter } from '../components/animations/AnimatedCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
}

export function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.25])

  useEffect(() => {
    const handler = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 30)
    }
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="site">
      <SEO
        title="VKA Capital Bridge | Infrastructure, Surety Bond & Global Real Estate Advisory"
        description="VKA Capital Bridge — strategic advisory across infrastructure, structured finance, U.S. accounting, international taxation and global real estate."
      />
      <div className="noise" />
      <Navbar />

      <main id="top">
        <section className="hero">
          <div className="hero-container">
            <motion.div className="hero-copy" style={{ opacity: heroOpacity }}>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="eyebrow">
                VKA CAPITAL BRIDGE
              </motion.div>
              <div className="hero-founder">Founder: Vinod Kumar Agrawal</div>
              <div className="hero-founder-sub">Advisor &amp; Management Consultant </div>

              {/* Mobile Hero Visual: Appears directly after VKA CAPITAL BRIDGE and before heading */}
              <div className="hero-visual-mobile">
                <div className="hero-visual">
                  <div className="hero-image hero-dubai" />
                  <div className="hero-image hero-infra" />
                  <div className="visual-label label-dubai">
                    DUBAI <span>GLOBAL REAL ESTATE</span>
                  </div>
                  <div className="visual-label label-india">
                    INDIA <span>INFRASTRUCTURE</span>
                  </div>
                  <div className="bridge-line">
                    <i />
                    <span>CAPITAL BRIDGE</span>
                    <i />
                  </div>
                </div>
              </div>

              <h1>
                <SplitTextReveal>
                  Building the bridge<br />
                  between <em>opportunity</em><br />
                  and capital.
                </SplitTextReveal>
              </h1>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-actions">
                <a className="button primary" href="#contact">
                  Start a conversation <ArrowUpRight size={17} />
                </a>
                <Link className="text-link" to="/services">
                  Explore services <ArrowDownRight size={17} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Desktop Hero Visual */}
            <div className="hero-visual-desktop">
              <motion.div className="hero-visual" style={{ y: heroY }}>
                <div className="hero-image hero-dubai" />
                <div className="hero-image hero-infra" />
                <div className="visual-label label-dubai">
                  DUBAI <span>GLOBAL REAL ESTATE</span>
                </div>
                <div className="visual-label label-india">
                  INDIA <span>INFRASTRUCTURE</span>
                </div>
                <div className="bridge-line">
                  <i />
                  <span>CAPITAL BRIDGE</span>
                  <i />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>

        <section className="stat-strip">
          <div>
            <strong>
              <AnimatedCounter>35+</AnimatedCounter>
            </strong>
            <small>YEARS OF EXPERIENCE</small>
          </div>
          <div>
            <strong><AnimatedCounter>06</AnimatedCounter></strong>
            <small>STRATEGIC VERTICALS</small>
          </div>
          <div>
            <strong><AnimatedCounter>01</AnimatedCounter></strong>
            <small>SINGLE WINDOW ADVISORY</small>
          </div>
          <div>
            <strong>GLOBAL</strong>
            <small>CAPITAL BRIDGE</small>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-intro">
            <span className="section-no">01 / ABOUT</span>
            <span className="line" />
          </div>
          <div className="about-grid">
            <h2>
              <SplitTextReveal>
                Experience that<br />
                <em>connects</em> markets.
              </SplitTextReveal>
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="about-copy"
            >
              <p className="lead">
                VKA Capital Bridge is an advisory platform connecting infrastructure, structured finance and global real estate.
              </p>
              <p>
                Led by <strong>Vinod Agrawal</strong>, we help contractors, developers and investors unlock growth without unnecessary collateral barriers — connecting the right opportunity to the right capital partner.
              </p>
              <a href="#contact" className="text-link dark">
                Discover VKA <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Homepage Services Preview Section - Linked to Detail Pages */}
        <section id="services" className="services-section">
          <div className="section service-heading">
            <div className="section-intro light">
              <span className="section-no">02 / SERVICES</span>
              <span className="line" />
            </div>
            <div className="service-head-row">
              <h2>
                <SplitTextReveal>
                  Institutional Advisory.<br />
                  <em>Strategic Execution.</em>
                </SplitTextReveal>
              </h2>
              <p>
                Specialized institutional advisory across risk management, U.S. accounting, hedge governance, international taxation, and capital structuring.
              </p>
            </div>
          </div>
          <div className="service-grid-wrap section">
            <div className="service-grid">
              {servicesData.map((s, i) => (
                <motion.article
                  key={s.number}
                  className="service-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: i * 0.08 }}
                >
                  <Link to={`/services/${s.slug}`} className="service-card-link-block">
                    <div className="service-card-image-wrap">
                      <img src={s.cardImage} alt={s.title} className="service-card-image" loading="lazy" />
                      <span className="service-card-number">{s.number}</span>
                    </div>
                    <div className="service-card-body">
                      <span className="service-card-kicker">{s.kicker}</span>
                      <h3 className="service-card-title">{s.title}</h3>
                      <p className="service-card-desc">{s.description}</p>
                      <div className="service-card-footer">
                        <span className="service-card-tag">{s.tag}</span>
                        <div className="service-card-icon">
                          <span className="explore-inline">Explore</span>
                          <ChevronRight size={18} className="service-arrow-icon" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="services-overview-cta-row">
              <Link to="/services" className="button primary view-all-services-btn">
                View all capabilities & detailed scopes <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="split-feature">
          <div className="split-image infra-image">
            <span>01 — INFRASTRUCTURE</span>
            <b>
              Infrastructure<br />at scale.
            </b>
          </div>
          <div className="split-copy">
            <span className="section-no">INFRASTRUCTURE ADVISORY</span>
            <h2>
              <SplitTextReveal>
                From tender<br />to <em>closure.</em>
              </SplitTextReveal>
            </h2>
            <p>
              Strategic support across government project bidding, JV structuring and financial closure for established contractors.
            </p>
            <div className="feature-list">
              <span>
                <Check size={16} /> NHAI / MSRDC / Govt. Project Bidding
              </span>
              <span>
                <Check size={16} /> JV Structuring & Financial Closure
              </span>
              <span>
                <Check size={16} /> For Contractors: Turnover ₹50Cr+
              </span>
            </div>
            <a className="text-link dark" href="#contact">
              Discuss your project <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="split-feature reverse finance-feature">
          <div className="split-copy">
            <span className="section-no">SURETY & BG ADVISORY</span>
            <h2>
              <SplitTextReveal>
                Protect limits.<br />
                <em>Unlock cash flow.</em>
              </SplitTextReveal>
            </h2>
            <p>
              Insurance-backed surety solutions and bank guarantee replacement advisory to help businesses deploy capital more efficiently.
            </p>
            <div className="feature-list">
              <span>
                <Check size={16} /> Collateral-free surety bonds
              </span>
              <span>
                <Check size={16} /> Bank guarantee replacement
              </span>
              <span>
                <Check size={16} /> IRDAI-approved insurer partners
              </span>
            </div>
            <Link className="text-link dark" to="/services/insurance-risk-management">
              Explore risk advisory route <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="split-image finance-image">
            <span>02 — RISK & FINANCE</span>
            <b>
              Capital<br />without friction.
            </b>
          </div>
        </section>

        <section className="dubai-feature">
          <div className="dubai-bg" />
          <div className="dubai-overlay" />
          <div className="dubai-content">
            <span className="section-no">03 / DUBAI REAL ESTATE</span>
            <h2>
              <SplitTextReveal>
                Cross-Border<br /><em>Capital Strategy.</em>
              </SplitTextReveal>
            </h2>
            <p>
              Acquisition due diligence, portfolio structuring and direct master developer relationships across commercial and residential assets.
            </p>
            <div className="dubai-metrics">
              <div>
                <strong><AnimatedCounter>7–9%</AnimatedCounter></strong>
                <small>INDICATIVE YIELDS*</small>
              </div>
              <div>
                <strong>GLOBAL</strong>
                <small>WEALTH PORTFOLIOS</small>
              </div>
              <div>
                <strong><AnimatedCounter>01:01</AnimatedCounter></strong>
                <small>DIRECT DEVELOPER ACCESS</small>
              </div>
            </div>
            <p
              className="dubai-disclaimer"
              style={{ fontSize: '11px', color: '#8f918f', marginTop: '-20px', marginBottom: '35px' }}
            >
              *Indicative/subject to property, market conditions and applicable regulatory terms.
            </p>
            <Link className="button light-button" to="/services/dubai-real-estate-capital-bridge">
              Explore real estate capabilities <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section id="why-vka" className="section why">
          <div className="section-intro">
            <span className="section-no">04 / WHY VKA</span>
            <span className="line" />
          </div>
          <div className="why-grid">
            <div>
              <h2>
                <SplitTextReveal>
                  One advisor.<br />
                  <em>Strategic breadth.</em>
                </SplitTextReveal>
              </h2>
              <p className="why-lead">Risk. Governance. Cross-border capital.</p>
            </div>
            <div className="why-points">
              <div>
                <span><AnimatedCounter>01</AnimatedCounter></span>
                <h3>Single window</h3>
                <p>One strategic relationship across risk, accounting, tax and capital.</p>
              </div>
              <div>
                <span><AnimatedCounter>02</AnimatedCounter></span>
                <h3>Direct access</h3>
                <p>Direct institutional relationships with underwriters, lenders, and global partners.</p>
              </div>
              <div>
                <span><AnimatedCounter>03</AnimatedCounter></span>
                <h3>Advisory first</h3>
                <p>No brokers. A strategy-led approach built around the client's commercial requirement.</p>
              </div>
            </div>
          </div>
          <div className="bridge-diagram">
            <div>PROJECTS</div>
            <span />
            <strong>
              VKA<br />
              <small>CAPITAL BRIDGE</small>
            </strong>
            <span />
            <div>GLOBAL WEALTH</div>
          </div>
        </section>

        <section className="process">
          <div className="section">
            <div className="section-intro light">
              <span className="section-no">05 / APPROACH</span>
              <span className="line" />
            </div>
            <h2>
              <SplitTextReveal>
                Clarity before<br />
                <em>connection.</em>
              </SplitTextReveal>
            </h2>
            <div className="process-grid">
              <div>
                <span><AnimatedCounter>01</AnimatedCounter></span>
                <h3>Understand</h3>
                <p>Define the enterprise risk, compliance requirement or capital objective.</p>
              </div>
              <div>
                <span><AnimatedCounter>02</AnimatedCounter></span>
                <h3>Structure</h3>
                <p>Shape an advisory route around the opportunity and regulatory constraints.</p>
              </div>
              <div>
                <span><AnimatedCounter>03</AnimatedCounter></span>
                <h3>Connect</h3>
                <p>Bring the relevant institutional syndicate, insurer or developer relationship.</p>
              </div>
              <div>
                <span><AnimatedCounter>04</AnimatedCounter></span>
                <h3>Execute</h3>
                <p>Stay focused on the right commercial outcome from strategy through final closing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section">
            <div className="section-intro">
              <span className="section-no">06 / CONTACT</span>
              <span className="line" />
            </div>
            <div className="contact-layout">
              <div className="contact-left">
                <h2>
                  <SplitTextReveal>
                    Let's build the<br />
                    <em>right bridge.</em>
                  </SplitTextReveal>
                </h2>
                <p>
                  Have a financing requirement, compliance challenge or cross-border investment goal? Start a conversation with VKA Capital Bridge.
                </p>
                <a className="button primary" href="mailto:vinod@vkacapitalbridge.com">
                  Start a conversation <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="contact-cards">
                <a href="mailto:vinod@vkacapitalbridge.com" className="contact-card">
                  <div className="contact-card-icon">
                    <Mail size={20} />
                  </div>
                  <span className="contact-card-label">EMAIL</span>
                  <span className="contact-card-value">vinod@vkacapitalbridge.com</span>
                </a>
                <a href="tel:+919618211000" className="contact-card">
                  <div className="contact-card-icon">
                    <Phone size={20} />
                  </div>
                  <span className="contact-card-label">PHONE</span>
                  <span className="contact-card-value">+91 96182 11000</span>
                </a>
                <a
                  href="https://wa.me/919618211000?text=Hello%20VKA%20Capital%20Bridge,%20I%20would%20like%20to%20discuss%20an%20advisory%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <MessageCircle size={20} />
                  </div>
                  <span className="contact-card-label">WHATSAPP</span>
                  <span className="contact-card-value">Chat with us</span>
                </a>
                <a
                  href="https://maps.google.com/?q=26°51'41.0%22N+75°45'24.7%22E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <MapPin size={20} />
                  </div>
                  <span className="contact-card-label">LOCATION</span>
                  <span className="contact-card-value">Jaipur, Rajasthan</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vinod-kumar-agrawal-79321342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card contact-card-wide"
                >
                  <div className="contact-card-icon">
                    <Linkedin size={20} />
                  </div>
                  <span className="contact-card-label">LINKEDIN</span>
                  <span className="contact-card-value">Vinod Kumar Agrawal</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
