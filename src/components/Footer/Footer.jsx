import React from 'react'
import logoImg from '../../assets/logo-transparent.png'
import './Footer.css'

const companyLinks = [
  { label: 'About ReelXMedia', href: '#about' },
  { label: 'Our Approach', href: '#how-we-work' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'Contact Us', href: '#cta' },
]

const servicesLinks = [
  { label: 'Business Growth Strategy', href: '#services' },
  { label: 'Content Strategy & Production', href: '#services' },
  { label: 'Social Media Management', href: '#services' },
  { label: 'Performance Marketing & Lead Generation', href: '#services' },
]


const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:contact@reelxmedia.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      {/* Background Glow Overlays */}
      <div className="footer__glow-left" aria-hidden="true" />
      <div className="footer__glow-right" aria-hidden="true" />
      <div className="footer__light-curve" aria-hidden="true" />

      <div className="container footer__container">
        <div className="footer__main">
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" aria-label="ReelX Media Home">
              <img src={logoImg} alt="ReelX Media Logo" className="footer__logo-img" />
            </a>

            <p className="footer__tagline">
              <span className="footer__tagline-line">We build strategic marketing systems that help businesses</span>
              <span className="footer__tagline-line">attract customers, generate leads, and grow.</span>
            </p>

            {/* Social Icons */}
            <div className="footer__social" aria-label="Social media links">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="footer__social-btn"
                  aria-label={item.name}
                  {...(item.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Call To Action Button */}
            <a
              href="https://wa.me/919321434984"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__cta-button"
            >
              <span>Book a Free Strategy Call</span>
              <span className="footer__cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* Nav Grid for Columns */}
          <div className="footer__nav-grid">
            {/* Column 2: Company */}
            <div className="footer__col footer__col--company">
              <h4 className="footer__col-title">Company</h4>
              <span className="footer__col-bar" aria-hidden="true" />
              <ul className="footer__col-list">
                {companyLinks.map((link) => (
                  <li key={link.label} className="footer__col-item">
                    <a href={link.href} className="footer__col-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer__col footer__col--services">
              <h4 className="footer__col-title">Services</h4>
              <span className="footer__col-bar" aria-hidden="true" />
              <ul className="footer__col-list">
                {servicesLinks.map((link) => (
                  <li key={link.label} className="footer__col-item">
                    <a href={link.href} className="footer__col-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © 2021 - {currentYear} ReelXMedia. All rights reserved.
          </p>

          <div className="footer__legal">
            <span className="footer__legal-bar" aria-hidden="true">|</span>
            <a href="#privacy" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__legal-bar" aria-hidden="true">|</span>
            <a href="#terms" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
