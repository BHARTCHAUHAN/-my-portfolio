import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/BHARTCHAUHAN", icon: "bxl-github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/bhart-chauhan-8a65bb277/", icon: "bxl-linkedin", label: "LinkedIn" },
    { href: "https://www.instagram.com/bhart___chauhan_", icon: "bxl-instagram", label: "Instagram" },
    { href: "mailto:chauhanbhart2792@gmail.com", icon: "bx-envelope", label: "Email" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="footer-n8n" data-aos="fade-up">
      <div className="footer-n8n-content">
        {/* Footer Main */}
        <div className="footer-n8n-main">
          {/* Brand Section */}
          <div className="footer-n8n-brand">
            <h3 className="footer-n8n-title">Bhart Chauhan</h3>
            <p className="footer-n8n-role">Data Analyst & BI Specialist</p>
            <p className="footer-n8n-description">
              Transforming data into actionable insights using Python, SQL, and Power BI.
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
            <a href="mailto:chauhanbhart2792@gmail.com">chauhanbhart2792@gmail.com</a>
            <a href="tel:+918189091763">+91 81890 91763</a>
            <span>New Delhi, India</span>
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
            © {year} <span className="gradient-text">Bhart Chauhan</span> • All rights reserved
          </p>
          <p className="footer-n8n-credits">
            Built with <i className="bx bxs-heart" style={{ color: '#ffb86c' }} /> using React, Bootstrap & n8n design
          </p>
        </div>
      </div>
    </footer>
  );
}
