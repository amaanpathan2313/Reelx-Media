import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'
import logoImg from '../../assets/logo-transparent.png'
import './About.css'

const features = [
  { icon: '🎬', text: 'Strategic Business Planning' },
  { icon: '📊', text: 'Content & Brand Positioning' },
  { icon: '🚀', text: 'Lead Generation & Sales' },
  { icon: '🎯', text: 'Performance & Growth Tracking' },
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
            We Are
            <br />
            <span className="gradient-text about__heading-business">Business</span>
            <br />
            <span className="gradient-text about__heading-nowrap">Growth Strategists</span>
          </h2>

          <p className="about__desc">
            At ReelXMedia, we combine business strategy, content creation, and performance
            marketing to help brands attract customers, generate leads, increase sales, and
            scale their business.
          </p>

          <p className="about__desc">
            We don't believe in one-size-fits-all marketing. We build strategic business growth systems specifically designed around your business, your target audience, and your desired goals—turning marketing efforts into measurable progress and sustainable growth.
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
