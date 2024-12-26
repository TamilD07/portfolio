import React from 'react';
import "../Style/Home.css";
import image from "../images/image.png"; 

import Pdf from "../PDF/TamilKumaran_Full-Stack_resume.pdf";
 


function Home() {  
  return (
    <div id="home">
      <div className="intropage">
        <div className="container-fluid d-flex">
          <div className="text-container d-flex align-items-center justify-content-center">
            <div className="in1 text-center">
              <p>Hello, I'm TamilKumaran</p>
              <p>Crafting FullStack Solutions</p>
            </div>
            <div className="in2 text-center">
              <p>
              I’m a passionate junior web developer dedicated to creating impactful and responsive web solutions. 
              Proficient in HTML, CSS, JavaScript, and SQL databases, I excel in writing clean, efficient code and crafting intuitive user experiences. 
              My focus on innovation and quality ensures every project delivers value and stands apart. 
              Explore my work to see how I can help bring your vision to life. 
              Let’s build something extraordinary together!
              </p>
              <div className='resume-button'>
                <a href={Pdf} download="TamilKumaran_Resume.pdf"  >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="image-container">

            <img loading="lazy" src={image} alt="Profile" className="img-fluid" /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
