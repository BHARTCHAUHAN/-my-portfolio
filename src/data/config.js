// Centralized Configuration for Portfolio

export const personalInfo = {
  name: "Bhart Chauhan",
  firstName: "BHART",
  lastName: "CHAUHAN",
  title: "Data Analyst",
  subtitle: "Data Reporting / Analyst and Certified ",
  tagline: "I help people finding insights",
  taglineHighlight: "through data",
  email: "chauhanbhart2792@gmail.com",
  phone: "+917835978072", // Updated phone number
  whatsapp: "917835978072", // Updated WhatsApp number
  location: "New Delhi, India",
  resume: "Bhart_Chauhan_Resume.pdf",
  bio: [
  "I’m a data analyst skilled in SQL, Python, Excel, and Power BI. I enjoy turning raw data into clear, useful insights for business growth, especially in e-commerce and finance. My experience includes building dashboards, automating reports, and analyzing customer and financial data. I’m certified in advanced analytics and banking, and I love helping teams make smart decisions with data."  
  ]
};

export const socialLinks = [
  { 
    href: 'https://www.linkedin.com/in/bhart-chauhan-8a65bb277/', 
    icon: 'bxl-linkedin', 
    label: 'LinkedIn' 
  },
  { 
    href: 'https://github.com/BHARTCHAUHAN', 
    icon: 'bxl-github', 
    label: 'GitHub' 
  },
  { 
    href: 'https://wa.me/917835978072', 
    icon: 'bxl-whatsapp', 
    label: 'WhatsApp' 
  },
  { 
    href: 'https://www.instagram.com/bhart___chauhan_', 
    icon: 'bxl-instagram', 
    label: 'Instagram' 
  },
  { 
    href: 'mailto:chauhanbhart2792@gmail.com', 
    icon: 'bx-envelope', 
    label: 'Email' 
  }
];

export const navLinks = [
  { href: "#home", label: "Home", icon: "bx bx-home-alt" },
  { href: "#about", label: "About", icon: "bx bx-user" },
  { href: "#skills", label: "Skills", icon: "bx bx-code-alt" },
  { href: "#projects", label: "Projects", icon: "bx bx-briefcase" },
  { href: "#experience", label: "Experience", icon: "bx bx-time-five" },
  { href: "#contact", label: "Contact", icon: "bx bx-envelope" }
];

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['SQL', 'Python', 'Microsoft Excel', 'Google Sheet']
  },
  {
    title: 'Data Analytic Tools',
    skills: ['Google BigQuery', 'Visual Code Studio']
  },
  {
    title: 'Data Visualization Tools',
    skills: ['Tableau', 'Looker Studio']
  },
  {
    title: 'Data Analytic Methods',
    skills: [
      'EDA', 
      'Segmentation/Clustering', 
      'Cohort', 
      'Linear Regression', 
      'Logistic Regression', 
      'Statistic', 
      'A/B Testing', 
      'ANOVA', 
      'T-Test'
    ]
  }
];

export const skillsWithProgress = [
  {
    title: 'Programming Languages',
    icon: 'bx bx-code-block',
    skills: [
      { label: 'Python', value: 92 },
      { label: 'SQL', value: 88 },
      { label: 'JavaScript', value: 75 },
      { label: 'R', value: 80 }
    ]
  },
  {
    title: 'Data & Analytics',
    icon: 'bx bx-line-chart',
    skills: [
      { label: 'Power BI', value: 90 },
      { label: 'Tableau', value: 85 },
      { label: 'Excel Advanced', value: 95 },
      { label: 'Data Visualization', value: 88 }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: 'bx bx-git-branch',
    skills: [
      { label: 'ETL Workflows', value: 87 },
      { label: 'Git & GitHub', value: 83 },
      { label: 'Apache Spark', value: 78 },
      { label: 'Docker', value: 75 }
    ]
  },
  {
    title: 'Data Science',
    icon: 'bx bx-brain',
    skills: [
      { label: 'Machine Learning', value: 82 },
      { label: 'Statistical Analysis', value: 88 },
      { label: 'Predictive Modeling', value: 85 },
      { label: 'NLP', value: 80 }
    ]
  }
];
