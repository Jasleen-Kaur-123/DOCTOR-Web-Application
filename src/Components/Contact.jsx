import React from 'react';
import '../Style/Contact.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-socials">
          <Link to={"/home"}><FaFacebookF/></Link>
          <Link to={"/home"}><FaYoutube/></Link>
          <Link to={"/home"}><FaLinkedinIn/></Link>
          <Link to={"/home"}><FaInstagram/></Link>
      </div>
      <div className="contact-content">
        <h1 className="contact-header">CONTACT US</h1>
        <div className="contact-cards">
          <div className="contact-card">
            <h2 className="contact-card-title">WE'RE HERE</h2>
            <p className="contact-card-desc">Your Health, Our Priority.</p>
            <div className="contact-card-info">
              <div><i className="fas fa-phone"></i> +91 65-5760-8956</div>
              <div><i className="fas fa-envelope"></i> WeHospital13@gmail.com</div>
              <div><i className="fas fa-map-marker-alt"></i> 13 West Delhi-110023</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-img support"></div>
            <h3>CONTACT SUPPORT</h3>
            <p>Our support team is spread across the world to give you answers fast.</p>
            <button className="contact-card-btn">GET SUPPORT</button>
          </div>
          <div className="contact-card">
            <div className="contact-card-img sales"></div>
            <h3>CONTACT SALES</h3>
            <p>Get in touch with our sales team to see how we can work together.</p>
            <button className="contact-card-btn">TALK TO SALES</button>
          </div>
        </div>
        <div className="contact-form-section">
          <h2 className="contact-form-title">We Help Patients First</h2>
          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="contact-form-group">
                <label>Phone</label>
                <input type="text" placeholder="+91 12-5698-5364" required />
              </div>
            </div>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label>Email</label>
                <input type="email" placeholder="WeHospital13@gmail.com" required/>
              </div>
              <div className="contact-form-group">
                <label>Subject</label>
                <input type="text" placeholder="Need estimation for demo service" required/>
              </div>
            </div>
            <div className="contact-form-row">
              <div className="contact-form-group full-width">
                <label>Message</label>
                <textarea placeholder="Message" rows={3}></textarea>
              </div>
            </div>
            <button className="contact-send-btn" type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
