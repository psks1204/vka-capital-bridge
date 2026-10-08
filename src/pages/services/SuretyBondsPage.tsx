import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Compass, Layers, ShieldCheck } from 'lucide-react'
import { Navbar } from '../../components/navigation/Navbar'
import { Footer } from '../../components/footer/Footer'
import { SEO } from '../../components/common/SEO'
import { getServiceBySlug } from '../../data/services'
import { SplitTextReveal } from '../../components/animations/SplitTextReveal'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
}

export function SuretyBondsPage() {
  const service = getServiceBySlug('surety-bonds-bg-advisory')!

  return (
    <div className="site service-detail-site page-surety-bonds">
      <SEO title={service.seo.title} description={service.seo.description} />
      <div className="noise" />
      <Navbar />

      <main className="service-detail-main">
        {/* Dark Hero Section with Background Image */}
        <section className="services-hero-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div className="services-hero-bg" style={{ backgroundImage: `url('${service.heroImage}')`, filter: 'brightness(0.55)' }} />
          <div className="services-hero-overlay" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)' }} />
          <div className="section services-hero-container" style={{ position: 'relative', zIndex: 3 }}>
            <motion.div
              className="services-hero-copy"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="section-label-gold">
                <span className="dash-line" />
                <span className="label-text" style={{ color: '#c9a050' }}>
                  SERVICES — SURETY BONDS & BG ADVISORY
                </span>
              </div>

              <h1 className="services-hero-headline" style={{ color: '#ffffff' }}>
                <SplitTextReveal>
                  Surety Bonds & BG <span className="text-accent-blue">{service.heroHighlightWord}</span>
                </SplitTextReveal>
              </h1>

              <p className="services-hero-lead" style={{ color: '#e0e0e0', maxWidth: '700px' }}>
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Previous / Next Service Navigation Bar */}
        <nav className="detail-service-pager" aria-label="Service navigation">
          <div className="section pager-container">
            <Link
              to={`/services/${service.prev.slug}`}
              className="pager-link pager-prev"
              title={service.prev.title}
            >
              <ArrowLeft size={16} className="pager-arrow" />
              <div className="pager-text-col">
                <span className="pager-kicker">Previous</span>
                <span className="pager-name">{service.prev.title}</span>
              </div>
            </Link>

            <div className="pager-counter">
              <span className="pager-current">{service.number}</span>
              <span className="pager-sep">/</span>
              <span className="pager-total">06</span>
            </div>

            <Link
              to={`/services/${service.next.slug}`}
              className="pager-link pager-next"
              title={service.next.title}
            >
              <div className="pager-text-col text-right">
                <span className="pager-kicker">Next</span>
                <span className="pager-name">{service.next.title}</span>
              </div>
              <ArrowRight size={16} className="pager-arrow" />
            </Link>
          </div>
        </nav>

        {/* Overview Section - Split Image & Text */}
        <section className="detail-overview-section section">
          <div className="detail-overview-grid">
            <motion.div
              className="overview-image-container"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={service.overviewImage}
                alt={service.title}
                className="overview-featured-img"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="overview-copy-container"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label-gold">
                <span className="dash-line" />
                <span className="label-text">OVERVIEW</span>
              </div>

              <h2 className="overview-headline">
                <SplitTextReveal>
                  {service.overview.heading}<br />
                  <em>{service.overview.subheading}</em>
                </SplitTextReveal>
              </h2>

              <p className="overview-lead-paragraph">{service.overview.lead}</p>

              {service.overview.paragraphs.map((p, idx) => (
                <p key={idx} className="overview-body-paragraph">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Capabilities & Approach Section */}
        <section className="detail-capabilities-approach-section section">
          <div className="capabilities-approach-grid">
            {/* Left: Key Capabilities List */}
            <div className="capabilities-column">
              <div className="section-label-gold">
                <span className="dash-line" />
                <span className="label-text">KEY CAPABILITIES</span>
              </div>

              <div className="capabilities-numbered-list">
                {service.capabilities.map((cap) => (
                  <div key={cap.number} className="capability-list-item">
                    <span className="capability-index">{cap.number}</span>
                    <div className="capability-info">
                      <h4 className="capability-title">{cap.title}</h4>
                      <p className="capability-desc">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Our Approach */}
            <div className="approach-column">
              <div className="section-label-gold">
                <span className="dash-line" />
                <span className="label-text">{service.approach.heading.toUpperCase()}</span>
              </div>

              <h3 className="approach-headline">
                <SplitTextReveal>
                  {service.approach.subheading}
                </SplitTextReveal>
              </h3>
              <p className="approach-lead-copy">{service.approach.lead}</p>

              <div className="approach-steps-list">
                {service.approach.steps.map((st, i) => (
                  <div key={st.number} className="approach-step-card">
                    <div className="step-icon-bubble">
                      {i === 0 && <Compass size={18} />}
                      {i === 1 && <Layers size={18} />}
                      {i === 2 && <ShieldCheck size={18} />}
                    </div>
                    <div className="step-text-wrap">
                      <h5 className="step-title">{st.title}</h5>
                      <p className="step-desc">{st.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Client Situations Card */}
              <div className="situations-callout-box">
                <h4 className="situations-title">Representative Situations</h4>
                <ul className="situations-list">
                  {service.situations.map((sit, idx) => (
                    <li key={idx} className="situation-item">
                      <strong>{sit.title}:</strong> {sit.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Perspective (Dark Section) */}
        <section className="detail-perspective-section">
          <div className="perspective-content-split section">
            <div className="perspective-text-area">
              <div className="section-label-gold light-label">
                <span className="dash-line" />
                <span className="label-text">GLOBAL PERSPECTIVE</span>
              </div>
              <h2 className="perspective-headline">
                <SplitTextReveal>
                  {service.crossBorder.heading}<br />
                  <em>{service.crossBorder.subheading}</em>
                </SplitTextReveal>
              </h2>
            </div>

            <div className="perspective-narrative-area">
              <p className="perspective-narrative-lead">{service.crossBorder.lead}</p>
              <p className="perspective-narrative-body">{service.crossBorder.paragraph}</p>
            </div>
          </div>

          <div
            className="perspective-visual-band"
            style={{ backgroundImage: `url('${service.perspectiveImage}')` }}
          />
        </section>

        {/* Why VKA Section */}
        <section className="detail-why-section section">
          <div className="why-vka-split-grid">
            <div className="why-copy-col">
              <div className="section-label-gold">
                <span className="dash-line" />
                <span className="label-text">{service.whyVka.subheading}</span>
              </div>
              <h2 className="why-headline">
                <SplitTextReveal>
                  {service.whyVka.heading}
                </SplitTextReveal>
              </h2>
              <p className="why-lead">{service.whyVka.lead}</p>
              <p className="why-body">{service.whyVka.paragraph}</p>
            </div>

            <div className="why-points-col">
              <div className="why-points-card">
                {service.whyVka.points.map((pt, idx) => (
                  <div key={idx} className="why-point-row">
                    <span className="why-point-check">
                      <Check size={16} />
                    </span>
                    <span className="why-point-text">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner CTA */}
        <section className="detail-banner-cta-section section">
          <div className="detail-banner-card">
            <div className="banner-bg-lighting" />
            <div className="banner-card-body">
              <div className="banner-text-col">
                <h3 className="banner-headline">
                  <SplitTextReveal>
                    {service.cta.heading}
                  </SplitTextReveal>
                </h3>
                <p className="banner-subcopy">{service.cta.description}</p>
              </div>
              <a href="/#contact" className="button banner-action-btn">
                {service.cta.buttonText} <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
