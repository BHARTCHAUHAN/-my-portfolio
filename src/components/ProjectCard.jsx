import React from 'react';

const ProjectCard = ({ icon, title, description, tags, githubLink, delay }) => {
  return (
    <div className="project-card-n8n">
      <div className="project-card-n8n-header">
        <div className="project-card-n8n-icon"><i className={icon}></i></div>
      </div>
      <div className="project-card-n8n-body">
        <h3 className="project-card-n8n-title">{title}</h3>
        <p className="project-card-n8n-desc">{description}</p>
        <div className="project-card-n8n-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card-n8n-tag">{tag}</span>
          ))}
        </div>
        <div className="project-card-n8n-footer">
          <a href={githubLink} className="project-card-n8n-link" aria-label="View on GitHub" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i> View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;