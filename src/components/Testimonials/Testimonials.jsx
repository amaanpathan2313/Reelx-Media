import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, FitLife Supplements',
    avatar: '👩‍💼',
    color: '#8b5cf6',
    rating: 5,
    text: 'ReelX Media completely transformed our video marketing. Our YouTube ads went from 1.2x ROAS to 11.9x in just 2 months. The team understands both creativity and data — a rare combination that actually moves the needle.',
    metric: '11.9x ROAS',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Founder, TechFlow SaaS',
    avatar: '👨‍💻',
    color: '#06b6d4',
    rating: 5,
    text: 'We were skeptical about video at first, but ReelX proved us completely wrong. Our monthly revenue jumped from $12K to $74K in 4 months. The scripts they wrote captured our value proposition better than we ever could.',
    metric: '+520% Revenue',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'CMO, LuxHome Decor',
    avatar: '👩‍🎨',
    color: '#f97316',
    rating: 5,
    text: 'The attention to detail is incredible. Every video feels premium, on-brand, and more importantly — it converts. Our sales went from $8K to $35K monthly. ReelX is now our permanent content partner.',
    metric: '+340% Sales',
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    role: 'E-commerce Director, Urban Style',
    avatar: '👨‍🎯',
    color: '#ec4899',
    rating: 5,
    text: 'We\'ve worked with multiple agencies but none delivered results like ReelX. Their UGC content strategy got us 5.6 million views and 14x ROAS. They don\'t just create content, they engineer revenue.',
    metric: '14x ROAS',
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="testi section" id="testimonials" ref={ref}>
      <div className="testi__orb testi__orb--1" />
      <div className="testi__orb testi__orb--2" />

      <div className="container">
        <motion.div
          className="testi__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Love</div>
          <h2 className="testi__heading">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="testi__featured"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testi__main"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Quote */}
              <div className="testi__quote-icon">❝</div>
              <p className="testi__text">{testimonials[active].text}</p>

              {/* Author */}
              <div className="testi__author">
                <div className="testi__avatar" style={{ background: `${testimonials[active].color}25`, border: `2px solid ${testimonials[active].color}50` }}>
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="testi__name">{testimonials[active].name}</div>
                  <div className="testi__role">{testimonials[active].role}</div>
                </div>
                <div className="testi__metric" style={{ color: testimonials[active].color }}>
                  {testimonials[active].metric}
                </div>
              </div>

              {/* Stars */}
              <div className="testi__stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="testi__star">★</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Glow */}
          <div className="testi__featured-glow" style={{ background: `radial-gradient(circle at center, ${testimonials[active].color}15 0%, transparent 70%)` }} />
        </motion.div>

        {/* Selector cards */}
        <div className="testi__cards">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              className={`testi__card ${active === i ? 'testi__card--active' : ''}`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              style={{ '--t-color': t.color }}
              whileHover={{ y: -4 }}
            >
              <div className="testi__card-avatar" style={{ background: `${t.color}25` }}>
                {t.avatar}
              </div>
              <div className="testi__card-info">
                <div className="testi__card-name">{t.name}</div>
                <div className="testi__card-role">{t.role}</div>
              </div>
              <div className="testi__card-metric" style={{ color: t.color }}>{t.metric}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
