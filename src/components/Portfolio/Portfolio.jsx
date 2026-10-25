import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Portfolio.css'

import promo1 from '../../assets/promotional/1.mp4'
import promo2 from '../../assets/promotional/2.mp4'
import promo3 from '../../assets/promotional/3.mp4'
import promo4 from '../../assets/promotional/4.mp4'
import promo5 from '../../assets/promotional/5.mp4'
import promo6 from '../../assets/promotional/6.mp4'
// import promo7 from '../../assets/promotional/7.mp4' // >100MB (exceeds GitHub limit)
import promo8 from '../../assets/promotional/8.mp4'
import promo9 from '../../assets/promotional/9.mp4'

import resort2 from '../../assets/resort/2.mp4'
import resort3 from '../../assets/resort/3.mp4'
import resort4 from '../../assets/resort/4.mp4'
import resort5 from '../../assets/resort/5.mp4'
import resort6 from '../../assets/resort/6.mp4'
import resort7 from '../../assets/resort/7.mp4'

import realstate1 from '../../assets/real-state/1.mp4'
import realstate2 from '../../assets/real-state/2.mp4'
import realstate2Bhk from '../../assets/real-state/2BHK CINEMATICS.mp4'
// import realstate3 from '../../assets/real-state/3.mp4' // >100MB (exceeds GitHub limit)
import realstate4 from '../../assets/real-state/4.mp4'
import realstate4Bhk from '../../assets/real-state/4BHK cinematic.mp4'
import realstate5 from '../../assets/real-state/5.mp4'
// import realstate6 from '../../assets/real-state/6.mp4' // >100MB (exceeds GitHub limit)
import realstate7 from '../../assets/real-state/7.mp4'

// Demo video placeholder for >100MB files
const demoVideo = 'https://res.cloudinary.com/gkl3exsq/video/upload/v1792927651/samples/cld-sample-video.mp4'

const categories = ['All', 'Resorts / Villas', 'Real State', 'Health Care', 'Promotional Videos']

