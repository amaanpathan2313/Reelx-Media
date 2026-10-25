import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Brands.css'

import logo1 from '../../assets/client-logo/1.png'
import logo2 from '../../assets/client-logo/2.png'
import logo3 from '../../assets/client-logo/3.png'
import logo4 from '../../assets/client-logo/4.png'
import logo5 from '../../assets/client-logo/5.png'
import logo6 from '../../assets/client-logo/6.png'
import logo7 from '../../assets/client-logo/7.png'
import logo8 from '../../assets/client-logo/8.png'
import logo9 from '../../assets/client-logo/9.png'
import logo10 from '../../assets/client-logo/10.png'
import logoZorko from '../../assets/client-logo/zorko.png'
import logoB7Studio from '../../assets/client-logo/b7-studio.png'

const brandLogos = [
  { id: 1, src: logo1, alt: 'Client logo 1' },
  { id: 2, src: logo2, alt: 'Sheth Villa' },
  { id: 3, src: logo3, alt: 'Evergreen Farms' },
  { id: 4, src: logo4, alt: 'Redwings Resort & Lawns' },
  { id: 5, src: logo5, alt: 'Client logo 5' },
  { id: 6, src: logo6, alt: 'Client logo 6' },
  { id: 7, src: logo7, alt: 'Client logo 7' },
  { id: 8, src: logo8, alt: 'Client logo 8' },
  { id: 9, src: logo9, alt: 'Client logo 9' },
  { id: 10, src: logo10, alt: 'Dermacos' },
  { id: 11, src: logoZorko, alt: 'Zorko Brand of Food Lovers' },
  { id: 12, src: logoB7Studio, alt: 'B7 Studio' },
]

const Brands = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="brands section" id="brands" ref={ref}>
      <div className="container">
        <motion.div
          className="brands__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="brands__tagline">
            We Don't Just <span className="gradient-text">Make Videos</span>
            <br />
            We Help You in <span className="gradient-text">Making More Money</span>
          </p>
          <p className="brands__sub">Trusted by fast-growing companies across industries</p>
        </motion.div>

        {/* Brand logos */}
        <motion.div
          className="brands__grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {brandLogos.map((brand, i) => (
            <motion.div
              key={brand.id}
              className={`brands__logo ${brand.text ? 'brands__logo--text' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              {brand.text ? (
                <div className="brands__text-content">{brand.text}</div>
              ) : (
                <img src={brand.src} alt={brand.alt || `Client logo ${brand.id}`} className="brands__logo-img" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Line */}
        <motion.div
          className="brands__stats-line"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          We have helped <span className="highlight">40+ Brands</span> in the last <span className="highlight">5+ years</span>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="brands__bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="brands__pill">
            <span className="brands__pill-dot" />
            <span>Ready to join them?</span>
          </div>
          <a href="#cta" className="btn-primary" id="brands-cta">
            Start Your Brand Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Brands
