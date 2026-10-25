import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './BeforeAfter.css'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'gkl3exsq'
const getCloudinaryVideo = (publicId, version = '') =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${version ? `v${version}/` : ''}${publicId}.mp4`

const video1Before = getCloudinaryVideo('before_after_1.1', '1792927775')
const video1After = getCloudinaryVideo('before_after_1.2', '1792927771')
const video2Before = getCloudinaryVideo('before_after_2.1', '1792927775')
const video2After = getCloudinaryVideo('before_after_2.2', '1792927772')
const video3Before = getCloudinaryVideo('before_after_3.1', '1792927765')
const video3After = getCloudinaryVideo('before_after_3.2', '1792927776')

const videoBoxes = [
  {
    id: 'client1-before',
    clientTag: 'Client 1',
    clientName: 'Resorts & Villas',
    type: 'BEFORE',
    title: 'Client 1 — Before ReelX',
    desc: 'Unoptimized footage & low engagement',
    views: '15K Views',
    roas: '1.2x ROAS',
    videoUrl: video1Before,
    poster: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'client1-after',
    clientTag: 'Client 1',
    clientName: 'Resorts & Villas',
    type: 'AFTER',
    title: 'Client 1 — After ReelX',
    desc: 'High-converting viral strategy (+450% Revenue)',
    views: '2.4M Views',
    roas: '8.5x ROAS',
    videoUrl: video1After,
    poster: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'client2-before',
    clientTag: 'Client 2',
    clientName: 'Real Estate Empire',
    type: 'BEFORE',
    title: 'Client 2 — Before ReelX',
    desc: 'Static images & low video reach',
    views: '8K Views',
    roas: '0.9x ROAS',
    videoUrl: video2Before,
    poster: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'client2-after',
    clientTag: 'Client 2',
    clientName: 'Real Estate Empire',
    type: 'AFTER',
    title: 'Client 2 — After ReelX',
    desc: 'Cinematic property walkthroughs (12x Leads)',
    views: '4.8M Views',
    roas: '12x ROAS',
    videoUrl: video2After,
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'client3-before',
    clientTag: 'Client 3',
    clientName: 'Health Care & Wellness',
    type: 'BEFORE',
    title: 'Client 3 — Before ReelX',
    desc: 'High ad cost & poor conversion',
    views: '32K Views',
    roas: '1.5x ROAS',
    videoUrl: video3Before,
    poster: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'client3-after',
    clientTag: 'Client 3',
    clientName: 'Health Care & Wellness',
    type: 'AFTER',
    title: 'Client 3 — After ReelX',
    desc: 'Problem-solving hook ads (18x ROI)',
    views: '6.2M Views',
    roas: '18x ROAS',
    videoUrl: video3After,
    poster: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
  },
]

const BeforeAfter = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="before-after section" id="before-after" ref={ref}>
      <div className="before-after__orb before-after__orb--1" />
      <div className="before-after__orb before-after__orb--2" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="before-after__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="before-after__badge">
            <span className="before-after__badge-icon">⚡</span>
            <span>Client Transformations</span>
          </div>
          <h2 className="before-after__title">
            Before & After <span className="gradient-text">Results Showcase</span>
          </h2>
          {/* <p className="before-after__subtitle">
            Explore before and after results across different clients
          </p> */}
        </motion.div>

        {/* Grid Container for Video Boxes */}
        <motion.div
          className="before-after__container-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Control Bar */}
          <div className="before-after__top-bar">
            <div className="before-after__top-info">
              <span className="before-after__live-dot" />
              <span className="before-after__top-title">Explore before and after results across different clients</span>
            </div>
          </div>

          <div className="before-after__grid">
            {videoBoxes.map((box, index) => (
              <div key={box.id} className="before-after__box">
                {/* Video Player */}
                <div className="before-after__video-wrapper">
                  <div className="before-after__top-badge" style={{ background: box.type === 'BEFORE' ? '#ef4444' : '#10b981' }}>
                    {box.type}
                  </div>
                  <video
                    src={box.videoUrl}
                    controls
                    controlsList="nodownload noplaybackrate"
                    disablePictureInPicture
                    className="before-after__video"
                    preload="metadata"
                    playsInline
                  />
                  
                  <div className="before-after__overlay">
                    <div className="before-after__overlay-stats">
                      <div>
                        <div className="before-after__stat-val">{box.views}</div>
                        <div className="before-after__stat-label">Views</div>
                      </div>
                      <div className="before-after__stat-divider" />
                      <div>
                        <div className="before-after__stat-val" style={{ color: box.type === 'BEFORE' ? '#fca5a5' : '#6ee7b7' }}>
                          {box.roas}
                        </div>
                        <div className="before-after__stat-label">ROAS</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Box Content */}
                <div className="before-after__info">
                  <h4 className="before-after__box-title">{box.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfter
