import React, { useEffect, useState, useRef } from 'react';
import img1 from '../images/clg.jpg';
import img3 from '../images/schoolf.gif';
import img4 from '../images/sclpic.jpeg';
import img5 from '../images/besant.jpg';
import "../Style/Education.css";

function Education() {
  const [visibleCards, setVisibleCards] = useState([]);
  const educationRef = useRef(null); // Reference to the education section

  useEffect(() => {
    // Intersection Observer to detect when the component is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation when in view
          const timeouts = [];
          for (let i = 0; i < 4; i++) {
            timeouts.push(setTimeout(() => {
              setVisibleCards((prev) => [...prev, i]);
            }, i * 1000)); // 2 seconds delay for each card
          }

          // Cleanup function to clear timeouts
          return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
          };
        }
      });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div id="education" ref={educationRef}>
      <h2>EDUCATION</h2>
      <div className="edu-cards">
        {/* First Card */}
        {visibleCards.includes(0) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img1} alt="college_picture" />
            <div className="card-content">
              <h3>Under-Graduate 2024</h3>
              <h6>BSC.Computer Science</h6>
              <p>CGPA 6.2</p>
              <p>Sastra Deemed To Be University</p>
              <p>Kumbakonam</p>
            </div>
          </div>
        )}

        {/* Second Card */}
        {visibleCards.includes(1) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img3} alt="school_picture" />
            <div className="card-content">
              <h3>HSC</h3>
              <h6>Tamil Nadu Higher Secondary Certificate Examination</h6>
              <p>75%</p>
              <p>TOWN HIGHER SECONDARY SCHOOL</p>
              <p>Kumbakonam</p>
            </div>
          </div>
        )}

        {/* Third Card */}
        {visibleCards.includes(2) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img4} alt="school_picture" />
            <div className="card-content">
              <h3>SSLC</h3>
              <h6>Tamil Nadu Higher Secondary Certificate Examination</h6>
              <p>65%</p>
              <p>TOWN HIGHER SECONDARY SCHOOL</p>
              <p>Kumbakonam</p>
            </div>
          </div>
        )}

        {/* Fourth Card */}
        {visibleCards.includes(3) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img5} alt="besant_technologies" />
            <div className="card-content">
              <h3>FULL-STACK JAVA</h3>
              <h6>BESANT TECHNOLOGIES</h6>
              <p>CHENNAI</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
