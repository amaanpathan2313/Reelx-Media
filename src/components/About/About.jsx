import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import logoImg from '../../assets/logo-transparent.png'
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


              {/* ReelX logo watermark */}
              {/* <div className="about__watermark">
                <img src={logoImg} alt="ReelX Media Logo" className="about__watermark-img" />
              </div> */}
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