const portfolioItems = [
  { id: 'p1', title: 'Brand Promo Video 1', category: 'Promotional Videos', views: '3.1M', roas: '9.2x', color: '#8b5cf6', emoji: '🎬', videoUrl: promo1 },
  { id: 'r2', title: 'Resort Video 1', category: 'Resorts / Villas', views: '2.1M', roas: '8.4x', color: '#10b981', emoji: '🎬', videoUrl: resort2 },
  { id: 'rs1', title: 'Real Estate Video 1', category: 'Real State', views: '1.4M', roas: '7.1x', color: '#10b981', emoji: '🎬', videoUrl: realstate1 },
  
  { id: 'p2', title: 'Brand Promo Video 2', category: 'Promotional Videos', views: '2.4M', roas: '7.5x', color: '#ec4899', emoji: '🎬', videoUrl: promo2 },
  { id: 'r3', title: 'Resort Video 2', category: 'Resorts / Villas', views: '1.5M', roas: '6.2x', color: '#06b6d4', emoji: '🎬', videoUrl: resort3 },
  { id: 'rs2', title: 'Real Estate Video 2', category: 'Real State', views: '2.8M', roas: '8.4x', color: '#06b6d4', emoji: '🎬', videoUrl: realstate2 },
  
  { id: 'p3', title: 'Brand Promo Video 3', category: 'Promotional Videos', views: '4.8M', roas: '11.1x', color: '#06b6d4', emoji: '🎬', videoUrl: promo3 },
  { id: 'r4', title: 'Resort Video 3', category: 'Resorts / Villas', views: '3.4M', roas: '10.1x', color: '#8b5cf6', emoji: '🎬', videoUrl: resort4 },
  { id: 'rs3', title: '2BHK Cinematics', category: 'Real State', views: '3.1M', roas: '9.2x', color: '#8b5cf6', emoji: '🎬', videoUrl: realstate2Bhk },
  
  { id: 'p4', title: 'Brand Promo Video 4', category: 'Promotional Videos', views: '1.2M', roas: '5.4x', color: '#10b981', emoji: '🎬', videoUrl: promo4 },
  { id: 'r5', title: 'Resort Video 4', category: 'Resorts / Villas', views: '1.2M', roas: '5.5x', color: '#ec4899', emoji: '🎬', videoUrl: resort5 },
  { id: 'rs4', title: 'Real Estate Video 3', category: 'Real State', views: '1.9M', roas: '6.5x', color: '#ec4899', emoji: '🎬', videoUrl: demoVideo },
  
  { id: 'p5', title: 'Brand Promo Video 5', category: 'Promotional Videos', views: '5.6M', roas: '13.2x', color: '#f97316', emoji: '🎬', videoUrl: promo5 },
  { id: 'r6', title: 'Resort Video 5', category: 'Resorts / Villas', views: '4.7M', roas: '12.8x', color: '#fbbf24', emoji: '🎬', videoUrl: resort6 },
  { id: 'rs5', title: 'Real Estate Video 4', category: 'Real State', views: '4.2M', roas: '11.8x', color: '#fbbf24', emoji: '🎬', videoUrl: realstate4 },
  
  { id: 'p6', title: 'Brand Promo Video 6', category: 'Promotional Videos', views: '8.1M', roas: '15.8x', color: '#fbbf24', emoji: '🎬', videoUrl: promo6 },
  { id: 'r7', title: 'Resort Video 6', category: 'Resorts / Villas', views: '5.9M', roas: '14.2x', color: '#f97316', emoji: '🎬', videoUrl: resort7 },
  { id: 'rs6', title: '4BHK Cinematics', category: 'Real State', views: '5.5M', roas: '14.1x', color: '#f97316', emoji: '🎬', videoUrl: realstate4Bhk },
  
  { id: 'p7', title: 'Brand Promo Video 7', category: 'Promotional Videos', views: '2.9M', roas: '8.3x', color: '#4f46e5', emoji: '🎬', videoUrl: demoVideo },
  { id: 'rs7', title: 'Real Estate Video 5', category: 'Real State', views: '2.4M', roas: '7.9x', color: '#4f46e5', emoji: '🎬', videoUrl: realstate5 },
  
  { id: 'p8', title: 'Brand Promo Video 8', category: 'Promotional Videos', views: '1.9M', roas: '6.7x', color: '#ef4444', emoji: '🎬', videoUrl: promo8 },
  { id: 'rs8', title: 'Real Estate Video 6', category: 'Real State', views: '1.7M', roas: '5.8x', color: '#ef4444', emoji: '🎬', videoUrl: demoVideo },
  
  { id: 'p9', title: 'Brand Promo Video 9', category: 'Promotional Videos', views: '4.2M', roas: '10.5x', color: '#a78bfa', emoji: '🎬', videoUrl: promo9 },
  { id: 'rs9', title: 'Real Estate Video 7', category: 'Real State', views: '3.6M', roas: '10.5x', color: '#a78bfa', emoji: '🎬', videoUrl: realstate7 },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  const displayedItems = showAll ? filtered : filtered.slice(0, 6)

  const handleFilterClick = (cat) => {
    setActiveFilter(cat)
    setShowAll(false) // Reset to 6 items when filter changes
  }

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
              onClick={() => handleFilterClick(cat)}
              id={`filter-${cat.replace(/\//g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="portfolio__grid" layout>
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, i) => (
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
                <div className="portfolio__visual" style={{ background: item.videoUrl ? '#000' : `linear-gradient(135deg, ${item.color}20 0%, ${item.color}08 100%)` }}>
                  {item.videoUrl ? (
                    <video
                      src={item.videoUrl}
                      controls
                      controlsList="nodownload noplaybackrate"
                      disablePictureInPicture
                      preload="metadata"
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <>
                      <div className="portfolio__emoji">{item.emoji}</div>
                      <div className="portfolio__play-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </>
                  )}
                  <div className="portfolio__overlay" style={{ pointerEvents: 'none' }}>
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
          {!showAll && filtered.length > 6 && (
            <button className="btn-outline" id="portfolio-view-all" onClick={() => setShowAll(true)}>
              View All Case Studies →
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
