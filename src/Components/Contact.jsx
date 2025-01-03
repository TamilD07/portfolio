import React, { useState } from 'react';
import '../Style/Contact.css';
import { MdEmail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { SiWhatsapp, SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.firstName,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send('service_gsrknqi', 'template_15ppzx5', templateParams, 'PD5LJfERNUhOt3GSx')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message.');
      });
  };

  return (
    <div className="contact-wrapper"> {/* Add a common class for the whole element */}
      <div id="contact" className="contact-container">
        {/* Left Section */}
        <div className="contact-info">
          <h1>Contact Me.</h1>
          <p>
            I will read all my emails one by one and I'm not going to let them miss.
            Send me any message you want, and I will reply to that.
          </p>
          <p>
            I need your <strong>Name</strong> and <strong>Email Address</strong>, but you won't receive
            anything except your reply.
          </p>
          <div className="contact-social">
            <p>Social Media Seriously Harm Your Mental Health</p>
            <div className="social-icons">
              <span className="icon">
                <a href="mailto:tamilkumranmtk@gmail.com" target="_blank" rel="noreferrer">
                  <MdEmail />
                </a>
              </span>
              <span className="icon">
                <a href="tel:+918525929495" target="_blank" rel="noreferrer">
                  <TbPhoneCall />
                </a>
              </span>
              <span className="icon">
                <a href="https://wa.me/+918525929495" target="_blank" rel="noreferrer">
                  <SiWhatsapp />
                </a>
              </span>
              <span className="icon">
                <a href="https://github.com/TamilD07" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </span>
              <span className="icon">
                <a href="https://www.linkedin.com/in/tktamil-kumaranmtk/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </span>
              <span className="icon">
                <a href="https://x.com/Tamil_D07" target="_blank" rel="noreferrer">
                  <BsTwitterX />
                </a>
              </span>
              <span className="icon">
                <a href="https://www.instagram.com/tamxdee/" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              </span>
              <span className="icon">
                <a href="https://leetcode.com/u/qSwByb62YC/" target="_blank" rel="noreferrer">
                  <SiLeetcode />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h1>Share Response</h1>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
