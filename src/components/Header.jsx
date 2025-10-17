import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", icon: "bx bx-home-alt" },
    { href: "#about", label: "About", icon: "bx bx-user" },
    { href: "#skills", label: "Skills", icon: "bx bx-code-alt" },
    { href: "#projects", label: "Projects", icon: "bx bx-briefcase" },
    { href: "#contact", label: "Contact", icon: "bx bx-envelope" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand" href="#home">
          <span className="brand-icon">
            <i className="bx bxs-data"></i>
          </span>
          <span className="brand-text">Bhart Chauhan</span>
          <span className="brand-subtitle">Data Analyst</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  href={link.href}
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="navbar-cta ms-lg-3">
            <a href="Bhart_Chauhan_Data_Analyst_Resume.pdf" className="btn btn-primary" download>
              <i className="bx bx-download"></i>
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
