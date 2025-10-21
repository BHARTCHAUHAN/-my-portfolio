import React from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  const { education: educationData, experience: workExperience } = experienceData;
  
  return (
    <section className="experience-canva" id="experience">
      <div className="experience-canva-container">
        <h2 className="experience-canva-title" data-aos="fade-up">Education & Experience Background</h2>
        
        <div className="experience-canva-grid">
          {/* Education */}
          <div className="experience-canva-column" data-aos="fade-right" data-aos-delay="100">
            <h3 className="experience-canva-section-title">EDUCATION</h3>
            <div className="experience-canva-timeline">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className="experience-canva-item"
                  data-aos="fade-up"
                  data-aos-delay={String(150 + index * 120)}
                >
                  <div className="experience-canva-icon">
                    {item.icon && <i className={`bx ${item.icon}`}></i>}
                  </div>
                  <div className="experience-canva-content">
                    <h4 className="experience-canva-item-title">{item.title}</h4>
                    <p className="experience-canva-institution">{item.institution}</p>
                    <p className="experience-canva-year">{item.year}</p>
                    {item.grade && <p className="experience-canva-detail">{item.grade}</p>}
                    {item.description && <p className="experience-canva-description">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="experience-canva-column" data-aos="fade-left" data-aos-delay="100">
            <h3 className="experience-canva-section-title">EXPERIENCE</h3>
            <div className="experience-canva-timeline">
              {workExperience.map((item, index) => (
                <div 
                  key={index} 
                  className="experience-canva-item"
                  data-aos="fade-up"
                  data-aos-delay={String(150 + index * 120)}
                >
                  <div className="experience-canva-icon">
                    {item.icon && <i className={`bx ${item.icon}`}></i>}
                  </div>
                  <div className="experience-canva-content">
                    <h4 className="experience-canva-item-title">{item.title}</h4>
                    <p className="experience-canva-company">{item.company}</p>
                    <p className="experience-canva-period">{item.period}</p>
                    {item.description && <p className="experience-canva-description">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
