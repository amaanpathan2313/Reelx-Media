import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Portfolio.css'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'gkl3exsq'
const getCloudinaryVideo = (publicId) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.mp4`

const categories = ['All', 'Resorts / Villas', 'Real Estate', 'Promotional Videos']

const portfolioItems = [
  // Top showcase items (balanced mix across all categories)
  { id: 'r1', title: 'Premium Farm Stay Experience', category: 'Resorts / Villas', color: '#10b981', emoji: '🌴', videoUrl: getCloudinaryVideo('premium_farm_stay') },
  { id: 'rs1', title: 'Terra Gold Luxury Project', category: 'Real Estate', color: '#8b5cf6', emoji: '🏢', videoUrl: getCloudinaryVideo('terra_gold') },
  { id: 'p1', title: 'Pizza Wala Brand Campaign', category: 'Promotional Videos', color: '#ec4899', emoji: '🍕', videoUrl: getCloudinaryVideo('pizzawala') },
  { id: 'r2', title: 'Resort Weekend Getaway', category: 'Resorts / Villas', color: '#06b6d4', emoji: '🏖️', videoUrl: getCloudinaryVideo('trip') },
  { id: 'rs2', title: '4 BHK Luxury Apartment Tour', category: 'Real Estate', color: '#fbbf24', emoji: '🏠', videoUrl: getCloudinaryVideo('4_bhk_add') },
  { id: 'p2', title: 'Zorko Chat Corner Food Promo', category: 'Promotional Videos', color: '#f97316', emoji: '🍔', videoUrl: getCloudinaryVideo('zorko_chatcorner') },

  // Remaining showcase items
  { id: 'rs3', title: '2 BHK Cinematic Property Film', category: 'Real Estate', color: '#8b5cf6', emoji: '🎬', videoUrl: getCloudinaryVideo('2BHK_CINEMATICS') },
  { id: 'r3', title: 'Luxury Villa Walkthrough', category: 'Resorts / Villas', color: '#10b981', emoji: '🏊', videoUrl: getCloudinaryVideo('0528_1') },
  { id: 'p3', title: 'Evergreen Sweet & Farsan Ad', category: 'Promotional Videos', color: '#ec4899', emoji: '🍬', videoUrl: getCloudinaryVideo('evergreen_new_ad-5') },
  { id: 'rs4', title: '4 BHK Cinematic Property Tour', category: 'Real Estate', color: '#4f46e5', emoji: '🎥', videoUrl: getCloudinaryVideo('4BHK_cinematic') },
  { id: 'r4', title: 'Resort Leisure Highlights 1', category: 'Resorts / Villas', color: '#06b6d4', emoji: '🌿', videoUrl: getCloudinaryVideo('0809') },
  { id: 'p4', title: 'Sheth Villa Luxury Ad', category: 'Promotional Videos', color: '#f97316', emoji: '✨', videoUrl: getCloudinaryVideo('SHETI_VILA_AD_FINAL') },
  { id: 'rs5', title: '2 BHK Quick Walkthrough', category: 'Real Estate', color: '#10b981', emoji: '🔑', videoUrl: getCloudinaryVideo('2BHK_quick_tour') },
  { id: 'r5', title: 'Resort Leisure Highlights 2', category: 'Resorts / Villas', color: '#a78bfa', emoji: '🌅', videoUrl: getCloudinaryVideo('0712') },
  { id: 'p5', title: 'Sheth Villa Campaign Ad 3', category: 'Promotional Videos', color: '#fbbf24', emoji: '📺', videoUrl: getCloudinaryVideo('SHETI_VILA_AD_3') },
  { id: 'rs6', title: '3 BHK Quick Property Tour', category: 'Real Estate', color: '#ec4899', emoji: '🚪', videoUrl: getCloudinaryVideo('3bhk_quick-2') },
  { id: 'p6', title: '1500 Campaign Main Ad', category: 'Promotional Videos', color: '#4f46e5', emoji: '🚀', videoUrl: getCloudinaryVideo('1500_ad_main') },
  { id: 'rs7', title: 'Flat 410 Property Tour', category: 'Real Estate', color: '#06b6d4', emoji: '🏙️', videoUrl: getCloudinaryVideo('fl_410') },
  { id: 'p7', title: '2 BHK Hindi Campaign Ad', category: 'Promotional Videos', color: '#8b5cf6', emoji: '🎙️', videoUrl: getCloudinaryVideo('hindi_2bhk') },
  { id: 'rs8', title: 'Flat 202 Property Tour', category: 'Real Estate', color: '#f97316', emoji: '🏡', videoUrl: getCloudinaryVideo('flat_202') },
  { id: 'p8', title: '3 BHK Marathi Campaign Ad', category: 'Promotional Videos', color: '#ec4899', emoji: '📢', videoUrl: getCloudinaryVideo('marathi_3bhk') },
  { id: 'rs9', title: 'Ghar Dekho Mumbai Campaign', category: 'Real Estate', color: '#fbbf24', emoji: '📍', videoUrl: getCloudinaryVideo('ghardekhomumbai') },
  { id: 'p9', title: 'Sai Namah Hindi Short Ad', category: 'Promotional Videos', color: '#10b981', emoji: '⭐', videoUrl: getCloudinaryVideo('SAI_NAMAH_HINDI_15_sec') },
  { id: 'rs10', title: 'Terra Gold Promotional Ad', category: 'Real Estate', color: '#a78bfa', emoji: '🎯', videoUrl: getCloudinaryVideo('Terra_gold_add') },
  { id: 'p10', title: 'Sai Namah Marathi Short Ad', category: 'Promotional Videos', color: '#06b6d4', emoji: '🔥', videoUrl: getCloudinaryVideo('SAI_NAMAH_marathi_15_sec') },
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
