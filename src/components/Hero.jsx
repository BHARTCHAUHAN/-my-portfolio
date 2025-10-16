import React from 'react';
import profileImage from '../assets/iamge2.jpg'; // <-- Yeh line ab aache se theek hai


const Hero = () => {
    return (
        <section className="hero-n8n" id="home">
            <div className="hero-n8n-content">
                <div className="hero-n8n-text">
                    <h3 className="hero-n8n-subtitle">Hello, I'm</h3>
                    <h1 className="hero-n8n-title">
                        <span className="gradient-text">BHART CHAUHAN</span>
                    </h1>
                    <p className="hero-n8n-description">
                        A passionate Data Analyst transforming raw data into actionable insights using <span className="highlight">Python</span>, <span className="highlight">SQL</span>, and <span className="highlight">Power BI</span> to drive data-driven decisions.
                    </p>
                    <div className="hero-n8n-buttons">
                        <a href="Bhart_Chauhan_Data_Analyst_Resume.pdf" className="n8n-btn n8n-btn-primary" download>Download Resume</a>
                        <a href="#contact" className="n8n-btn n8n-btn-secondary">Contact Me</a>
                    </div>
                    <div className="hero-n8n-social">
                        <a href="https://github.com/BHARTCHAUHAN" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                        <a href="https://www.linkedin.com/in/bhart-chauhan-8a65bb277/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://www.instagram.com/bhart___chauhan_" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                        <a href="mailto:chauhanbhart2792@gmail.com" aria-label="Email"><i className='bx bx-envelope'></i></a>
                    </div>
                </div>
                <div className="hero-n8n-image">
                    <img src={profileImage} alt="Profile of Bhart Chauhan" />
                </div>
            </div>
        </section>
    );
};

export default Hero;