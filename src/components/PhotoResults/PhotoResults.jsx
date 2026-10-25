import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './PhotoResults.css'

import img1 from '../../assets/meta results/ChatGPT Image Sep 5, 2026, 08_40_34 PM.png'
import img2 from '../../assets/meta results/ChatGPT Image Sep 5, 2026, 08_40_57 PM.png'
import img3 from '../../assets/meta results/ChatGPT Image Sep 5, 2026, 08_41_10 PM.png'
import img4 from '../../assets/meta results/ChatGPT Image Sep 5, 2026, 08_41_19 PM.png'
import img5 from '../../assets/meta results/ChatGPT Image Sep 5, 2026, 08_41_27 PM.png'
import img6 from '../../assets/meta results/ChatGPT Image Sep 5, 2026, 08_45_14 PM.png'

const photoResultsData = [
  // {
  //   id: 6,
  //   title: 'Healthcare & Clinic Growth',
  //   category: 'Healthcare Ads',
  //   resultBadge: '540 Patient Leads',
  //   costPerResult: '₹8.90 / msg',
  //   reach: '52,100 Reach',
  //   amountSpent: '₹4,806.00 Spent',
  //   imgUrl: img6,
  //   fallbackUrl: '/compains_images/6.jpg',
  //   caption: 'Patient Booking Campaign Proof',
  // },
  // {
  //   id: 5,
  //   title: 'Real Estate Property Launch',
  //   category: 'Real Estate Ads',
  //   resultBadge: '312 Leads @ ₹12.40',
  //   costPerResult: '₹12.40 / msg',
  //   reach: '45,200 Reach',
  //   amountSpent: '₹3,868.00 Spent',
  //   imgUrl: img5,
  //   fallbackUrl: '/compains_images/5.jpg',
  //   caption: 'Luxury Property Lead Campaign Proof',
  // },
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

            {/* Navigation Arrows (Hidden on Mobile) */}
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

          {/* Photo Boxes Layout (Horizontal on Desktop, Grid on Mobile) */}
          <div className="photo-results__layout" ref={scrollRef}>
            {photoResultsData.map((item, index) => (
              <a
                key={item.id}
                href={item.imgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="photo-results__box"
                title={`Open Proof #${index + 1} (${item.title}) in new tab`}
              >
                {/* Photo Tag Header */}
                <div className="photo-results__tag-row">
                  <div className="photo-results__tag">
                    <span className="photo-results__dot" />
                    Proof #{index + 1} • {item.category}
                  </div>
                  <span className="photo-results__open-badge" title="Open full proof in new tab">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </div>

                {/* Photo Container */}
                <div className="photo-results__img-wrapper">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="photo-results__img"
                    onError={(e) => {
                      if (item.fallbackUrl && e.target.src !== item.fallbackUrl) {
                        e.target.onerror = null;
                        e.target.src = item.fallbackUrl;
                        const parentLink = e.target.closest('a');
                        if (parentLink) parentLink.href = item.fallbackUrl;
                      }
                    }}
                  />

                  {/* Hover Overlay */}
                  <div className="photo-results__hover-overlay">
                    <span className="photo-results__hover-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Open in new tab
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>


    </section>
  )
}

export default PhotoResults
