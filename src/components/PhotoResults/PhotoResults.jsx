import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './PhotoResults.css'

import img1 from '../../assets/campain_images/1.jpeg'
import img2 from '../../assets/campain_images/2.jpeg'
import img3 from '../../assets/campain_images/3.jpeg'
import img4 from '../../assets/campain_images/4.jpeg'
import img5 from '../../assets/campain_images/5.jpeg'
import img6 from '../../assets/campain_images/6.jpeg'
import img7 from '../../assets/campain_images/7.jpeg'

const photoResultsData = [
  {
    id: 1,
    title: 'ReelX Master Campaign',
    category: 'Meta Ads Manager',
    resultBadge: '855 Leads @ ₹6.77',
    costPerResult: '₹6.77 / msg',
    reach: '33,971 Reach',
    amountSpent: '₹5,788.00 Spent',
    imgUrl: img1,
    fallbackUrl: '/compains_images/1.jpg',
    caption: 'Verified Meta Ad Campaign Proof — 855 Conversations Generated',
  },
  {
    id: 2,
    title: 'Sheth Villa Resort Campaign',
    category: 'Resort & Hospitality',
    resultBadge: '169 Leads @ ₹20.50',
    costPerResult: '₹20.50 / msg',
    reach: '11,888 Reach',
    amountSpent: '₹3,464.03 Spent',
    imgUrl: img2,
    fallbackUrl: '/compains_images/2.jpg',
    caption: 'Sheth Villa Luxury Resort Booking Campaign Proof',
  },
  {
    id: 3,
    title: 'ReelX Couples & Group Promo',
    category: 'Lead Generation',
    resultBadge: '219 Leads @ ₹14.21',
    costPerResult: '₹14.21 / msg',
    reach: '26,161 Reach',
    amountSpent: '₹3,112.27 Spent',
    imgUrl: img3,
    fallbackUrl: '/compains_images/3.jpg',
    caption: 'Targeted Audience Conversion Proof',
  },
  {
    id: 4,
    title: 'Video Ad 1 Scale Campaign',
    category: 'Performance Ads',
    resultBadge: '429 Leads @ ₹10.26',
    costPerResult: '₹10.26 / msg',
    reach: '28,173 Reach',
    amountSpent: '₹4,401.30 Spent',
    imgUrl: img4,
    fallbackUrl: '/compains_images/4.jpg',
    caption: 'High-ROAS Video Creative Proof',
  },
  {
    id: 5,
    title: 'Real Estate Property Launch',
    category: 'Real Estate Ads',
    resultBadge: '312 Leads @ ₹12.40',
    costPerResult: '₹12.40 / msg',
    reach: '45,200 Reach',
    amountSpent: '₹3,868.00 Spent',
    imgUrl: img5,
    fallbackUrl: '/compains_images/5.jpg',
    caption: 'Luxury Property Lead Campaign Proof',
  },
  {
    id: 6,
    title: 'Healthcare & Clinic Growth',
    category: 'Healthcare Ads',
    resultBadge: '540 Patient Leads',
    costPerResult: '₹8.90 / msg',
    reach: '52,100 Reach',
    amountSpent: '₹4,806.00 Spent',
    imgUrl: img6,
    fallbackUrl: '/compains_images/6.jpg',
    caption: 'Patient Booking Campaign Proof',
  },
  {
    id: 7,
    title: 'E-Commerce Viral Reel Scale',
    category: 'Brand Scaling',
    resultBadge: '1,240 Sales Leads',
    costPerResult: '₹5.50 / msg',
    reach: '98,400 Reach',
    amountSpent: '₹6,820.00 Spent',
    imgUrl: img7,
    fallbackUrl: '/compains_images/7.jpg',
    caption: 'E-Commerce High ROAS Ad Proof',
  },
]

const PhotoResults = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const scrollRef = useRef(null)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="photo-results section" id="photo-results" ref={ref}>
      <div className="photo-results__orb photo-results__orb--1" />
      <div className="photo-results__orb photo-results__orb--2" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="photo-results__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="photo-results__badge">
            <span className="photo-results__badge-icon">📊</span>
            <span>Campaign Proof Gallery</span>
          </div>
          <h2 className="photo-results__title">
            Live Ad Manager <span className="gradient-text">Results & Proof</span>
          </h2>
          <p className="photo-results__subtitle">
            Explore campaign result screenshots showcasing verified reach, leads, and cost per result.
          </p>
        </motion.div>

        {/* 1 SINGLE HORIZONTAL BOX CONTAINER FOR 7 PHOTO BOXES */}
        <motion.div
          className="photo-results__horizontal-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Control Bar */}
          <div className="photo-results__top-bar">
            <div className="photo-results__top-info">
              <span className="photo-results__live-dot" />
              <span className="photo-results__top-title">Verified Campaign Screenshots</span>
            </div>

            {/* Navigation Arrows */}
            <div className="photo-results__nav-buttons">
              <button
                className="photo-results__nav-btn"
                onClick={() => scroll('left')}
                aria-label="Previous photos"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="photo-results__nav-btn"
                onClick={() => scroll('right')}
                aria-label="Next photos"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* 7 Horizontal Photo Boxes in One Horizontal Track */}
          <div className="photo-results__horizontal-track" ref={scrollRef}>
            {photoResultsData.map((item, index) => (
              <div key={item.id} className="photo-results__box">
                {/* Photo Tag */}
                <div className="photo-results__tag">
                  <span className="photo-results__dot" />
                  Proof #{index + 1} • {item.category}
                </div>

                {/* Photo Container */}
                <div
                  className="photo-results__img-wrapper"
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="photo-results__img"
                    onError={(e) => {
                      if (item.fallbackUrl && e.target.src !== item.fallbackUrl) {
                        e.target.onerror = null;
                        e.target.src = item.fallbackUrl;
                      }
                    }}
                  />
                  <div className="photo-results__img-overlay">
                    <span className="photo-results__zoom-btn">🔍 Click to Expand</span>
                  </div>
                </div>

                {/* Box Content */}
                <div className="photo-results__box-content">
                  <div className="photo-results__box-badge">{item.resultBadge}</div>
                  <h4 className="photo-results__box-title">{item.title}</h4>
                  <p className="photo-results__box-caption">{item.caption}</p>

                  <div className="photo-results__metrics">
                    <span className="photo-results__metric-pill">
                      💬 {item.costPerResult}
                    </span>
                    <span className="photo-results__metric-pill">
                      👥 {item.reach}
                    </span>
                    <span className="photo-results__metric-pill photo-results__metric-pill--green">
                      💰 {item.amountSpent}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-results__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="photo-results__modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="photo-results__modal-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image preview"
              >
                ✕
              </button>
              <img
                src={selectedPhoto.imgUrl}
                alt={selectedPhoto.title}
                className="photo-results__modal-img"
              />
              <div className="photo-results__modal-info">
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.caption}</p>
                <div className="photo-results__modal-badge">{selectedPhoto.resultBadge}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoResults
