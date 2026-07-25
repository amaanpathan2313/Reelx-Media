import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import './About.css'

const features = [
  { icon: '🎬', text: 'Data-driven video strategy' },
  { icon: '📊', text: 'ROI-focused content creation' },
  { icon: '🚀', text: 'Rapid production & delivery' },
  { icon: '🎯', text: 'Platform-specific optimization' },
]

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="about__orb about__orb--1" />
      <div className="about__orb about__orb--2" />

      <div className="container about__container">
        {/* Right Visual (shown first on mobile) */}
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#8b5cf6"
            className="about__tilt"
          >
            <div className="about__card-3d">
              {/* Main card */}
              <div className="about__media-card">
                <div className="about__media-header">
                  <div className="about__media-dots">
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <span className="about__media-tag">ReelX Analytics</span>
                </div>
                <div className="about__media-content">
                  <div className="about__chart">
                    {[40, 65, 45, 80, 60, 90, 75, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        className="about__chart-bar"
                        initial={{ height: 0 }}
                        animate={inView ? { height: `${h}%` } : {}}
                        transition={{ delay: i * 0.1 + 0.5, duration: 0.6, ease: 'easeOut' }}
                        style={{ opacity: 0.4 + (i / 8) * 0.6 }}
                      />
                    ))}
                  </div>
                  <div className="about__chart-label">
                    <span>Revenue Growth Trend</span>
                    <span className="about__chart-val gradient-text">+340%</span>
                  </div>
                </div>
              </div>

              {/* Badge overlay */}
              <motion.div
                className="about__badge-overlay"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="about__badge-icon">🏆</div>
                <div>
                  <div className="about__badge-title">Award Winning</div>
                  <div className="about__badge-sub">Top Video Agency 2024</div>
                </div>
              </motion.div>

              {/* ReelX logo watermark */}
              <div className="about__watermark">
                <span>REEL<span>X</span></span>
                <small>MEDIA</small>
              </div>
            </div>
          </Tilt>

          {/* Decorative elements */}
          <div className="about__ring about__ring--1" />
          <div className="about__ring about__ring--2" />
        </motion.div>

        {/* Left Content */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="section-label">About ReelX</div>

          <h2 className="about__heading">
            We Are{' '}
            <span className="gradient-text">Performance</span>
            <br />
            Driven Content Creators
          </h2>

          <p className="about__desc">
            At ReelX Media, we blend cinematic storytelling with data-driven strategy.
            Every video we create is engineered to perform — attracting your ideal audience
            and converting them into loyal, paying customers.
          </p>

          <p className="about__desc">
            We're not just videographers. We're growth partners who understand both the art
            of compelling content and the science of what makes businesses scale.
          </p>

          <div className="about__features">
            {features.map((feat, i) => (
              <motion.div
                key={feat.text}
                className="about__feature"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <span className="about__feature-icon">{feat.icon}</span>
                <span className="about__feature-text">{feat.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="about__ctas">
            <a href="#cta" className="btn-primary">Start Your Growth Journey</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
