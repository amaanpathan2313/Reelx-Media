import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import './Stats.css'

const stats = [
  { number: 500, suffix: '+', label: 'Brands Served', icon: '🏆', desc: 'Successful campaigns' },
  { number: 20, suffix: 'M+', label: 'Total Views', icon: '👁️', desc: 'Across all platforms' },
  { number: 340, suffix: '%', label: 'Avg Revenue Growth', icon: '📈', desc: 'For our clients' },
  { number: 3, suffix: '+', label: 'Years Experience', icon: '⚡', desc: 'In video marketing' },
]

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="stats section" id="stats">
      <div className="stats__orb" />
      <div className="container">
        <motion.div
          ref={ref}
          className="stats__grid"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stats__card glass-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="stats__icon">{stat.icon}</div>
              <div className="stats__number">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    delay={i * 0.1}
                    suffix={stat.suffix}
                    enableScrollSpy
                  />
                )}
              </div>
              <div className="stats__label">{stat.label}</div>
              <div className="stats__desc">{stat.desc}</div>
              <div className="stats__bar">
                <motion.div
                  className="stats__bar-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ delay: i * 0.12 + 0.5, duration: 1.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee band */}
        <div className="stats__marquee">
          <div className="stats__marquee-track">
            {['YouTube Ads', 'Instagram Reels', 'TikTok Viral', 'Facebook Ads', 'Brand Films', 'Product Videos', 'Testimonials', 'UGC Content'].map((item, i) => (
              <React.Fragment key={i}>
                <span className="stats__marquee-item">{item}</span>
                <span className="stats__marquee-dot">✦</span>
              </React.Fragment>
            ))}
            {/* Duplicate for infinite loop */}
            {['YouTube Ads', 'Instagram Reels', 'TikTok Viral', 'Facebook Ads', 'Brand Films', 'Product Videos', 'Testimonials', 'UGC Content'].map((item, i) => (
              <React.Fragment key={`dup-${i}`}>
                <span className="stats__marquee-item">{item}</span>
                <span className="stats__marquee-dot">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
