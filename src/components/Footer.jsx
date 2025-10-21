import React from 'react';
import { personalInfo, socialLinks, navLinks } from '../data/config';

const year = new Date().getFullYear();

export default function Footer() {
  const quickLinks = navLinks;

  return (
    <footer className="footer-n8n" data-aos="fade-up">
      <div className="footer-n8n-content">
        {/* Footer Main */}
        <div className="footer-n8n-main">
          {/* Brand Section */}
          <div className="footer-n8n-brand">
            <h3 className="footer-n8n-title">{personalInfo.name}</h3>
            <p className="footer-n8n-role">{personalInfo.title} & BI Specialist</p>
            <p className="footer-n8n-description">
              {personalInfo.tagline} {personalInfo.taglineHighlight}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="footer-n8n-nav">
            <h4 className="footer-section-title">Navigation</h4>
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
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
