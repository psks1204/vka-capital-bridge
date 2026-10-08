import { motion } from 'framer-motion'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/footer/Footer'
import { ServiceCard } from '../components/services/ServiceCard'
import { GlobalReachCTA } from '../components/services/GlobalReachCTA'
import { SEO } from '../components/common/SEO'
import { servicesData } from '../data/services'
import { SplitTextReveal } from '../components/animations/SplitTextReveal'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
}

export function ServicesPage() {
  return (
    <div className="site services-page-site">
      <SEO
        title="Our Services | Capabilities Built Around Complex Decisions | VKA Capital Bridge"
        description="Strategic advisory and capital solutions across infrastructure, finance, risk management, U.S. accounting, hedge accounting, international taxation and global real estate."
      />
      <div className="noise" />
      <Navbar />

      <main className="services-page-main">
        {/* Services Page Editorial Hero with Background Image */}
        <section className="services-hero-section">
          <div className="services-hero-bg" />
          <div className="services-hero-overlay" />
          <div className="section services-hero-container">
            <motion.div
              className="services-hero-copy"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="section-label-gold">
                <span className="dash-line" />
                <span className="label-text">OUR SERVICES</span>
              </div>

              <h1 className="services-hero-headline">
                <SplitTextReveal>
                  Capabilities built around<br />
                  <span className="text-accent-blue">complex decisions.</span>
                </SplitTextReveal>
              </h1>

              <p className="services-hero-lead">
                Strategic advisory and capital solutions across infrastructure, finance and global real estate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5 Services Grid */}
        <section className="services-grid-section section">
          <div className="services-overview-grid">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* Global Reach CTA Section */}
        <GlobalReachCTA />
      </main>

      <Footer />
    </div>
  )
}
