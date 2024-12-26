import React from 'react';
import "../Style/Home.css";
import image from "../images/image.png"; 
<<<<<<< HEAD
import Pdf from "../PDF/TamilKumaran_Full-Stack_resume.pdf"
=======
import Pdf from "../PDF/Tamil_Junior web developer_resume.pdf"
>>>>>>> ebaa28c56721f8f2d586c6946d6760aa2832ecde

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
<<<<<<< HEAD
              I’m a passionate junior web developer dedicated to creating impactful and responsive web solutions. 
              Proficient in HTML, CSS, JavaScript, and SQL databases, I excel in writing clean, efficient code and crafting intuitive user experiences. 
              My focus on innovation and quality ensures every project delivers value and stands apart. 
              Explore my work to see how I can help bring your vision to life. 
              Let’s build something extraordinary together!
=======
                I’m a passionate junior web developer with experience in creating dynamic and responsive web.
                My expertise spans HTML, CSS, JavaScript, and SQL databases, with a focus on clean, efficient code and intuitive user experiences.
                Explore my projects to see how I can bring value to your team through innovative solutions and a strong commitment to quality.
                Let’s build something great together!
>>>>>>> ebaa28c56721f8f2d586c6946d6760aa2832ecde
              </p>
              <div className='resume-button'>
                <a href={Pdf} download="TamilKumaran_Resume.pdf"  >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="image-container">
<<<<<<< HEAD
            <img loading="lazy" src={image} alt="Profile" className="img-fluid" />  {/* Updated the image path */}
=======
            <img src={image} alt="Profile" className="img-fluid" />  {/* Updated the image path */}
>>>>>>> ebaa28c56721f8f2d586c6946d6760aa2832ecde
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
