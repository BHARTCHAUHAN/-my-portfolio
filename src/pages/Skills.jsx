import React from "react";

function Skills() {
  const skillGrouping = [
    {
      mainCategory: 'Programming Languages',
      skills: ['SQL', 'Python', 'Microsoft Excel', 'Google Sheet']
    },
    {
      mainCategory: 'Data Analytic Tools',
      skills: ['Google BigQuery', 'Visual Code Studio']
    },
    {
      mainCategory: 'Data Visualization Tools',
      skills: ['Tableau', 'Looker Studio']
    },
    {
      mainCategory: 'Data Analytic Methods',
      skills: ['EDA', 'Segmentation/Clustering', 'Cohort', 'Linear Regression', 'Logistic Regression', 'Statistic', 'A/B Testing', 'ANOVA', 'T-Test']
    }
  ];

  return (
    <section className="skills-n8n" id="skills">
      <div className="skills-n8n-container">
        <div className="skills-n8n-header" data-aos="fade-up">
          <h2 className="skills-n8n-title">Technical Skills</h2>
        </div>

        <div className="skills-simple-list">
          {skillGrouping.map((group, groupIndex) => (
            <div
              key={group.mainCategory}
              className="skills-simple-group"
              data-aos="fade-up"
              data-aos-delay={String(100 + groupIndex * 120)}
            >
              <h3 className="skills-simple-header">{group.mainCategory}</h3>

              <div className="skills-simple-items">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills-simple-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
