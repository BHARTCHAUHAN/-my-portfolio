import aboutPic from '../assets/about-pic.jpg';

function About() {
  return (
    <section className="about-n8n">
      <div className="about-n8n-content">
        <div className="about-n8n-text">
          <h2 className="about-n8n-title gradient-text">About Me</h2>
          <p className="about-n8n-description">
            Hi! I'm <span className="highlight">Bhart Chauhan</span>, a passionate <span className="highlight">Data Analyst</span> with expertise in <span className="highlight">Python</span>, <span className="highlight">SQL</span>, and <span className="highlight">Power BI</span>. I love transforming raw data into actionable insights and helping businesses make data-driven decisions. <br /><br />
            My journey in analytics is driven by curiosity and a desire to solve real-world problems using data visualization, automation, and statistical analysis.
          </p>
        </div>
        <div className="about-n8n-image">
          <img src={aboutPic} alt="About Bhart Chauhan" />
        </div>
      </div>
    </section>
  );
}

export default About;
