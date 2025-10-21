import React from 'react';

const educationData = [
  {
    type: 'education',
    title: 'Full-Stack Data Analytics',
    institution: 'RevoU',
    year: '2023',
    grade: 'Grade: 100/100',
    description: 'Attended the mini course and intensive data analytics course with 110+ hours of lectures of 6 modules of Data Analytics Program'
  },
  {
    type: 'education',
    title: 'Bank BTN\'s Officer Development Program (ODP)',
    institution: 'LPPI',
    year: '2017',
    description: 'Intensive Management Trainee training program in Banking Industry consist of In-class Training and On the Job Training'
  },
  {
    type: 'education',
    title: 'Architecture Engineering',
    institution: 'Universitas Brawijaya',
    year: '2011',
    grade: 'Bachelor Degree, Cumulative GPA: 3.17 / 4.00'
  }
];

const experienceData = [
  {
    type: 'experience',
    title: 'AML Reporting Specialist',
    company: 'Bank Jago',
    period: 'Full time, 2024 - Present',
    description: 'Conduct data analysis to support Anti Money Laundering decision-making process also created ad-hoc and periodic regulatory Anti Money Laundering reporting'
  },
  {
    type: 'experience',
    title: 'Data Analyst Mentor',
    company: 'RevoU',
    period: 'Part-time, 2024',
    description: 'Conducted mentoring session every week for 48 students to optimize their data analytics learning, utilizing tools like SQL, Google Looker Studio, and Google Sheets'
  },
  {
    type: 'experience',
    title: 'Data Analyst Associate',
    company: 'RevoU x Zurich',
    period: 'Virtual Internship, 2023 - 2024',
    description: 'Executed hands on of stealth digital marketing dataset as part of Data Analytics Virtual Internship with RevoU x Zurich'
  },
  {
    type: 'experience',
    title: 'Loan Monitoring and Restructuring Analyst',
    company: 'Bank Tabungan Negara (Persero) Tbk',
    period: 'Fulltime, 2022',
  },
  {
    type: 'experience',
    title: 'Commercial Asset Management Analyst',
    company: 'Bank Tabungan Negara (Persero) Tbk',
    period: 'Full time, 2018 - 2022',
  },
  {
    type: 'experience',
    title: 'Commercial Loan Analyst',
    company: 'Bank Tabungan Negara (Persero) Tbk',
    period: 'Full time, 2017-2018',
  }
];

const Experience = () => {
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
                <div key={index} className="experience-canva-item">
                  <div className="experience-canva-dot"></div>
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
              {experienceData.map((item, index) => (
                <div key={index} className="experience-canva-item">
                  <div className="experience-canva-dot"></div>
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
