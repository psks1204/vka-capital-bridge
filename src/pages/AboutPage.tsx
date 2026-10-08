import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Target,
  Eye,
  Diamond,
  Globe,
  Handshake,
  TrendingUp,
  Users,
  Compass,
  Shield,
  Play
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

interface ExpandableAwardDescriptionProps {
  text: string
  expandedHeading?: string
  expandedText?: string
  maxLength?: number
}

function ExpandableAwardDescription({
  text,
  expandedHeading,
  expandedText,
  maxLength = 160
}: ExpandableAwardDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Support embedded HTML heading tags like <h3>Heading</h3> or <h4>Heading</h4> in `text`
  const headingMatch = text.match(/^(.*?)\s*<(h[1-6])>(.*?)<\/\2>\s*(.*)$/s)

  const summary = expandedHeading
    ? text
    : headingMatch
      ? headingMatch[1].trim()
      : null
  const heading = expandedHeading || (headingMatch ? headingMatch[3].trim() : null)
  const restText = expandedText || (headingMatch ? headingMatch[4].trim() : null)

  if (heading && restText) {
    const projectMatch = restText.match(/^.*?\bprojects?\b/i)
    const previewSlice = projectMatch
      ? projectMatch[0].trim().replace(/[.,;]+$/, '')
      : restText.slice(0, 35).trim().replace(/[.,;]+$/, '')

    return (
      <div className="about-award-expandable-wrap">
        {summary && <p className="about-award-summary-p">{summary}</p>}
        <h4 className="about-award-subheading">{heading}</h4>
        {!isExpanded ? (
          <p>
            {previewSlice}...{' '}
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="about-award-more-btn"
              aria-expanded={false}
            >
              Read more
            </button>
          </p>
        ) : (
          <div className="about-award-expanded-block">
            <p>
              {restText}{' '}
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="about-award-more-btn"
                aria-expanded={true}
              >
                Read less
              </button>
            </p>
          </div>
        )}
      </div>
    )
  }

  if (text.length <= maxLength) {
    return <p>{text}</p>
  }

  const trimmed = text.slice(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(' ')
  const cleanSlice = (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed).replace(/[.,;]+$/, '')

  return (
    <p>
      {isExpanded ? text : `${cleanSlice}... `}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="about-award-more-btn"
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </p>
  )
}

export function AboutPage() {
  const awardVideoSectionRef = useRef<HTMLDivElement>(null)
  const [isAwardVideoVisible, setIsAwardVideoVisible] = useState(false)

  useEffect(() => {
    const section = awardVideoSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsAwardVideoVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2),
      { threshold: [0, 0.2] }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const scrollToStory = () => {
    const el = document.getElementById('story')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="site about-page-site">
      <SEO
        title="About Us | Strategic Advisory & Investment Platform | VKA Capital Bridge"
        description="Building value through strategic partnerships. VKA Capital Bridge connects businesses, investors and opportunities across global markets."
      />
      <div className="noise" />
      <Navbar />

      <main className="about-main">
        {/* ========================================================= */}
        {/* 1. HERO / ABOUT INTRO SECTION                            */}
        {/* ========================================================= */}
        <section className="about-hero-section">
          <div className="about-hero-bg">
            <img src="/images/about/about-hero-skyscrapers.jpg" alt="VKA Capital Bridge" />
          </div>
          <div className="about-hero-bg-overlay" />
          <div className="section about-hero-content">
            <motion.div
              className="about-hero-copy"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="about-eyebrow">
                <span className="about-dash-line" />
                <span className="about-eyebrow-text">ABOUT US</span>
              </div>

              <h1 className="about-hero-headline">
                <SplitTextReveal>
                  Building value through<br />
                  <span className="about-accent-blue">strategic partnerships.</span>
                </SplitTextReveal>
              </h1>

              <p className="about-hero-lead">
                VKA Capital Bridge is a strategic advisory and investment platform, connecting
                businesses, investors and opportunities across global markets.
              </p>

              <div className="about-story-cta" onClick={scrollToStory} role="button" tabIndex={0}>
                <div className="about-play-circle">
                  <Play size={15} className="about-play-icon" />
                </div>
                <span className="about-story-text">Our story</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* LEADERSHIP SECTION                                        */}
        {/* ========================================================= */}
        <section className="about-leadership-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div className="section">
            <div className="about-roles-header" style={{ marginBottom: '40px' }}>
              <div className="about-eyebrow">
                <span className="about-dash-line" />
                <span className="about-eyebrow-text" style={{ color: '#1a6fb5' }}>LEADERSHIP</span>
              </div>
              <h2 className="about-story-headline" style={{ margin: '15px 0 40px 0', color: '#0b2d4f' }}>
                The Person Behind VKA<br />Capital Bridge
              </h2>
            </div>

            <div className="leadership-profile" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'flex-start', marginBottom: '60px' }}>
              <motion.div
                className="leadership-img-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ flex: '1 1 360px', maxWidth: '410px', height: '460px', position: 'relative', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
              >
                <img
                  className="leadership-founder-image"
                  src="/images/about/vinod-agrawal-profile.jpg"
                  alt="Vinod Kumar Agrawal"
                />
              </motion.div>

              <motion.div
                className="leadership-text-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ flex: '2 1 450px', paddingTop: '5px', paddingLeft: '8px' }}
              >
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#121416', marginBottom: '8px' }}>Vinod Kumar Agrawal</h3>
                <p style={{ color: '#2a8fd4', fontWeight: 500, fontSize: '14.5px', marginBottom: '20px' }}>
                  Founder & Managing Partner, VKA Capital Bridge <span style={{ color: '#cbd5e1', margin: '0 8px' }}>|</span> Cost & Management Accountant
                </p>
                <p style={{ color: '#65645f', fontSize: '15px', lineHeight: 1.7, marginBottom: '14px' }}>
                  Vinod Kumar Agrawal is an Advisor and Management Consultant with over 34 years of experience across finance, operations, EPC, and project management. A rank-holding Cost and Management Accountant (CMA), he has worked with leading organizations in petrochemicals, oil and gas, railways, and infrastructure development.
                </p>
                <p style={{ color: '#65645f', fontSize: '15px', lineHeight: 1.7, marginBottom: '14px' }}>
                  Most recently, he served as Business Development Head and CFO (B2B) and Executive Director of GA Infra, where he oversaw the company&apos;s complete business and operations across India.
                </p>
                <p style={{ color: '#65645f', fontSize: '15px', lineHeight: 1.7, marginBottom: '14px' }}>
                  Before GA, he played a key role at HG Infra, streamlining its finance, commercials, and operations in the run-up to its IPO. At Kalpataru, he led finance, accounts, and commercials for the Railway and Substation divisions, managing projects in India and Bangladesh.
                </p>
                <p style={{ color: '#65645f', fontSize: '15px', lineHeight: 1.7, marginBottom: 0 }}>
                  Vinod began his career at IPCL, a Navratna PSU, joining as one of its youngest officers at the age of 21. He went on to lead finance, accounts, and commercials for several regions across the country and later for the Petrochemical Complex in Vadodara. He subsequently joined Reliance Industries, where he led project accounts for India&apos;s largest refinery in Jamnagar.
                </p>
              </motion.div>
            </div>

            <div className="about-roles-grid">
              <motion.div
                className="about-role-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="role-card-number">01</div>
                <h3 className="role-card-title">Management Consultant to SMEs in the Infrastructure Sector</h3>
                <p className="role-card-areas">
                  <strong>Areas:</strong> Roads & Highways, Railways, Metro, Airport, Factory & Industrial Buildings, and Water Infrastructure.
                </p>
              </motion.div>

              <motion.div
                className="about-role-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="role-card-number">02</div>
                <h3 className="role-card-title">Insurance Risk Management Advisor</h3>
                <p className="role-card-areas">
                  <strong>Areas:</strong> Enterprise Risk Assessment, Surety Bonds, Political Risk Cover, Trade Credit Insurance, and Regulatory Compliance.
                </p>
              </motion.div>

              <motion.div
                className="about-role-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="role-card-number">03</div>
                <h3 className="role-card-title">Dubai: Real Estate Investment Advisor & Channel Partner</h3>
                <p className="role-card-areas">
                  <strong>Areas:</strong> Acquisition Due Diligence, Cross-Border Structuring, Channel Partnerships, and Portfolio Advisory across the UAE market.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OUR STORY / COMPANY INTRODUCTION                     */}
        {/* ========================================================= */}
        <section id="story" className="about-story-section">
          <div className="section about-story-container">
            <div className="about-story-grid">
              {/* Left Column: Heading & Description */}
              <motion.div
                className="about-story-left"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">OUR STORY</span>
                </div>

                <h2 className="about-story-headline">
                  <SplitTextReveal>
                    More than a consultancy.<br />
                    <span className="about-accent-blue">A bridge to opportunity.</span>
                  </SplitTextReveal>
                </h2>

                <p className="about-story-desc">
                  VKA Capital Bridge was founded with a clear vision — to bridge the gap between
                  capital and opportunity. With deep market knowledge, a global network and a
                  commitment to excellence, we help clients navigate complex markets and achieve
                  sustainable growth.
                </p>
              </motion.div>

              {/* Right Column: Mission, Vision, Values */}
              <div className="about-story-columns">
                {/* 1. Our Mission */}
                <motion.div
                  className="about-pillar-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="pillar-icon-wrap">
                    <Target size={28} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title">Our Mission</h3>
                  <p className="pillar-text">
                    To create long-term value for our clients, partners and communities through
                    strategic advisory and innovative investment solutions.
                  </p>
                </motion.div>

                {/* 2. Our Vision */}
                <motion.div
                  className="about-pillar-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="pillar-icon-wrap">
                    <Eye size={28} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title">Our Vision</h3>
                  <p className="pillar-text">
                    To be a leading global platform, recognised for trust, expertise and impactful
                    partnerships across industries and regions.
                  </p>
                </motion.div>

                {/* 3. Our Values */}
                <motion.div
                  className="about-pillar-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="pillar-icon-wrap">
                    <Diamond size={28} className="pillar-icon" />
                  </div>
                  <h3 className="pillar-title">Our Values</h3>
                  <ul className="pillar-values-list">
                    <li>Integrity</li>
                    <li>Excellence</li>
                    <li>Collaboration</li>
                    <li>Innovation</li>
                    <li>Sustainable Growth</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 3. IMPACT / STATISTICS BAND (DEEP NAVY)                  */}
        {/* ========================================================= */}
        <section className="about-impact-section">
          <div className="about-impact-bg-pattern" />
          <div className="section about-impact-container">
            <div className="about-impact-grid">
              {/* Left Headline */}
              <motion.div
                className="about-impact-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow dark-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">OUR IMPACT</span>
                </div>

                <h2 className="about-impact-headline">
                  <SplitTextReveal>
                    Numbers that<br />
                    <span className="about-accent-blue">build confidence.</span>
                  </SplitTextReveal>
                </h2>
              </motion.div>

              {/* Right 4 Stats */}
              <div className="about-impact-stats-row">
                <div className="about-impact-stat-item">
                  <div className="stat-big-number">
                    <AnimatedCounter>35+</AnimatedCounter>
                  </div>
                  <div className="stat-label">Years of Experience</div>
                </div>

                <div className="about-impact-stat-item">
                  <div className="stat-big-number">
                    <AnimatedCounter>50+</AnimatedCounter>
                  </div>
                  <div className="stat-label">Strategic Partnerships</div>
                </div>

                <div className="about-impact-stat-item">
                  <div className="stat-big-number">
                    <AnimatedCounter>03</AnimatedCounter>
                  </div>
                  <div className="stat-label">Continents</div>
                </div>

                <div className="about-impact-stat-item">
                  <div className="stat-big-number stat-corridor-text">
                    IN <span className="stat-arrow">→</span> UAE
                  </div>
                  <div className="stat-label">Capital Bridge</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. WHAT SETS US APART                                    */}
        {/* ========================================================= */}
        <section className="about-apart-section">
          <div className="section about-apart-container">
            <div className="about-apart-grid">
              {/* Left Headline & CTA */}
              <motion.div
                className="about-apart-left"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">WHAT SETS US APART</span>
                </div>

                <h2 className="about-apart-headline">
                  <SplitTextReveal>
                    Expertise. Access.<br />
                    <span className="about-accent-blue">Results.</span>
                  </SplitTextReveal>
                </h2>

                <p className="about-apart-desc">
                  We combine global insight with local expertise to deliver customised solutions.
                  Our approach is built on trust, transparency and a deep understanding of market
                  dynamics — ensuring lasting value for our clients and partners.
                </p>

                <Link to="/services" className="about-dark-pill-btn">
                  Our Services <ArrowUpRight size={16} />
                </Link>
              </motion.div>

              {/* Right 4 Columns */}
              <div className="about-apart-columns">
                {/* 1. Global Network */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="feature-icon-wrap">
                    <Globe size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Global Network</h4>
                  <p className="feature-desc">
                    Access to international markets, partners and opportunities.
                  </p>
                </motion.div>

                {/* 2. Trusted Partnerships */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="feature-icon-wrap">
                    <Handshake size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Trusted Partnerships</h4>
                  <p className="feature-desc">
                    Strong relationships with leading institutions, investors and industry experts.
                  </p>
                </motion.div>

                {/* 3. Proven Track Record */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="feature-icon-wrap">
                    <TrendingUp size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Proven Track Record</h4>
                  <p className="feature-desc">
                    A history of successful transactions and sustainable growth.
                  </p>
                </motion.div>

                {/* 4. Client-Centric Approach */}
                <motion.div
                  className="about-feature-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="feature-icon-wrap">
                    <Users size={26} className="feature-icon" />
                  </div>
                  <h4 className="feature-title">Client-Centric Approach</h4>
                  <p className="feature-desc">
                    Tailored solutions for long-term success and value creation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RECOGNITION & AWARDS                                      */}
        {/* ========================================================= */}
        <section className="about-recognition-section" aria-labelledby="about-recognition-title">
          <div className="section">
            <motion.div
              className="about-recognition-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-recognition-eyebrow">
                <span className="about-dash-line" />
                <span>RECOGNITION</span>
              </div>
              <h2 id="about-recognition-title">Awards &amp; Recognition</h2>
              <p>A track record our clients can verify — not just claim.</p>
              <p className="about-recognition-intro">
                Milestones from a career spent building businesses, strengthening infrastructure and serving the community.
              </p>
            </motion.div>

            <div className="about-award-grid">
              <motion.article
                className="about-award-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55 }}
              >
                <a className="about-award-image-link" href="/images/about/roadtech-builder-of-institutions-award.jpg" target="_blank" rel="noreferrer" aria-label="View RoadTech Builder of Institutions Award certificate">
                  <img src="/images/about/roadtech-builder-of-institutions-award.jpg" alt="RoadTech Awards 2026 certificate presented to Shri Vinod Kumar Agrawal" loading="lazy" />
                </a>
                <div className="about-award-copy">
                  <span className="about-award-year">2026</span>
                  <h3>RoadTech Builder of Institutions Award</h3>
                  <ExpandableAwardDescription text="For Transformational Leadership in Infrastructure, presented by EPC World Media Group with Deloitte as knowledge partner." />
                  <span className="about-award-meta">New Delhi · 18 September 2026</span>
                </div>
              </motion.article>

              <motion.article
                className="about-award-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <a className="about-award-image-link" href="/images/about/lions-club-jaipur-metro-award.jpg" target="_blank" rel="noreferrer" aria-label="View Lions Club Jaipur Metro Recognition Award certificate">
                  <img src="/images/about/lions-club-jaipur-metro-award.jpg" alt="Lions Club Jaipur Metro Recognition Award presented to Lion Vinod Agarwal" loading="lazy" />
                </a>
                <div className="about-award-copy">
                  <span className="about-award-year">2023–24</span>
                  <h3>Lions Club Jaipur Metro Recognition Award</h3>
                  <ExpandableAwardDescription text="For distinguished contribution in social service and club activities as a member of Lions Clubs International, District 3233 E-1." />
                  <span className="about-award-meta">Lions Clubs International</span>
                </div>
              </motion.article>

              <motion.article
                className="about-award-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                <a className="about-award-image-link about-award-image-link-tall" href="/images/about/inspired-100-feature.jpg" target="_blank" rel="noreferrer" aria-label="View Vinod Kumar Agrawal's Inspired 100 feature">
                  <img src="/images/about/inspired-100-feature.jpg" alt="The Inspired 100 profile featuring CMA Vinod Kumar Agrawal" loading="lazy" />
                </a>
                <div className="about-award-copy">
                  <span className="about-award-year">TOP 100 CMAs</span>
                  <h3>Featured in “The Inspired 100”</h3>
                  <ExpandableAwardDescription text="Recognised among India’s top Cost & Management Accountants for a career spent building infrastructure that connects India." />
                  <span className="about-award-meta">Leadership, lessons &amp; legacy</span>
                </div>
              </motion.article>

              <motion.article
                className="about-award-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.3 }}
              >
                <a className="about-award-image-link" href="/images/about/epc-world-awards-2026-ceremony.jpg" target="_blank" rel="noreferrer" aria-label="View the EPC World Awards 2026 award presentation">
                  <img src="/images/about/epc-world-awards-2026-ceremony.jpg" alt="Vinod Kumar Agrawal receiving his award at the 12th EPC World Awards in New Delhi" loading="lazy" />
                </a>
                <div className="about-award-copy">
                  <span className="about-award-year">EPC WORLD AWARDS · 2026</span>
                  <h3>RoadTech Builder of Institutions Award</h3>
                  <ExpandableAwardDescription text="For Transformational Leadership in Infrastructure, presented by EPC World Media Group with Deloitte as knowledge partner. <h3>The Citation announced by the Jury on stage</h3> Some leaders deliver projects, exceptional leaders build the foundations that enable entire organizations to grow, scale and endure. Today, we recognize a distinguished professional whose transformational leadership has helped shape the technology, processes, talent, governance and financial foundations behind the evolution of infrastructure enterprises into professionally managed nationally scaled institutions. His contribution goes beyond building businesses. It is about building the systems, capabilities and people that create institutions designed to perform, evolve and stand the test of time." />
                  <span className="about-award-meta">10 April 2026 · Hotel The Ashok, New Delhi</span>
                </div>
              </motion.article>
            </div>

            <div className="about-award-video-row">
              <div className="about-award-video-copy">
                <div className="about-recognition-eyebrow">
                  <span className="about-dash-line" />
                  <span>THE MOMENT</span>
                </div>
                <h3>Receiving the award</h3>
                <p>A milestone recognising the leadership and work behind India’s infrastructure journey.</p>
              </div>
              <div className="about-award-video-card" ref={awardVideoSectionRef}>
                {isAwardVideoVisible ? (
                  <iframe
                    className="about-award-video-frame"
                    src="https://www.youtube-nocookie.com/embed/mE-IR2Zsrao?autoplay=1&mute=1&controls=1&playsinline=1&rel=0"
                    title="Receiving the RoadTech Builder of Institutions Award"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img src="/images/about/roadtech-builder-of-institutions-award.jpg" alt="RoadTech Builder of Institutions Award certificate" loading="lazy" />
                    <div className="about-award-video-overlay">
                      <span className="about-award-video-play" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
                      <span>SCROLL TO PLAY</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. FINAL CTA / GLOBAL AMBITIONS (PANORAMIC DUBAI)        */}
        {/* ========================================================= */}
        <section className="about-cta-section">
          <div
            className="about-cta-bg"
            style={{ backgroundImage: `url('/images/about/dubai-canal-skyline.jpg')` }}
          />
          <div className="about-cta-overlay" />

          <div className="section about-cta-container">
            <div className="about-cta-flex">
              <motion.div
                className="about-cta-copy"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <div className="about-eyebrow dark-eyebrow">
                  <span className="about-dash-line" />
                  <span className="about-eyebrow-text">LET'S BUILD TOGETHER</span>
                </div>

                <h2 className="about-cta-headline">
                  <SplitTextReveal>
                    Your global ambitions.<br />
                    <span className="about-accent-blue">Our strategic support.</span>
                  </SplitTextReveal>
                </h2>

                <p className="about-cta-desc">
                  Partner with VKA Capital Bridge and unlock new opportunities across markets,
                  industries and borders.
                </p>
              </motion.div>

              <motion.div
                className="about-cta-btn-wrap"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <a href="/#contact" className="about-cta-white-btn">
                  Start a conversation <ArrowUpRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
