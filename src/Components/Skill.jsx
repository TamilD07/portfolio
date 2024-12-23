import React, { useEffect, useState } from 'react';
import '../Style/Skills.css'; // Import the CSS for styling
import javaIcon from '../images/java.png'; // Example: replace with real image paths
import reactIcon from '../images/react.png';
import sqlIcon from '../images/mysql.png';
import frontend from '../images/frontend.png';

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-container");
      const { top } = skillsSection.getBoundingClientRect();
      if (top < window.innerHeight) {
        // Trigger the appearance of cards one by one with a delay
        const timeouts = [];
        for (let i = 0; i < 5; i++) {
          timeouts.push(
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, i]);
            }, i * 500) // Delay each card by 0.5s
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="skills-container" className="skills-container">
      <div className="skills-left">
        <h2>My Skills</h2>
        <h1>
          Why Hire Me For Your Next <span className="highlight">Project?</span>
        </h1>
        <p>
          I'm skilled in Java, web development, and React.js. My passion is to build robust, scalable web applications and solve challenging problems using my technical skills and creativity.
        </p>
        <button className="hire-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Hire Me
        </button>

       </div>

      <div className="skills-right">
        {visibleCards.includes(0) && (
          <div className="skill-card flip-animation">
            <img src={javaIcon} alt="Core Java" className="skill-icon" />
            <h3>Core Java</h3>
            <p>Experienced in Java, object-oriented programming, and developing backend solutions.</p>
          </div>
        )}
        {visibleCards.includes(1) && (
          <div className="skill-card flip-animation">
            <img src={reactIcon} alt="ReactJS" className="skill-icon" />
            <h3>ReactJS</h3>
            <p>Expertise in React.js for building dynamic, single-page applications with reusable components.</p>
          </div>
        )}
        {visibleCards.includes(2) && (
          <div className="skill-card flip-animation">
            <img src={sqlIcon} alt="SQL" className="skill-icon" />
            <h3>SQL</h3>
            <p>Proficient in SQL queries, relational databases, and database management systems.</p>
          </div>
        )}
        {visibleCards.includes(3) && (
          <div className="skill-card flip-animation">
            <img src={frontend} alt="HTML, CSS, JS" className="skill-icon" />
            <h3>HTML, CSS, JS</h3>
            <p>Skilled in front-end web technologies, including HTML5, CSS3, and JavaScript for responsive designs.</p>
          </div>
        )}
        {visibleCards.includes(4) && (
          <div className="skill-card flip-animation">
            <img src={javaIcon} alt="JSP, Servlet, JDBC" className="skill-icon" />
            <h3>JSP, Servlet, JDBC</h3>
            <p>Experienced in building dynamic web applications with JSP, Servlet, and JDBC for database interactions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
