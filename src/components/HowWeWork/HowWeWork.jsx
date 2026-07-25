import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './HowWeWork.css'

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discovery Call',
    desc: 'We analyze your brand, audience, competitors, and goals to craft a winning content strategy.',
    color: '#8b5cf6',
  },
  {
    num: '02',
    icon: '📝',
    title: 'Strategy & Script',
    desc: 'Our creative team develops hooks, scripts, and storyboards optimized for your audience psychology.',
    color: '#4f46e5',
  },
  {
    num: '03',
    icon: '🎥',
    title: 'Production',
    desc: 'Professional filming and editing with cinematic quality that makes your brand stand out.',
    color: '#06b6d4',
  },
  {
    num: '04',
    icon: '🧪',
    title: 'A/B Testing',
    desc: 'We test multiple versions to identify top performers and maximize your content ROI.',
    color: '#10b981',
  },
  {
    num: '05',
    icon: '🚀',
    title: 'Launch & Scale',
    desc: 'Deploy winning content, amplify reach, and scale what works to grow your revenue consistently.',
    color: '#ec4899',
  },
]

const HowWeWork = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="hww section" id="how-we-work" ref={ref}>
      <div className="hww__orb" />

      <div className="container">
        <motion.div
          className="hww__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Process</div>
          <h2 className="hww__heading">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="hww__subheading">
            A proven 5-step process that turns your vision into revenue-generating video content
          </p>
        </motion.div>

        {/* Steps */}
        <div className="hww__steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="hww__step"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hww__connector"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                />
              )}

              {/* Card */}
              <div className="hww__card" style={{ '--step-color': step.color }}>
                <div className="hww__num" style={{ color: step.color }}>{step.num}</div>
                <div className="hww__icon-wrap" style={{ background: `${step.color}15`, border: `1px solid ${step.color}40` }}>
                  <span className="hww__icon">{step.icon}</span>
                </div>
                <h3 className="hww__title">{step.title}</h3>
                <p className="hww__desc">{step.desc}</p>
                <div className="hww__glow" style={{ background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)` }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="hww__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="#cta" className="btn-primary" id="hww-cta">
            Start Your Journey Today
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeWork
