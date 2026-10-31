import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import logo6 from '../../assets/client-logo/6.png'
import logo1 from '../../assets/client-logo/1.png'
import logo4 from '../../assets/client-logo/4.png'
import logoB7Studio from '../../assets/client-logo/b7-studio.png'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Rehan Adhikari',
    role: 'Founder, Welcome Home – New Mumbai',
    logo: logo6,
    color: '#06b6d4',
    rating: 5,
    text: 'ReelX Media has helped us generate quality leads for our Sai Namah real estate project. Their marketing strategy and content approach have brought valuable visibility and potential buyers to our project. Great experience working with the team!',
    metric: 'Quality Leads',
  },
  {
    id: 2,
    name: "Nupur Ma'am",
    role: 'Co-Founder, Trinity Stays',
    logo: logo1,
    color: '#8b5cf6',
    rating: 5,
    text: "Since partnering with ReelX Media, our business has transformed completely. All five of our properties now achieve full occupancy every month, with demand sometimes exceeding our availability. Their marketing and content strategies have made a huge difference to our growth. We're extremely happy with the results and the partnership!",
    metric: '100% Occupancy',
  },
  {
    id: 3,
    name: 'Vipul Kocchar',
    role: 'Red Wings Resort & Lawns',
    logo: logo4,
    color: '#f97316',
    rating: 5,
    text: "ReelX Media has helped Red Wings Resort & Lawns attract more guests and generate significantly more bookings. Over the past six months, their marketing strategies and consistent efforts have brought us more business than we initially expected. We're extremely happy with the growth and results!",
    metric: 'More Bookings',
  },
  {
    id: 4,
    name: 'Bharati Naik',
    role: 'Founder, B7 Studio – Kharghar',
    logo: logoB7Studio,
    color: '#ec4899',
    rating: 5,
    text: "We had been struggling to generate consistent business despite running our salon for months. After partnering with ReelX Media, things changed significantly. Within just one month, their marketing strategies helped us generate over ₹2 lakh in business. We're extremely happy with the results and their approach!",
    metric: '₹2 Lakh+ Revenue',
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="testi section" id="testimonials" ref={ref}>
      <div className="testi__orb testi__orb--1" />
      <div className="testi__orb testi__orb--2" />

      <div className="container">
        <motion.div
          className="testi__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Love</div>
          <h2 className="testi__heading">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="testi__featured"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testi__main"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Quote */}
              <div className="testi__quote-icon">❝</div>
              <p className="testi__text">{testimonials[active].text}</p>

              {/* Author */}
              <div className="testi__author">
                <div className="testi__avatar" style={{ border: `2px solid ${testimonials[active].color}60` }}>
                  <img src={testimonials[active].logo} alt={testimonials[active].name} className="testi__avatar-img" />
                </div>
                <div>
                  <div className="testi__name">{testimonials[active].name}</div>
                  <div className="testi__role">{testimonials[active].role}</div>
                </div>
                <div className="testi__metric" style={{ color: testimonials[active].color }}>
                  {testimonials[active].metric}
                </div>
              </div>

              {/* Stars */}
              <div className="testi__stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="testi__star">★</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Glow */}
          <div className="testi__featured-glow" style={{ background: `radial-gradient(circle at center, ${testimonials[active].color}15 0%, transparent 70%)` }} />
        </motion.div>

        {/* Selector cards */}
        <div className="testi__cards">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              className={`testi__card ${active === i ? 'testi__card--active' : ''}`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              style={{ '--t-color': t.color }}
              whileHover={{ y: -4 }}
            >
              <div className="testi__card-avatar" style={{ border: `1.5px solid ${t.color}50` }}>
                <img src={t.logo} alt={t.name} className="testi__card-avatar-img" />
              </div>
              <div className="testi__card-info">
                <div className="testi__card-name">{t.name}</div>
                <div className="testi__card-role">{t.role}</div>
              </div>
              <div className="testi__card-metric" style={{ color: t.color }}>{t.metric}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
