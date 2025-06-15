import React from 'react';
import '../Style/Footer.css';
import Logo from '../Images/WebisteLogo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-map-section">
        <div className="footer-logo-block">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-title">WE HOSPITAL<br />DELHI</div>
        </div>
        <div className="footer-socials">
          <Link to={"/home"}><FaFacebookF/></Link>
          <Link to={"/home"}><FaYoutube/></Link>
          <Link to={"/home"}><FaLinkedinIn/></Link>
          <Link to={"/home"}><FaInstagram/></Link>
        </div>
        <div className="footer-map">
          <iframe
            title="Mall Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.90948303684!2d76.90712399453126!3d28.52754900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f427d4c5fb%3A0x582d47bbf4970bc1!2sMax%20Super%20Speciality%20Hospital%2C%20Saket%20(Max%20Saket)!5e0!3m2!1sen!2sin!4v1749925097947!5m2!1sen!2sin" 
            width="260" 
            height="160"  
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </div>
      <div className="footer-content-section">
        <div className="footer-col">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/appointment"}>Appointment</Link></li>
            <li><Link to={"/service"}>Services</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>WE HOSPITAL REWARDS</h4>
          <ul>
            <li><Link to={"/home"}>We Hospital 24*7  – Terms & Conditions</Link></li>
            <li><Link to={"/home"}>We Hospital 24*7 – Privacy Policy</Link></li>
            <li><Link to={"/home"}>We Hospital 24*7 – Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>CONTACT INFORMATION</h4>
          <ul>
            <li>WEST DELHI, DELHI – 110023</li>
            <li>Call us: +91 65-5698-5240</li>
            <li>10:00 AM – 11:00 PM</li>
            <li>WeHospital13@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
