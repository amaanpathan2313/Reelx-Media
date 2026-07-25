import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Brands.css'

const brandLogos = [
  { name: 'TechFlow', icon: '💻', color: '#8b5cf6' },
  { name: 'FitLife', icon: '💪', color: '#06b6d4' },
  { name: 'LuxHome', icon: '🏠', color: '#f97316' },
  { name: 'StyleCo', icon: '👕', color: '#ec4899' },
  { name: 'GreenEats', icon: '🌿', color: '#10b981' },
  { name: 'SpeedPay', icon: '⚡', color: '#fbbf24' },
  { name: 'SkyVault', icon: '☁️', color: '#3b82f6' },
  { name: 'VoxMedia', icon: '🎙️', color: '#a78bfa' },
]

const Brands = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="brands section" id="brands" ref={ref}>
      <div className="container">
        <motion.div
          className="brands__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="brands__tagline">
            We Don't Just <span className="gradient-text">Make Videos</span>,
            We Build <span className="gradient-text">Brands</span>
          </p>
          <p className="brands__sub">Trusted by fast-growing companies across industries</p>
        </motion.div>

        {/* Brand logos */}
        <motion.div
          className="brands__grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {brandLogos.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="brands__logo"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <div className="brands__logo-icon" style={{ color: brand.color }}>
                {brand.icon}
              </div>
              <span className="brands__logo-name">{brand.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="brands__bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="brands__pill">
            <span className="brands__pill-dot" />
            <span>Ready to join them?</span>
          </div>
          <a href="#cta" className="btn-primary" id="brands-cta">
            Start Your Brand Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Brands
