import React from "react";
import data from "../data/projects.json";

export default function Projects() {
  return (
    <section className="projects-canva" id="projects">
      <div className="projects-canva-container">
        <h2 className="projects-canva-title" data-aos="fade-up">Notable Projects</h2>
        
        <div className="projects-canva-grid">
          {data.map((project, index) => (
            <article 
              key={project.id} 
              className="project-canva-card"
              data-aos="fade-up"
              data-aos-delay={String(100 + index * 100)}
            >
              <div className="project-canva-number">{project.number}</div>
              
              <h3 className="project-canva-title">{project.title}</h3>
              
              <p className="project-canva-description">{project.description}</p>
              
              <div className="project-canva-meta">
                {project.tools && (
                  <div className="project-canva-tools">
                    <strong>Tools:</strong> {project.tools.join(", ")}
                  </div>
                )}
                {project.analysis && (
                  <div className="project-canva-analysis">
                    <strong>Analysis:</strong> {project.analysis.join(", ")}
                  </div>
                )}
              </div>

              <div className="project-canva-links">
                {project.links && Object.entries(project.links).map(([key, url]) => (
                  <a 
                    key={key}
                    href={url} 
                    className="project-canva-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {key === 'fullDeck' && 'Full Deck'}
                    {key === 'tableau' && 'Tableau Dashboard'}
                    {key === 'colab' && 'Google Collab'}
                    {key === 'sheets' && 'Google Sheet (Analysis & Dashboard)'}
                    {key === 'lookerCohort' && 'Google Looker (Cohort Dashboard)'}
                    {key === 'lookerSales' && 'Google Looker (Sales Dashboard)'}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
