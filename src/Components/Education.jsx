import React, { useEffect, useState, useRef } from 'react';
import img1 from '../images/clg.jpg';
import img3 from '../images/schoolf.gif';
import img4 from '../images/sclpic.jpeg';
import img5 from '../images/besant.jpg';
import '../Style/Education.css';

function Education() {
  const [visibleCards, setVisibleCards] = useState([]);
  const educationRef = useRef(null); // Reference to the education section

  useEffect(() => {
    // Intersection Observer to detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start revealing cards with delays
            const timeouts = [];
            for (let i = 0; i < 4; i++) {
              timeouts.push(
                setTimeout(() => {
                  setVisibleCards((prev) => [...prev, i]);
                }, i * 1000) // Delay of 1 second between each card
              );
            }

            // Cleanup timeouts when cards are fully loaded
            return () => {
              timeouts.forEach((timeout) => clearTimeout(timeout));
            };
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <div id="education" ref={educationRef}>
      <h2>EDUCATION</h2>
      <div className="edu-cards">
        {/* First Card */}
        {visibleCards.includes(0) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img1} alt="College" loading="lazy" />
            <div className="card-content">
              <h3>Undergraduate 2024</h3>
              <h6>B.Sc. Computer Science</h6>
              <p>CGPA 6.2</p>
              <p>Sastra Deemed to Be University</p>
              <p>Kumbakonam</p>
            </div>
          </div>
        )}

        {/* Second Card */}
        {visibleCards.includes(1) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img3} alt="HSC School" loading="lazy" />
            <div className="card-content">
              <h3>HSC</h3>
              <h6>Tamil Nadu Higher Secondary Certificate Examination</h6>
              <p>75%</p>
              <p>Town Higher Secondary School</p>
              <p>Kumbakonam</p>
            </div>
          </div>
        )}

        {/* Third Card */}
        {visibleCards.includes(2) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img4} alt="SSLC School" loading="lazy" />
            <div className="card-content">
              <h3>SSLC</h3>
              <h6>Tamil Nadu Higher Secondary Certificate Examination</h6>
              <p>65%</p>
              <p>Town Higher Secondary School</p>
              <p>Kumbakonam</p>
            </div>
          </div>
        )}

        {/* Fourth Card */}
        {visibleCards.includes(3) && (
          <div className="edu-card flip-animation">
            <img className="card-img" src={img5} alt="Besant Technologies" loading="lazy" />
            <div className="card-content">
              <h3>Full-Stack Java</h3>
              <h6>Besant Technologies</h6>
              <p>Chennai</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
