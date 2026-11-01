import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Portfolio.css'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'gkl3exsq'
const getCloudinaryVideo = (publicId) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}.mp4`
const getCloudinaryPoster = (publicId) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,q_auto,f_auto/${publicId}.jpg`

const categories = ['All', 'Resorts / Villas', 'Real Estate', 'Promotional Videos']

const makeItem = (id, title, category, color, emoji, publicId) => ({
  id,
  title,
  category,
  color,
  emoji,
  videoUrl: getCloudinaryVideo(publicId),
  posterUrl: getCloudinaryPoster(publicId),
})

const portfolioItems = [
  // Top showcase items (balanced mix across all categories)
  makeItem('r1', 'Premium Farm Stay Experience', 'Resorts / Villas', '#10b981', '🌴', 'premium_farm_stay'),
  makeItem('rs1', 'Terra Gold Luxury Project', 'Real Estate', '#8b5cf6', '🏢', 'terra_gold'),
  makeItem('p1', 'Pizza Wala Brand Campaign', 'Promotional Videos', '#ec4899', '🍕', 'pizzawala'),
  makeItem('r2', 'Resort Weekend Getaway', 'Resorts / Villas', '#06b6d4', '🏖️', 'trip'),
  makeItem('rs2', '4 BHK Luxury Apartment Tour', 'Real Estate', '#fbbf24', '🏠', '4_bhk_add'),
  makeItem('p2', 'Zorko Chat Corner Food Promo', 'Promotional Videos', '#f97316', '🍔', 'zorko_chatcorner'),

  // Remaining showcase items
  makeItem('rs3', '2 BHK Cinematic Property Film', 'Real Estate', '#8b5cf6', '🎬', '2BHK_CINEMATICS'),
  makeItem('r3', 'Luxury Villa Walkthrough', 'Resorts / Villas', '#10b981', '🏊', '0528_1'),
  makeItem('p3', 'Evergreen Sweet & Farsan Ad', 'Promotional Videos', '#ec4899', '🍬', 'evergreen_new_ad-5'),
  makeItem('rs4', '4 BHK Cinematic Property Tour', 'Real Estate', '#4f46e5', '🎥', '4BHK_cinematic'),
  makeItem('r4', 'Resort Leisure Highlights 1', 'Resorts / Villas', '#06b6d4', '🌿', '0809'),
  makeItem('p4', 'Sheth Villa Luxury Ad', 'Promotional Videos', '#f97316', '✨', 'SHETI_VILA_AD_FINAL'),
  makeItem('rs5', '2 BHK Quick Walkthrough', 'Real Estate', '#10b981', '🔑', '2BHK_quick_tour'),
  makeItem('r5', 'Resort Leisure Highlights 2', 'Resorts / Villas', '#a78bfa', '🌅', '0712'),
  makeItem('p5', 'Sheth Villa Campaign Ad 3', 'Promotional Videos', '#fbbf24', '📺', 'SHETI_VILA_AD_3'),
  makeItem('rs6', '3 BHK Quick Property Tour', 'Real Estate', '#ec4899', '🚪', '3bhk_quick-2'),
  makeItem('p6', '1500 Campaign Main Ad', 'Promotional Videos', '#4f46e5', '🚀', '1500_ad_main'),
  makeItem('rs7', 'Flat 410 Property Tour', 'Real Estate', '#06b6d4', '🏙️', 'fl_410'),
  makeItem('p7', '2 BHK Hindi Campaign Ad', 'Promotional Videos', '#8b5cf6', '🎙️', 'hindi_2bhk'),
  makeItem('rs8', 'Flat 202 Property Tour', 'Real Estate', '#f97316', '🏡', 'flat_202'),
  makeItem('p8', '3 BHK Marathi Campaign Ad', 'Promotional Videos', '#ec4899', '📢', 'marathi_3bhk'),
  makeItem('rs9', 'Ghar Dekho Mumbai Campaign', 'Real Estate', '#fbbf24', '📍', 'ghardekhomumbai'),
  makeItem('p9', 'Sai Namah Hindi Short Ad', 'Promotional Videos', '#10b981', '⭐', 'SAI_NAMAH_HINDI_15_sec'),
  makeItem('rs10', 'Terra Gold Promotional Ad', 'Real Estate', '#a78bfa', '🎯', 'Terra_gold_add'),
  makeItem('p10', 'Sai Namah Marathi Short Ad', 'Promotional Videos', '#06b6d4', '🔥', 'SAI_NAMAH_marathi_15_sec'),
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
    document.querySelectorAll('video').forEach((v) => {
      if (!v.paused) v.pause()
    })
  }

  const handleVideoPlay = (e) => {
    const currentVideo = e.target
    document.querySelectorAll('video').forEach((v) => {
      if (v !== currentVideo && !v.paused) {
        v.pause()
      }
    })
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
                      poster={item.posterUrl}
                      controls
                      controlsList="nodownload noplaybackrate"
                      disablePictureInPicture
                      preload="none"
                      playsInline
                      onPlay={handleVideoPlay}
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
