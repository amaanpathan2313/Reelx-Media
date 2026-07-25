import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './CtaBanner.css'

const CtaBanner = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail('')
    }
  }

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
            Ready to Go{' '}
            <span className="gradient-text">Viral</span>
            ?
          </h2>

          <p className="cta__subheading">
            Book your free 30-minute strategy call and discover how we can transform
            your brand with performance video content that actually grows your revenue.
          </p>

          {/* Features */}
          <div className="cta__features">
            {['Free strategy call', 'No commitment', 'Results in 30 days', 'ROI guaranteed'].map(f => (
              <div key={f} className="cta__feature">
                <span className="cta__feature-check">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="cta__form" onSubmit={handleSubmit} id="cta-form">
            <div className="cta__input-wrap">
              <input
                type="email"
                className="cta__input"
                placeholder="Enter your email address..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                id="cta-email"
              />
              <button type="submit" className="cta__submit btn-primary" id="cta-submit-btn">
                {submitted ? '✓ Sent!' : 'Book Free Call'}
                {!submitted && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>
            </div>
            <p className="cta__privacy">🔒 No spam, ever. We respect your privacy.</p>
          </form>

          {/* Trust row */}
          <div className="cta__trust">
            <div className="cta__trust-item">
              <span className="cta__trust-num">500+</span>
              <span className="cta__trust-label">Happy Clients</span>
            </div>
            <div className="cta__trust-divider" />
            <div className="cta__trust-item">
              <span className="cta__trust-num">$50M+</span>
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
