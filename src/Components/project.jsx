import React, { useState } from 'react';
import '../Style/project.css'; // Import the CSS for styling
import projectImg1 from '../images/project1.png';
import projectImg2 from '../images/project11.png';
import projectImg12 from '../images/project2.png';
import projectImg22 from '../images/project22.png';

const ProjectPortfolio = () => {
  const [currentProject, setCurrentProject] = useState(1); // Track which project is being displayed

  const handleNext = () => {
    setCurrentProject(currentProject === 1 ? 2 : 1); // Switch between two projects
  };

  const handlePrev = () => {
    setCurrentProject(currentProject === 2 ? 1 : 2); // Switch between two projects
  };

  return (
    <div id="projects"className="portfolio-container">
      {currentProject === 1 ? (
        <div className="portfolio-left">
          <h1>MY <span className="highlight">PROJECTS</span></h1>
          <div className="portfolio-images">
            <img src={projectImg1} alt="University Scheduler 1" />
            <img src={projectImg2} alt="University Scheduler 2" />
          </div>
          <p>
            Implementing a streamlined timetable organization system using advanced algorithms to efficiently manage teaching schedules, reducing resource expenditure, and enhancing accuracy compared to traditional methods.
          </p>
        </div>
      ) : (
        <div className="portfolio-left">
          <h1>MY <span className="highlight"> PROJECTS</span></h1>
          <div className="portfolio-images">
            <img src={ projectImg12} alt="Employee Database 1" /> {/* Add your employee management images */}
            <img src={ projectImg22} alt="Employee Database 2" />
          </div>
          <p>
            Developed a comprehensive database management system using SQL to streamline employee data management for a medium-sized organization.
          </p>
        </div>
      )}

      {currentProject === 1 ? (
        <div className="portfolio-right">
          <div className="project-card">
            <h3>University Time Table Scheduler</h3>
            <p>Efficient system for teaching staff to upload workload details and generate precise timetables.</p>
            <p><b>Responsibilities:</b></p>
            <ul>
              <li>Developed system for teaching staff to upload workload details.</li>
              <li>Efficient placement of faculty into courses.</li>
              <li>Designed database for workload management.</li>
            </ul>
            <p>
              <b>GitHub:</b> <a href="https://github.com/TamilD07/timetable.git">github.com/TamilD07/timetable</a><br/>
              <b>Live Link:</b> <a href="https://automated-university-timetable-scheduler.000webhostapp.com/">automated-university-timetable-scheduler</a>
            </p>
          </div>
        </div>
      ) : (
        <div className="portfolio-right">
          <div className="project-card">
            <h3>Employee Database Management System</h3>
            <p>Developed a comprehensive database management system to streamline employee data for a medium-sized organization.</p>
            <p><b>Responsibilities:</b></p>
            <ul>
              <li>Designed and implemented the database schema to efficiently store employee information.</li>
              <li>Created SQL queries to manage employee records, including onboarding, performance evaluations, and payroll.</li>
              <li>Collaborated with HR and IT teams to integrate the database system with HR and payroll systems.</li>
            </ul>
            <p>
              <b>GitHub:</b> <a href="https://github.com/TamilD07/Employee-data.gi">github.com/TamilD07/Employee-data</a>
            </p>
          </div>
        </div>
      )}

      <div className="pagination">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
