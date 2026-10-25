import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './HowWeWork.css'

const steps = [
  {
    num: '01',
    icon: '🎯',
    title: 'Competitor Analysis',
    desc: 'Understand your competitors’ strategies, identify market gaps, and discover opportunities to attract more customers and increase sales.',
    color: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.35)',
    dotColor: '#8b5cf6',
  },
  {
    num: '02',
    icon: '📋',
    title: 'Strategy Building',
    desc: 'We create a monthly content strategy with detailed planning, engaging scripts, and a clear shoot plan tailored to your business goals.',
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.35)',
    dotColor: '#06b6d4',
  },
  {
    num: '03',
    icon: '🎥',
    title: 'Professional Videography',
    desc: 'We professionally direct every shoot using 4K cameras and professional equipment to create compelling videos that capture attention and attract potential customers.',
    color: '#f43f5e',
    glow: 'rgba(244, 63, 94, 0.35)',
    dotColor: '#f43f5e',
  },
  {
    num: '04',
    icon: '⚡',
    title: 'Content Editing',
    desc: 'We transform raw footage into engaging videos with professional editing, smooth transitions, captivating visuals, and attention-grabbing hooks.',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.35)',
    dotColor: '#a855f7',
  },
  {
    num: '05',
    icon: '📱',
    title: 'Social Media Management',
    desc: 'We manage your social media presence through consistent posting, strategic content, and professional brand presentation to build trust and turn followers into customers.',
    color: '#22d3ee',
    glow: 'rgba(34, 211, 238, 0.35)',
    dotColor: '#22d3ee',
  },
  {
    num: '06',
    icon: '📈',
    title: 'Monthly Growth Reporting',
    desc: 'We track organic growth, audience engagement, reach, and leads generated so you can measure performance and make smarter marketing decisions.',
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.35)',
    dotColor: '#f59e0b',
  },
]

const HowWeWork = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="hww section" id="how-we-work" ref={ref}>
      <div className="hww__orb" />

      <div className="container hww__container">
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
            A proven 6-step roadmap that turns your vision into revenue-generating video content
          </p>
        </motion.div>

        {/* Steps Wrapper with Continuous Timeline Line */}
        <div className="hww__steps-wrapper">
          <div className="hww__timeline-line" />

          <div className="hww__steps">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="hww__step"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {/* Connector Dot in gap for steps 01-05 */}
                {i < steps.length - 1 && (
                  <div
                    className="hww__connector-node"
                    style={{ '--node-color': step.dotColor }}
                  >
                    <span className="hww__connector-dot" />
                  </div>
                )}

                {/* Card */}
                <div
                  className="hww__card"
                  style={{
                    '--step-color': step.color,
                    '--step-glow': step.glow,
                  }}
                >
                  <div className="hww__num" style={{ color: step.color }}>
                    {step.num}
                  </div>
                  <div
                    className="hww__icon-wrap"
                    style={{
                      background: `${step.color}15`,
                      borderColor: `${step.color}35`,
                    }}
                  >
                    <span className="hww__icon">{step.icon}</span>
                  </div>
                  <h3 className="hww__title">{step.title}</h3>
                  <p className="hww__desc">{step.desc}</p>
                  <div
                    className="hww__glow"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${step.color}25 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="hww__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
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
