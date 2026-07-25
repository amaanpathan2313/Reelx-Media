import React from 'react'
import logoImg from '../../assets/logo-transparent.png'
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
              <img src={logoImg} alt="ReelX Media Logo" className="footer__logo-img" />
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
