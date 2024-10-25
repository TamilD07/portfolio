import React from 'react';
import "../Style/Home.css";
import image from "../images/image.png"; 
import Pdf from "../PDF/Tamil_Junior web developer_resume.pdf"

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
                I’m a passionate junior web developer with experience in creating dynamic and responsive web.
                My expertise spans HTML, CSS, JavaScript, and SQL databases, with a focus on clean, efficient code and intuitive user experiences.
                Explore my projects to see how I can bring value to your team through innovative solutions and a strong commitment to quality.
                Let’s build something great together!
              </p>
              <div className='resume-button'>
                <a href={Pdf} download="TamilKumaran_Resume.pdf"  >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src={image} alt="Profile" className="img-fluid" />  {/* Updated the image path */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
