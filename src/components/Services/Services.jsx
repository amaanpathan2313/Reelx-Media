import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import './Services.css'

const services = [
  {
    id: 'youtube',
    icon: '🎬',
    tag: 'Video',
    title: 'YouTube & Long-Form Ads',
    desc: 'High-converting YouTube ads crafted to build brand authority, drive traffic, and generate qualified leads from your target audience.',
    features: ['Scriptwriting', 'Professional production', 'A/B testing', 'Performance analytics'],
    color: 'linear-gradient(135deg, #ff0000 0%, #8b5cf6 100%)',
    bgColor: 'rgba(255, 0, 0, 0.08)',
    borderColor: 'rgba(255, 0, 0, 0.2)',
  },
  {
    id: 'reels',
    icon: '📱',
    tag: 'Short-Form',
    title: 'Instagram Reels & TikTok',
    desc: 'Viral-ready short-form content engineered for maximum engagement, reach, and follower growth across social platforms.',
    features: ['Trend analysis', 'Hook optimization', 'Viral storytelling', 'Platform adaptation'],
    color: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    borderColor: 'rgba(139, 92, 246, 0.2)',
  },
  {
    id: 'ugc',
    icon: '🎭',
    tag: 'UGC',
    title: 'UGC Content Creation',
    desc: 'Authentic, user-generated style content that builds trust, social proof, and drives purchase decisions.',
    features: ['Creator network', 'Brand voice alignment', 'Authentic storytelling', 'Review videos'],
    color: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
    bgColor: 'rgba(249, 115, 22, 0.08)',
    borderColor: 'rgba(249, 115, 22, 0.2)',
  },
  {
    id: 'product',
    icon: '🛍️',
    tag: 'E-commerce',
    title: 'Product & Brand Videos',
    desc: 'Stunning product showcases and brand films that communicate value, build desire, and push customers to buy.',
    features: ['Product showcase', 'Brand storytelling', 'E-commerce optimized', '4K production'],
    color: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    bgColor: 'rgba(6, 182, 212, 0.08)',
    borderColor: 'rgba(6, 182, 212, 0.2)',
  },
  {
    id: 'testimonial',
    icon: '⭐',
    tag: 'Social Proof',
    title: 'Testimonial Videos',
    desc: 'Compelling customer success stories that convert skeptics into buyers through authentic social proof.',
    features: ['Customer interviews', 'Story structure', 'Emotional editing', 'Result highlights'],
    color: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    bgColor: 'rgba(251, 191, 36, 0.08)',
    borderColor: 'rgba(251, 191, 36, 0.2)',
  },
  {
    id: 'strategy',
    icon: '🧠',
    tag: 'Strategy',
    title: 'Content Strategy & Consulting',
    desc: 'Full video marketing strategy that aligns with your business goals, funnel stages, and audience psychology.',
    features: ['Funnel mapping', 'Content calendar', 'Competitor analysis', 'Growth roadmap'],
    color: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    borderColor: 'rgba(139, 92, 246, 0.2)',
  },
]

const Services = () => {
  const [activeService, setActiveService] = useState(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="services__orb" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">What We Do</div>
          <h2 className="services__heading">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="services__subheading">
            End-to-end video production and strategy solutions designed to grow your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services__grid">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.08}
                className="services__tilt"
              >
                <div
                  className={`services__card ${activeService === service.id ? 'services__card--active' : ''}`}
                  style={{
                    '--service-bg': service.bgColor,
                    '--service-border': service.borderColor,
                  }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Top */}
                  <div className="services__card-top">
                    <div className="services__icon-wrap" style={{ background: service.bgColor, borderColor: service.borderColor }}>
                      <span className="services__icon">{service.icon}</span>
                    </div>
                    <span className="services__tag">{service.tag}</span>
                  </div>

                  {/* Content */}
                  <h3 className="services__title">{service.title}</h3>
                  <p className="services__desc">{service.desc}</p>

                  {/* Features */}
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.ul
                        className="services__features"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.features.map(feat => (
                          <li key={feat} className="services__feature">
                            <span className="services__feature-check">✓</span>
                            {feat}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Arrow */}
                  <div className="services__arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span>Learn more</span>
                  </div>

                  {/* Gradient line */}
                  <div className="services__line" style={{ background: service.color }} />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
