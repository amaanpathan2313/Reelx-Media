import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import './Services.css'

const services = [
  {
    id: 'content-creation',
    icon: '🎬',
    tag: 'Creation',
    title: 'Content Creation',
    desc: 'High-converting, cinematic video and visual content tailored to tell your brand story and capture audience attention.',
    features: ['Scriptwriting & concepts', 'Cinematic 4K production', 'Viral editing & pacing', 'Platform optimization'],
    color: 'linear-gradient(135deg, #ff0000 0%, #8b5cf6 100%)',
    bgColor: 'rgba(255, 0, 0, 0.08)',
    borderColor: 'rgba(255, 0, 0, 0.2)',
  },
  {
    id: 'social-growth',
    icon: '📱',
    tag: 'Growth',
    title: 'Social Media Growth',
    desc: 'Strategic organic and paid campaigns engineered to scale your audience, amplify engagement, and build loyal community followings.',
    features: ['Organic reach expansion', 'Audience targeting', 'Content scheduling', 'Engagement optimization'],
    color: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    borderColor: 'rgba(139, 92, 246, 0.2)',
  },
  {
    id: 'lead-generation',
    icon: '🎯',
    tag: 'Performance',
    title: 'Lead Generation',
    desc: 'Targeted performance ad funnels designed to capture qualified prospects, drive inbound enquiries, and maximize sales conversions.',
    features: ['High-intent lead funnels', 'Paid ads management', 'A/B testing & retargeting', 'Conversion rate optimization'],
    color: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    bgColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  {
    id: 'influencer-collab',
    icon: '🤝',
    tag: 'Partnerships',
    title: 'Influencer Collab',
    desc: 'End-to-end influencer partnership campaigns that connect your brand with trusted creators who resonate with your ideal customers.',
    features: ['Creator matchmaking', 'Campaign management', 'Contract negotiation', 'ROI & performance tracking'],
    color: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
    bgColor: 'rgba(249, 115, 22, 0.08)',
    borderColor: 'rgba(249, 115, 22, 0.2)',
  },
  {
    id: 'ugc',
    icon: '🎭',
    tag: 'UGC',
    title: 'UGC',
    desc: 'Relatable, authentic user-generated content that provides genuine social proof and drives high-trust purchasing decisions.',
    features: ['Verified creator network', 'Native-style testimonials', 'Direct-response hooks', 'Ad-ready assets'],
    color: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
    bgColor: 'rgba(251, 191, 36, 0.08)',
    borderColor: 'rgba(251, 191, 36, 0.2)',
  },
  {
    id: 'consulting-strategy',
    icon: '🧠',
    tag: 'Strategy',
    title: 'Consulting and Strategy',
    desc: 'In-depth brand positioning and marketing roadmaps customized to achieve your revenue milestones and competitive advantage.',
    features: ['Brand positioning', 'Content calendar planning', 'Competitor benchmarking', 'Full-funnel architecture'],
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
