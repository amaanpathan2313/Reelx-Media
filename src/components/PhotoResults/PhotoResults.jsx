import React, { useState, useRef, useEffect } from 'react'
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
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 })
  const scrollRef = useRef(null)
  const currentIndexRef = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [activePhotoId, setActivePhotoId] = useState(null)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  // Scroll smoothly to a specific card index
  const scrollToIndex = (index, behavior = 'smooth') => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll('.photo-results__box')
    if (!cards || !cards[index]) return

    if (index === 0) {
      container.scrollTo({ left: 0, behavior })
      setCurrentIndex(0)
      currentIndexRef.current = 0
      return
    }

    const card = cards[index]
    const containerRect = container.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const offset = cardRect.left - containerRect.left
    const targetLeft = container.scrollLeft + offset - 4

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior,
    })
    setCurrentIndex(index)
    currentIndexRef.current = index
  }

  // Automated slider: scrolls every 3 seconds while in view and isAutoPlay is true
  useEffect(() => {
    if (!isAutoPlay || !inView) return

    const interval = setInterval(() => {
      const nextIndex =
        currentIndexRef.current + 1 >= photoResultsData.length
          ? 0
          : currentIndexRef.current + 1
      scrollToIndex(nextIndex)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlay, inView])

  // Stop auto-play when user clicks on any image / box
  const handleCardClick = (item, index) => {
    setIsAutoPlay(false)
    setActivePhotoId(item.id)
    scrollToIndex(index)
  }

  // Handle manual navigation arrows
  const handleNavArrow = (direction) => {
    setIsAutoPlay(false)
    let next
    if (direction === 'left') {
      next =
        (currentIndexRef.current - 1 + photoResultsData.length) %
        photoResultsData.length
    } else {
      next = (currentIndexRef.current + 1) % photoResultsData.length
    }
    scrollToIndex(next)
    setActivePhotoId(photoResultsData[next]?.id)
  }

  // Open full-screen lightbox preview
  const handleOpenModal = (e, item) => {
    e.stopPropagation()
    setIsAutoPlay(false)
    setSelectedPhoto(item)
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

        {/* SINGLE HORIZONTAL BOX CONTAINER */}
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
              <span className="photo-results__counter-pill">
                {currentIndex + 1} / {photoResultsData.length}
              </span>
            </div>

            {/* Controls: Play/Pause indicator & Nav Arrows */}
            <div className="photo-results__nav-buttons">
              <button
                className={`photo-results__autoplay-btn ${isAutoPlay ? 'photo-results__autoplay-btn--active' : 'photo-results__autoplay-btn--paused'}`}
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                title={isAutoPlay ? 'Auto-scrolling every 3s (Click to pause)' : 'Slider stopped (Click to resume)'}
                aria-label={isAutoPlay ? 'Pause auto slider' : 'Resume auto slider'}
              >
                {isAutoPlay ? (
                  <>
                    <span className="photo-results__pulse-dot" />
                    <span className="photo-results__autoplay-text">Auto (3s)</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span className="photo-results__autoplay-text">Stopped</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 4 18 12 6 20 6 4" />
                    </svg>
                  </>
                )}
              </button>

              <button
                className="photo-results__nav-btn"
                onClick={() => handleNavArrow('left')}
                aria-label="Previous photo"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="photo-results__nav-btn"
                onClick={() => handleNavArrow('right')}
                aria-label="Next photo"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Photo Boxes Layout Track */}
          <div className="photo-results__layout" ref={scrollRef}>
            {photoResultsData.map((item, index) => (
              <div
                key={item.id}
                className={`photo-results__box ${activePhotoId === item.id ? 'photo-results__box--active' : ''}`}
                onClick={() => handleCardClick(item, index)}
                role="button"
                tabIndex={0}
                title={isAutoPlay ? 'Click image to stop auto-scroll' : `Proof #${index + 1}`}
              >
                {/* Photo Tag Header */}
                <div className="photo-results__tag-row">
                  <div className="photo-results__tag">
                    <span className="photo-results__dot" />
                    Proof #{index + 1} • {item.category}
                  </div>
                  {!isAutoPlay && activePhotoId === item.id && (
                    <span className="photo-results__stopped-badge">
                      ❚❚ Stopped
                    </span>
                  )}
                </div>

                {/* Photo Container */}
                <div className="photo-results__img-wrapper">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="photo-results__img"
                    onError={(e) => {
                      if (item.fallbackUrl && e.target.src !== item.fallbackUrl) {
                        e.target.onerror = null
                        e.target.src = item.fallbackUrl
                      }
                    }}
                  />
                  {/* Subtle click hint & expand button */}
                  <div className="photo-results__img-overlay">
                    <span className="photo-results__click-hint">
                      {isAutoPlay ? 'Click to stop' : 'Stopped'}
                    </span>
                    <button
                      className="photo-results__expand-btn"
                      onClick={(e) => handleOpenModal(e, item)}
                      title="View full-size screenshot"
                      aria-label="View full-size screenshot"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                      <span>Zoom</span>
                    </button>
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
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="photo-results__modal-header">
                <div className="photo-results__modal-title-wrap">
                  <span className="photo-results__modal-tag">Verified Proof</span>
                  <h3 className="photo-results__modal-title">{selectedPhoto.title}</h3>
                </div>
                <button
                  className="photo-results__modal-close"
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close image preview"
                >
                  ✕
                </button>
              </div>
              <div className="photo-results__modal-img-wrap">
                <img
                  src={selectedPhoto.imgUrl}
                  alt={selectedPhoto.title}
                  className="photo-results__modal-img"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoResults
