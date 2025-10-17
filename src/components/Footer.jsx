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
    <footer className="modern-footer" data-aos="fade-up">
      <div className="container">
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="bx bxs-data"></i>
              </div>
              <h3 className="footer-title">Bhart Chauhan</h3>
              <p className="footer-tagline">Data Analyst • BI Specialist</p>
              <p className="footer-description">
                Transforming data into actionable insights using Python, SQL, and Power BI to drive data-driven decisions.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>
                      <i className="bx bx-chevron-right"></i>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Column */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h4 className="footer-heading">Core Skills</h4>
              <ul className="footer-skills">
                <li><i className="bx bxl-python"></i> Python</li>
                <li><i className="bx bx-data"></i> SQL</li>
                <li><i className="bx bxs-bar-chart-alt-2"></i> Power BI</li>
                <li><i className="bx bx-spreadsheet"></i> Excel</li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h4 className="footer-heading">Get in Touch</h4>
              <ul className="footer-contact">
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:chauhanbhart2792@gmail.com">chauhanbhart2792@gmail.com</a>
                </li>
                <li>
                  <i className="bx bx-phone"></i>
                  <a href="tel:+918189091763">+91 81890 91763</a>
                </li>
                <li>
                  <i className="bx bx-map"></i>
                  <span>New Delhi, India</span>
                </li>
              </ul>
              
              {/* Social Links */}
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-icon"
                  >
                    <i className={`bx ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="footer-copyright">
                © {year} <span className="gradient-text">Bhart Chauhan</span>. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <p className="footer-credits">
                Built with <i className="bx bxs-heart"></i> using React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
