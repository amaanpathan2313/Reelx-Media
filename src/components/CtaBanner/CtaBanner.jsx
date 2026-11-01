import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './CtaBanner.css'

const whatsappUrl = `https://wa.me/917039469780?text=${encodeURIComponent('Hi, I want to book your consultation ')}`

const CtaBanner = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="cta section" id="cta" ref={ref}>
      {/* Background gradient mesh */}
      <div className="cta__mesh" />
      <div className="cta__orb cta__orb--1" />
      <div className="cta__orb cta__orb--2" />
      <div className="cta__orb cta__orb--3" />

      <div className="container">
        <motion.div
          className="cta__inner"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <div className="cta__badge">
            <span>🚀</span>
            <span>Limited Spots Available</span>
          </div>

          <h2 className="cta__heading">
            Ready to Grow{' '}
            <span className="gradient-text">Your Business </span>
            ?
          </h2>

          <p className="cta__subheading">
            Book your free 30-minute strategy call to identify growth opportunities,
            <br className="cta__br" />
            uncover marketing gaps, and discover how ReelXMedia can
            <br className="cta__br" />
            help you attract more customers and grow your business.
          </p>

          {/* Features */}
          <div className="cta__features">
            {['Free 30-Minute Strategy Call', 'Personalized Growth Strategy', 'Expert Marketing Insights', 'Actionable Growth Roadmap'].map(f => (
              <div key={f} className="cta__feature">
                <span className="cta__feature-check">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* CTA Action */}
          <div className="cta__form" id="cta-form">
            <div className="cta__input-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta__submit btn-primary"
                id="cta-submit-btn"
              >
                <span>Book Free Call</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <p className="cta__privacy">🔒 No spam, ever. We respect your privacy.</p>
          </div>

          {/* Trust row */}
          <div className="cta__trust">
            <div className="cta__trust-item">
              <span className="cta__trust-num">40+</span>
              <span className="cta__trust-label">Happy Clients</span>
            </div>
            <div className="cta__trust-divider" />
            <div className="cta__trust-item">
              <span className="cta__trust-num">₹50M+</span>
              <span className="cta__trust-label">Revenue Generated</span>
            </div>
            <div className="cta__trust-divider" />
            <div className="cta__trust-item">
              <span className="cta__trust-num">98%</span>
              <span className="cta__trust-label">Satisfaction Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaBanner
