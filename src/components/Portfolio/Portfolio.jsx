import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Portfolio.css'

const categories = ['All', 'Resorts / Villas', 'Real State', 'Health Care', 'Promotional Videos']

const portfolioItems = [
  { id: 1, title: 'FitFlow Energy Drink', category: 'YouTube Ads', views: '2.4M', roas: '8.5x', color: '#8b5cf6', emoji: '⚡' },
  { id: 2, title: 'LuxeSkin Serum Launch', category: 'Reels/TikTok', views: '1.8M', roas: '12x', color: '#ec4899', emoji: '✨' },
  { id: 3, title: 'TechGear Pro Campaign', category: 'YouTube Ads', views: '3.2M', roas: '6.2x', color: '#06b6d4', emoji: '💻' },
  { id: 4, title: 'Organic Harvest Co.', category: 'Brand Films', views: '890K', roas: '9.1x', color: '#10b981', emoji: '🌿' },
  { id: 5, title: 'Urban Style Drop', category: 'UGC', views: '5.6M', roas: '14x', color: '#f97316', emoji: '👕' },
  { id: 6, title: 'Premium Watch Brand', category: 'Product', views: '1.2M', roas: '7.8x', color: '#fbbf24', emoji: '⌚' },
  { id: 7, title: 'Cloud SaaS Platform', category: 'YouTube Ads', views: '980K', roas: '11x', color: '#4f46e5', emoji: '☁️' },
  { id: 8, title: 'Adventure Gear Co.', category: 'Brand Films', views: '2.1M', roas: '5.5x', color: '#ef4444', emoji: '🏔️' },
  { id: 9, title: 'Beauty Studio NYC', category: 'Reels/TikTok', views: '7.3M', roas: '18x', color: '#a78bfa', emoji: '💄' },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section className="portfolio section" id="portfolio" ref={ref}>
      <div className="portfolio__orb" />

      <div className="container">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Work</div>
          <h2 className="portfolio__heading">
            Work That <span className="gradient-text">Drives Results</span>
          </h2>
          <p className="portfolio__subheading">
            A curated selection of campaigns that generates <br /> real revenue for your business
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="portfolio__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`portfolio__filter ${activeFilter === cat ? 'portfolio__filter--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              id={`filter-${cat.replace(/\//g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="portfolio__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className="portfolio__item"
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ '--item-color': item.color }}
              >
                {/* Visual */}
                <div className="portfolio__visual" style={{ background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}08 100%)` }}>
                  <div className="portfolio__emoji">{item.emoji}</div>
                  <div className="portfolio__play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <div className="portfolio__overlay">
                    <div className="portfolio__overlay-stats">
                      <div>
                        <div className="portfolio__stat-val">{item.views}</div>
                        <div className="portfolio__stat-label">Views</div>
                      </div>
                      <div className="portfolio__stat-divider" />
                      <div>
                        <div className="portfolio__stat-val" style={{ color: item.color }}>{item.roas}</div>
                        <div className="portfolio__stat-label">ROAS</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="portfolio__info">
                  <span className="portfolio__cat" style={{ color: item.color }}>{item.category}</span>
                  <h4 className="portfolio__title">{item.title}</h4>
                </div>

                <div className="portfolio__glow" style={{ background: `radial-gradient(circle, ${item.color}20 0%, transparent 70%)` }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="portfolio__cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#cta" className="btn-outline" id="portfolio-view-all">
            View All Case Studies →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
