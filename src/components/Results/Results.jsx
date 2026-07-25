import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import './Results.css'

const results = [
  {
    brand: 'TechFlow SaaS',
    category: 'Software',
    metric: '+520%',
    metricLabel: 'Revenue increase',
    before: '$12K/mo',
    after: '$74K/mo',
    time: '4 months',
    icon: '💻',
    color: '#8b5cf6',
  },
  {
    brand: 'FitLife Supplements',
    category: 'E-commerce',
    metric: '+890%',
    metricLabel: 'ROAS improvement',
    before: '1.2x',
    after: '11.9x',
    time: '2 months',
    icon: '💪',
    color: '#06b6d4',
  },
  {
    brand: 'LuxHome Decor',
    category: 'Retail',
    metric: '+340%',
    metricLabel: 'Sales growth',
    before: '$8K/mo',
    after: '$35K/mo',
    time: '3 months',
    icon: '🏠',
    color: '#f97316',
  },
]

const bigNumbers = [
  { val: 2.4, suffix: 'B+', label: 'Video Views Generated', icon: '👁️' },
  { val: 50, suffix: 'M+', label: 'Revenue Generated for Clients', prefix: '$', icon: '💰' },
  { val: 98, suffix: '%', label: 'Client Satisfaction Rate', icon: '⭐' },
  { val: 4.2, suffix: 'x', label: 'Average ROAS Achieved', icon: '📊' },
]

const Results = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="results section" id="results" ref={ref}>
      <div className="results__orb results__orb--1" />
      <div className="results__orb results__orb--2" />

      <div className="container">
        <motion.div
          className="results__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Proven Track Record</div>
          <h2 className="results__heading">
            Real Results for{' '}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="results__subheading">
            These aren't just numbers — they're revenue stories from businesses like yours
          </p>
        </motion.div>

        {/* Big number strip */}
        <div className="results__numbers">
          {bigNumbers.map((n, i) => (
            <motion.div
              key={n.label}
              className="results__num-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="results__num-icon">{n.icon}</div>
              <div className="results__num-val">
                {n.prefix}
                {inView && (
                  <CountUp
                    end={n.val}
                    duration={2.5}
                    delay={i * 0.1}
                    decimals={n.val % 1 !== 0 ? 1 : 0}
                    suffix={n.suffix}
                    enableScrollSpy
                  />
                )}
              </div>
              <div className="results__num-label">{n.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case study cards */}
        <div className="results__cases">
          {results.map((r, i) => (
            <motion.div
              key={r.brand}
              className="results__case"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              style={{ '--case-color': r.color }}
            >
              <div className="results__case-header">
                <div className="results__case-icon" style={{ background: `${r.color}20`, border: `1px solid ${r.color}40` }}>
                  {r.icon}
                </div>
                <div>
                  <h4 className="results__case-brand">{r.brand}</h4>
                  <span className="results__case-cat">{r.category}</span>
                </div>
                <div className="results__case-time">
                  <span>⏱ {r.time}</span>
                </div>
              </div>

              <div className="results__case-metric" style={{ color: r.color }}>
                {r.metric}
                <span>{r.metricLabel}</span>
              </div>

              <div className="results__case-compare">
                <div className="results__case-box">
                  <span className="results__case-label">Before</span>
                  <span className="results__case-val results__case-val--before">{r.before}</span>
                </div>
                <div className="results__case-arrow">→</div>
                <div className="results__case-box">
                  <span className="results__case-label">After</span>
                  <span className="results__case-val results__case-val--after" style={{ color: r.color }}>{r.after}</span>
                </div>
              </div>

              <div className="results__case-bar">
                <motion.div
                  className="results__case-bar-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 1.5 }}
                  style={{ background: `linear-gradient(90deg, ${r.color}80, ${r.color})` }}
                />
              </div>

              <div className="results__case-glow" style={{ background: `radial-gradient(circle at center, ${r.color}15 0%, transparent 70%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
