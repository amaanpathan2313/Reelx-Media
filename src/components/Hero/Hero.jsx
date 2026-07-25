import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import './Hero.css'

const Hero = () => {
  const videoRef = useRef(null)

  return (
    <section className="hero" id="hero">
      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid overlay */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__container">
        {/* Left Content */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__badge-dot" />
            <span>Performance Video Agency</span>
          </motion.div>

          <h1 className="hero__heading">
            <motion.span
              className="hero__heading-line"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              We Don't Just
            </motion.span>
            <motion.span
              className="hero__heading-line"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Create{' '}
              <TypeAnimation
                sequence={[
                  'Viral Videos',
                  2000,
                  'Viral Content',
                  2000,
                  'Viral Ads',
                  2000,
                  'Viral Brands',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="hero__heading-typed"
              />
            </motion.span>
            <motion.span
              className="hero__heading-line hero__heading-line--accent"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              We{' '}
              <span className="gradient-text">Grow Your Revenue</span>
            </motion.span>
          </h1>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Performance-driven video content that doesn't just look amazing —
            it converts viewers into customers and revenue for your business.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#cta" className="btn-primary hero__btn-main" id="hero-cta-primary">
              <span>Book a Free Strategy Call</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#portfolio" className="btn-outline hero__btn-secondary" id="hero-cta-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>See Our Work</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="hero__trust-avatars">
              {[1,2,3,4].map(i => (
                <div key={i} className="hero__trust-avatar" style={{ background: `hsl(${260 + i * 30}, 70%, 50%)` }}>
                  {['A', 'B', 'C', 'D'][i-1]}
                </div>
              ))}
            </div>
            <div className="hero__trust-text">
              <div className="hero__trust-stars">★★★★★</div>
              <span>Trusted by 500+ brands worldwide</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
        >
          {/* 3D Video mockup */}
          <div className="hero__video-card">
            <div className="hero__video-card-inner">
              <div className="hero__video-screen">
                <div className="hero__video-play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <div className="hero__video-bar">
                  <div className="hero__video-bar-fill" />
                </div>
                <div className="hero__video-overlay-text">
                  <span>ReelX Media</span>
                  <small>Performance Content</small>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="hero__float-card hero__float-card--1"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="hero__float-icon">📈</div>
                <div>
                  <div className="hero__float-num">+340%</div>
                  <div className="hero__float-label">Revenue Growth</div>
                </div>
              </motion.div>

              <motion.div
                className="hero__float-card hero__float-card--2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="hero__float-icon">🎯</div>
                <div>
                  <div className="hero__float-num">500+</div>
                  <div className="hero__float-label">Brands Served</div>
                </div>
              </motion.div>

              <motion.div
                className="hero__float-card hero__float-card--3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="hero__float-icon">⚡</div>
                <div>
                  <div className="hero__float-num">20M+</div>
                  <div className="hero__float-label">Total Views</div>
                </div>
              </motion.div>
            </div>

            {/* Card glow */}
            <div className="hero__video-glow" />
          </div>

          {/* Decorative rings */}
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
