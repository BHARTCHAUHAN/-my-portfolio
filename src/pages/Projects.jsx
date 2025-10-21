import React from "react";
import data from "../data/projects.json";

export default function Projects() {
  return (
    <section className="projects-canva" id="projects">
      <div className="projects-canva-container">
        <h2 className="projects-canva-title" data-aos="fade-up">Notable Projects</h2>
        
        <div className="projects-grid">
          {data.map((project, index) => (
            <article 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={String(100 + index * 120)}
            >
              {/* Project Image */}
              <div className="project-card-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-card-overlay">
                  <span className="project-card-number">{project.number}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                
                <p className="project-card-description">{project.description}</p>
                
                <div className="project-card-meta">
                  {project.tools && (
                    <div className="project-meta-item">
                      <strong>Tools:</strong> <span>{project.tools.join(", ")}</span>
                    </div>
                  )}
                  {project.analysis && (
                    <div className="project-meta-item">
                      <strong>Analysis:</strong> <span>{project.analysis.join(", ")}</span>
                    </div>
                  )}
                </div>

                {/* Project Links */}
                <div className="project-card-links">
                  {project.links && Object.entries(project.links).map(([key, url]) => (
                    <a 
                      key={key}
                      href={url} 
                      className="project-card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {key === 'fullDeck' && 'Full Deck'}
                      {key === 'tableau' && 'Tableau Dashboard'}
                      {key === 'colab' && 'Google Collab'}
                      {key === 'sheets' && 'Google Sheet'}
                      {key === 'lookerCohort' && 'Google Looker (Cohort)'}
                      {key === 'lookerSales' && 'Google Looker (Sales)'}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
