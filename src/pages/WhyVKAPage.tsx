import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Play,
  Target,
  Eye,
  Diamond,
  Check
} from 'lucide-react'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/footer/Footer'
import { SEO } from '../components/common/SEO'
import { SplitTextReveal } from '../components/animations/SplitTextReveal'
import { AnimatedCounter } from '../components/animations/AnimatedCounter'

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

export function WhyVKAPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="site whyvka-page">
      <SEO
        title="Why VKA | Strategic Advisory & Investment Platform"
        description="Built on trust. Driven by opportunity. Discover why VKA Capital Bridge is the preferred partner for infrastructure, finance, and global real estate."
      />
      <div className="noise" />
      <Navbar />

      <main className="whyvka-main">
        {/* ─── 1. HERO ─── */}
        <section className="wv-hero">
          <div className="wv-hero-bg">
            <img src="/images/about/skyscrapers-glass-blue.jpg" alt="" />
          </div>
          <div className="wv-hero-overlay" />
          <div className="section wv-hero-content">
            <motion.div
              className="wv-hero-copy"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="wv-eyebrow">
                <span className="wv-dash" />
                ABOUT VKA
              </div>
              <h1>
                <SplitTextReveal>
                  Built on trust.<br />
                  Driven by <em>opportunity.</em>
                </SplitTextReveal>
              </h1>
              <p className="wv-hero-lead">
                VKA Capital Bridge is a strategic advisory and investment platform, connecting businesses, investors and opportunities across global markets.
              </p>
              <Link to="/about" className="wv-story-btn">
                <span className="wv-play-circle">
                  <Play size={14} />
                </span>
                <span>Our story</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── 2. MISSION / VISION / VALUES ─── */}
        <section className="wv-mission section">
          <div className="wv-mission-grid">
            <motion.div
              className="wv-mission-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="wv-section-label">OUR MISSION</span>
              <h2>
                <SplitTextReveal>
                  Connecting<br />capital with<br /><em>opportunity.</em>
                </SplitTextReveal>
              </h2>
              <p>
                We bridge businesses, investors and markets through strategic advisory, deep expertise and a global network — creating sustainable growth and long-term value.
              </p>
            </motion.div>

            <div className="wv-mvv-cards">
              <motion.div className="wv-mvv-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={getFadeUp(0)}>
                <div className="wv-mvv-icon">
                  <Target size={28} />
                </div>
                <h3>Our Mission</h3>
                <p>To create long-term value for our clients, partners and communities through strategic advisory and innovative solutions.</p>
              </motion.div>

              <motion.div className="wv-mvv-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={getFadeUp(0.1)}>
                <div className="wv-mvv-icon">
                  <Eye size={28} />
                </div>
                <h3>Our Vision</h3>
                <p>To be a leading global platform, recognised for trust, expertise and impactful partnerships across industries and regions.</p>
              </motion.div>

              <motion.div className="wv-mvv-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={getFadeUp(0.2)}>
                <div className="wv-mvv-icon">
                  <Diamond size={28} />
                </div>
                <h3>Our Values</h3>
                <ul className="wv-values-list">
                  <li><Check size={14} /> Integrity</li>
                  <li><Check size={14} /> Excellence</li>
                  <li><Check size={14} /> Collaboration</li>
                  <li><Check size={14} /> Innovation</li>
                  <li><Check size={14} /> Sustainable Growth</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── 3. IMPACT / NUMBERS ─── */}
        <section className="wv-impact">
          <div className="wv-impact-bg">
            <img src="/images/about/dubai-panoramic-night.jpg" alt="" />
          </div>
          <div className="wv-impact-overlay" />
          <div className="section wv-impact-content">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="wv-section-label light">OUR IMPACT</span>
              <div className="wv-impact-row">
                <h2>
                  Numbers that<br />build <em>confidence.</em>
                </h2>
                <div className="wv-impact-stats">
                  <div className="wv-stat">
                    <strong><AnimatedCounter>35+</AnimatedCounter></strong>
                    <small>Years of Experience</small>
                  </div>
                  <div className="wv-stat">
                    <strong><AnimatedCounter>50+</AnimatedCounter></strong>
                    <small>Strategic Partnerships</small>
                  </div>
                  <div className="wv-stat">
                    <strong><AnimatedCounter>03</AnimatedCounter></strong>
                    <small>Continents</small>
                  </div>
                  <div className="wv-stat">
                    <strong>IN→UAE</strong>
                    <small>Capital Bridge</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 4. CTA / BUILD TOGETHER ─── */}
        <section className="wv-cta section">
          <div className="wv-cta-grid">
            <motion.div
              className="wv-cta-image"
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src="/images/about/dubai-canal-skyline.jpg" alt="Dubai skyline" />
            </motion.div>
            <motion.div
              className="wv-cta-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <span className="wv-section-label">LET'S BUILD TOGETHER</span>
              <h2>
                Your global ambitions.<br />
                Our <em>strategic support.</em>
              </h2>
              <p>
                Partner with VKA Capital Bridge and unlock new opportunities across markets, industries and borders.
              </p>
              <Link to="/contact" className="button primary">
                Start a conversation <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
