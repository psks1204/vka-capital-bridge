import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ServiceData } from '../../data/services'

interface ServiceCardProps {
  service: ServiceData
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="service-overview-card-wrapper"
    >
      <Link to={`/services/${service.slug}`} className="service-overview-card">
        <div className="card-image-container">
          <img
            src={service.cardImage}
            alt={service.title}
            className="card-featured-image"
            loading="lazy"
          />
          <div className="card-image-overlay" />
        </div>

        <div className="card-content-area">
          <span className="card-number-label">{service.number}</span>
          <h3 className="card-heading-title">{service.title}</h3>
          <p className="card-body-text">{service.description}</p>

          <div className="card-action-row">
            <span className="card-explore-link">
              Explore service
              <ArrowUpRight size={15} className="card-explore-arrow" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
