import React from "react";
import data from "../data/projects.json";

export default function Projects() {
  return (
    <section className="projects-canva" id="projects">
      <div className="projects-canva-container">
        <h2 className="projects-canva-title" data-aos="fade-up">Notable Projects</h2>
        
        <div className="projects-simple-list">
          {data.map((project, index) => (
            <article 
              key={project.id} 
              className="project-simple-item"
              data-aos="fade-up"
              data-aos-delay={String(100 + index * 120)}
            >
              <div className="project-simple-header">
                <span className="project-simple-number">{project.number}</span>
                <h3 className="project-simple-title">{project.title}</h3>
              </div>
              
              <p className="project-simple-description">{project.description}</p>
              
              <div className="project-simple-meta">
                {project.tools && (
                  <div className="project-simple-tools">
                    <strong>Tools:</strong> {project.tools.join(", ")}
                  </div>
                )}
                {project.analysis && (
                  <div className="project-simple-analysis">
                    <strong>Analysis:</strong> {project.analysis.join(", ")}
                  </div>
                )}
              </div>

              <div className="project-simple-links">
                {project.links && Object.entries(project.links).map(([key, url]) => (
                  <a 
                    key={key}
                    href={url} 
                    className="project-simple-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {key === 'fullDeck' && 'Full Deck'}
                    {key === 'tableau' && 'Tableau'}
                    {key === 'colab' && 'Google Colab'}
                    {key === 'sheets' && 'Google Sheet'}
                    {key === 'lookerCohort' && 'Looker (Cohort)'}
                    {key === 'lookerSales' && 'Looker (Sales)'}
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
