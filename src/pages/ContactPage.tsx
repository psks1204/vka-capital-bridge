import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Building2,
  CircleDollarSign,
  Building,
  Landmark,
  MessageCircle,
  Linkedin,
  Shield
} from 'lucide-react'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/footer/Footer'
import { SEO } from '../components/common/SEO'
import { SplitTextReveal } from '../components/animations/SplitTextReveal'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
}

const getFadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
})

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="site ct-page">
      <SEO
        title="Contact Us | VKA Capital Bridge"
        description="Let's build what's next. Contact VKA Capital Bridge for strategic advisory, infrastructure opportunities, finance, and global real estate."
      />
      <div className="noise" />
      <Navbar />

      <main className="ct-main">
        {/* ─── 1. HERO ─── */}
        <section className="ct-hero">
          <div className="ct-hero-bg">
            <img src="/images/services/international-taxation.jpg" alt="" />
          </div>
          <div className="ct-hero-overlay" />
          <div className="section ct-hero-content">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="ct-eyebrow">CONTACT US</div>
              <h1>
                <SplitTextReveal>
                  Let's build<br />
                  <em>what's next.</em>
                </SplitTextReveal>
              </h1>
              <p className="ct-hero-lead">
                We're here to help. Reach out to discuss your needs, explore opportunities, or simply say hello.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. CONTACT INFORMATION ─── */}
        <section className="ct-info section">
          <div className="ct-info-grid">
            <motion.div
              className="ct-info-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="ct-section-label">CONTACT INFORMATION</span>
              <h2>Get in Touch</h2>

              <div className="ct-detail-block">
                <div className="ct-detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>VKA Capital Bridge<br />Jaipur, Rajasthan</p>
                </div>
              </div>

              <div className="ct-detail-block">
                <div className="ct-detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:vinod@vkacapitalbridge.com">vinod@vkacapitalbridge.com</a>
                  </p>
                </div>
              </div>

              <div className="ct-detail-block">
                <div className="ct-detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:+919618211000">+91 96182 11000</a>
                  </p>
                </div>
              </div>

              <div className="ct-detail-block">
                <div className="ct-detail-icon">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>
                    <a
                      href="https://wa.me/919618211000?text=Hello%20VKA%20Capital%20Bridge,%20I%20would%20like%20to%20discuss%20an%20advisory%20requirement."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us
                    </a>
                  </p>
                </div>
              </div>

              <div className="ct-detail-block">
                <div className="ct-detail-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/vinod-kumar-agrawal-79321342/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vinod Kumar Agrawal
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="ct-info-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={getFadeUp(0.15)}
            >
              <h3>Business & Advisory</h3>
              <div className="ct-advisory-divider" />
              <div className="ct-advisory-grid">
                <div className="ct-advisory-item">
                  <Building2 size={20} />
                  <div>
                    <strong>Infrastructure Advisory</strong>
                    <span>Projects, bidding & JV structuring</span>
                  </div>
                </div>
                <div className="ct-advisory-item">
                  <CircleDollarSign size={20} />
                  <div>
                    <strong>Finance & Capital</strong>
                    <span>Surety bonds & structured finance</span>
                  </div>
                </div>
                <div className="ct-advisory-item">
                  <Building size={20} />
                  <div>
                    <strong>Global Real Estate</strong>
                    <span>Cross-border investment advisory</span>
                  </div>
                </div>
                <div className="ct-advisory-item">
                  <Landmark size={20} />
                  <div>
                    <strong>Strategic Partnerships</strong>
                    <span>Institutional & developer relationships</span>
                  </div>
                </div>
                <div className="ct-advisory-item">
                  <Shield size={20} />
                  <div>
                    <strong>Insurance & Risk Management Advisory</strong>
                    <span>Risk assessment & advisory solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── 3. FIND US / LOCATION ─── */}
        <section className="ct-location">
          <div className="ct-location-bg">
            <img src="/images/about/dubai-bridge-skyline.jpg" alt="" />
          </div>
          <div className="ct-location-overlay" />
          <div className="section ct-location-content">
            <div className="ct-location-grid">
              <motion.div
                className="ct-location-copy"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <span className="ct-section-label light">FIND US</span>
                <h2>
                  Our office<br />in <em>Jaipur</em>
                </h2>
                <p>
                  Visit us at our office or get in touch digitally. We're always ready to connect.
                </p>
                <a
                  href="https://maps.google.com/?q=26°51'41.0%22N+75°45'24.7%22E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button primary ct-maps-btn"
                >
                  View on Google Maps <ArrowUpRight size={16} />
                </a>
              </motion.div>

              <motion.div
                className="ct-location-map"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={getFadeUp(0.2)}
              >
                <div className="ct-map-card">
                  <div className="ct-map-visual">
                    <div className="ct-map-dot" />
                    <div className="ct-map-ring" />
                  </div>
                  <div className="ct-map-info">
                    <strong>VKA Capital Bridge</strong>
                    <span>Jaipur, Rajasthan</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 4. LOCATION STRIP ─── */}
        <section className="ct-strip section">
          <motion.div
            className="ct-strip-inner"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span>INDIA</span>
            <div className="ct-strip-line">
              <div className="ct-strip-dot" />
            </div>
            <span>UAE</span>
          </motion.div>
        </section>

        {/* ─── 5. CTA ─── */}
        <section className="ct-cta">
          <div className="section ct-cta-inner">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h2>Have an opportunity in mind?</h2>
              <p>Let's discuss the opportunity, structure and next step.</p>
              <a className="button primary" href="mailto:vinod@vkacapitalbridge.com">
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
