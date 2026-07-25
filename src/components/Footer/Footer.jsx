import React from 'react'
import './Footer.css'

const footerLinks = {
  Company: ['About Us', 'Our Team', 'Careers', 'Press Kit', 'Contact'],
  Services: ['YouTube Ads', 'Reels & TikTok', 'UGC Content', 'Brand Films', 'Strategy'],
  Resources: ['Case Studies', 'Blog', 'Video Tips', 'Free Guide', 'Webinars'],
}

const socialLinks = [
  { icon: '𝕏', label: 'X/Twitter', href: '#' },
  { icon: '📘', label: 'Facebook', href: '#' },
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '▶️', label: 'YouTube', href: '#' },
  { icon: '💼', label: 'LinkedIn', href: '#' },
]

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* Top divider */}
      <div className="footer__divider" />
      <div className="footer__orb" />

      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="10" fill="url(#footerLogoGrad)" />
                  <path d="M10 12h8l6 6-6 6H10l6-6-6-6z" fill="white" opacity="0.9"/>
                  <path d="M20 12h6l-6 6 6 6h-6l6-6-6-6z" fill="white" opacity="0.5"/>
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8b5cf6"/>
                      <stop offset="1" stopColor="#06b6d4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="footer__logo-text">
                REEL<span>X</span>
                <small>MEDIA</small>
              </div>
            </div>

            <p className="footer__tagline">
              Performance-driven video content that grows your revenue. Your brand deserves to be seen.
            </p>

            {/* Social */}
            <div className="footer__social">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social-link"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Awards */}
            <div className="footer__award">
              <span className="footer__award-icon">🏆</span>
              <span>Top Video Agency 2024</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer__col">
              <h4 className="footer__col-title">{section}</h4>
              <ul className="footer__links">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © 2024 ReelX Media. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__legal-dot">·</span>
            <a href="#" className="footer__legal-link">Terms of Service</a>
            <span className="footer__legal-dot">·</span>
            <a href="#" className="footer__legal-link">Cookie Policy</a>
          </div>
          <div className="footer__made">
            Made with <span>❤️</span> for brands that grow
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
