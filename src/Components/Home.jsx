import React, { useState } from 'react';
import '../Style/Home.css';
import doctorHolder from '../Images/backdoc.webp';
import HomeDentist from '../Images/HomeDentist.jpg';
import HomeEnt from '../Images/HomeEnt.jpeg';
import HomeGyno from '../Images/HomeGyno.jpg';
import HomeCardio from '../Images/HomeCardio.jpg';
import HomePedia from '../Images/HomePediatric.jpg';
import HomeNephro from '../Images/HomeNephro.jpg';
import HomePath from '../Images/HomeHomeo.jpeg';
import HomeDerma from '../Images/HomeDerma.jpg';
import HomeNeuro from '../Images/HomeNeuro.jpg';
import HomeGas from '../Images/HomeGas.jpg';

const specialties = [
  { name: 'Dentist', img: HomeDentist, overview: 'Dental care, cleaning, and oral health treatments.', details: 'Dentists provide preventive and corrective dental care, including fillings, root canals, and oral hygiene guidance.' },
  { name: 'ENT Specialist', img: HomeEnt, overview: 'Ear, nose, and throat care for all ages.', details: 'ENT specialists treat sinus, throat, and ear conditions, allergies, and perform minor surgeries.' },
  { name: 'Gynecologist', img: HomeGyno, overview: "Women's health, pregnancy, and reproductive care.", details: 'Gynecologists handle pregnancy, menstrual issues, reproductive health, and preventive screenings.' },
  { name: 'Cardiologists', img: HomeCardio, overview: 'Heart health and cardiovascular care.', details: 'Cardiologists diagnose and treat heart diseases, hypertension, and provide cardiac checkups.' },
  { name: 'Pediatricians', img: HomePedia, overview: 'Child health and development specialists.', details: 'Pediatricians care for infants, children, and adolescents, including vaccinations and growth monitoring.' },
  { name: 'Nephrologists', img: HomeNephro, overview: 'Kidney health and related disorders.', details: 'Nephrologists manage kidney diseases, dialysis, and hypertension related to kidney issues.' },
  { name: 'Homoeopath', img: HomePath, overview: 'Natural remedies and holistic treatments.', details: 'Homoeopaths use natural substances to stimulate the body\'s healing processes for various conditions.' },
  { name: 'Dermatologist', img: HomeDerma, overview: 'Skin, hair, and nail care.', details: 'Dermatologists treat skin diseases, acne, allergies, and perform cosmetic procedures.' },
  { name: 'Neurologist', img: HomeNeuro, overview: 'Brain and nervous system care.', details: 'Neurologists diagnose and treat disorders like epilepsy, migraines, and neuropathies.' },
  { name: 'Gastroenterologist', img: HomeGas, overview: 'Digestive system and liver care.', details: 'Gastroenterologists manage digestive disorders, liver diseases, and perform endoscopies.' },
];

const emergencyNumber = '+91-9876543210'; // Example number

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [emergencyModal, setEmergencyModal] = useState(false);
  const [emergencyForm, setEmergencyForm] = useState({
    name: '',
    problem: '',
    phone: '',
    pincode: '',
  });

  const handleMoreQueries = (spec) => {
    setModalContent(spec);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const closeEmergencyModal = () => setEmergencyModal(false);

  const handleEmergencyChange = (e) => {
    const { name, value } = e.target;
    setEmergencyForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    // You can add logic here if needed
    setEmergencyModal(false);
  };

  return (
    <div className="home-main">
      <div className="home-hero-section">
        <div className="home-emergency-bar" onClick={() => setEmergencyModal(true)} style={{cursor:'pointer'}}>EMERGENCY</div>
        <div className="home-hero-content">
          <h1>WeHospital are committed<br />to providing top-notch <br />medical services under <br/>care of highly experienced <br/>doctors.</h1>
          <p className="home-hero-desc">
            WeHospital brings you world-class healthcare, combining cutting-edge treatment with the <br/>expertise of leading medical professionals.</p>
          <div className="home-hero-cards">
            <div className="home-hero-card">
              <div className="home-hero-card-icon">1M</div>
              <div className="home-hero-card-text">Serving 1 Million+ <br/>Satisfied Patients.</div>
            </div>
            <div className="home-hero-card">
              <div className="home-hero-card-icon">
                <span role="img" aria-label="flag">🇮🇳</span>
              </div>
              <div className="home-hero-card-text">India's First Advanced<br/>Medical Care.</div>
            </div>
          </div>
        </div>
        <div className="home-hero-image">
          <img src={doctorHolder} alt="Doctors" />
        </div>
      </div>
      <div className="home-specialties-section">
        <h2>Top-searched specialties</h2>
        <div className="home-specialties-list">
          {specialties.map((spec, idx) => (
            <div className="home-specialty-card" key={idx}>
              <div className="home-specialty-img-wrap">
                <img src={spec.img} alt={spec.name} />
              </div>
              <div className="home-specialty-label">{spec.name}</div>
              <div className="home-specialty-overview">{spec.overview}</div>
              <button className="home-specialty-btn" onClick={() => handleMoreQueries(spec)}>
                More Queries
              </button>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="home-modal-overlay" onClick={closeModal}>
          <div className="home-modal" onClick={e => e.stopPropagation()}>
            <button className="home-modal-close" onClick={closeModal}>&times;</button>
            <h2>{modalContent.name}</h2>
            <p>{modalContent.details}</p>
          </div>
        </div>
      )}
      {emergencyModal && (
        <div className="home-modal-overlay" onClick={closeEmergencyModal}>
          <div className="home-modal home-emergency-modal" onClick={e => e.stopPropagation()}>
            <button className="home-modal-close" onClick={closeEmergencyModal}>&times;</button>
            <h2>Emergency Contact Form</h2>
            <form className="home-emergency-form" onSubmit={handleEmergencySubmit}>
              <input name="name" type="text" placeholder="Name" value={emergencyForm.name} onChange={handleEmergencyChange} required />
              <input name="problem" type="text" placeholder="Problem" value={emergencyForm.problem} onChange={handleEmergencyChange} required />
              <input name="phone" type="text" placeholder="Phone Number" value={emergencyForm.phone} onChange={handleEmergencyChange} required />
              <input name="pincode" type="text" placeholder="Pincode" value={emergencyForm.pincode} onChange={handleEmergencyChange} required />
              <div className="home-emergency-btns">
                <a href={`tel:${emergencyNumber}`} className="home-emergency-btn call">Call us Now</a>
                <a href="https://maps.google.com/?q=hospital" target="_blank" rel="noopener noreferrer" className="home-emergency-btn track">Track our Location</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
