import React from 'react';
import { personalInfo, socialLinks } from '../data/config';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  { label: 'Footer', href: '#footer' }
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer" className="footer-n8n" data-aos="fade-up">
      <div className="footer-n8n-content">
        {/* Footer Main */}
        <div className="footer-n8n-main">
          {/* Brand Section */}
          <div className="footer-n8n-brand">
            <h3 className="footer-n8n-title">{personalInfo.name}</h3>
            <p className="footer-n8n-role">{personalInfo.title}</p>
            <p className="footer-n8n-description">
              {personalInfo.tagline} {personalInfo.taglineHighlight}
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer-n8n-navigation" aria-label="Footer navigation">
            <h4 className="footer-section-title">Navigation</h4>
            <ul className="footer-n8n-nav-list">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="footer-n8n-contact">
            <h4 className="footer-section-title">Contact</h4>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-n8n-social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <i className={`bx ${social.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-n8n-divider" />

        {/* Footer Bottom */}
        <div className="footer-n8n-bottom">
          <p className="footer-n8n-copyright">
            © {year} <span className="gradient-text">{personalInfo.name}</span> • All rights reserved
          </p>
          <p className="footer-n8n-credits">
            Built with <i className="bx bxs-heart" style={{ color: '#ffb86c' }} /> using React, Bootstrap & n8n design
          </p>
        </div>
      </div>
    </footer>
  );
}
