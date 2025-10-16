import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer-n8n" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="footer-n8n-content">
        <div className="footer-n8n-main">
          <div className="footer-n8n-brand">
            <span className="footer-n8n-title gradient-text">Bhart Chauhan</span>
            <span className="footer-n8n-role">Data Analyst • BI • Python | SQL | Power BI</span>
          </div>
          <nav className="footer-n8n-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-n8n-contact">
            <a href="mailto:chauhanbhart07@gmail.com">chauhanbhart07@gmail.com</a>
            <a href="tel:+918189091763">+91 81890 91763</a>
            <div className="footer-n8n-social">
              <a href="https://github.com/BHARTCHAUHAN" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className='bx bxl-github'></i></a>
              <a href="https://www.linkedin.com/in/bhart-chauhan-8a65bb277/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
              <a href="/Bhart_Chauhan_Data_Analyst_Resume.pdf" target="_blank" rel="noopener" aria-label="Resume"><i className='bx bx-file'></i></a>
            </div>
          </div>
        </div>
        <div className="footer-n8n-bottom">
          <span>© {year} Bhart Chauhan. All rights reserved.</span>
          <span>Built with React. Respecting prefers-reduced-motion for smoother UX.</span>
        </div>
      </div>
    </footer>
  );
}
