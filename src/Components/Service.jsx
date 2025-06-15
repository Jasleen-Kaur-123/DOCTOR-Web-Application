import React from 'react';
import '../Style/Service.css';
import Serviceone from '../Images/Serviceone.jpg';
import Servicetwo from '../Images/Servicetwo.jpg';
import Servicethree from '../Images/Servicethree.jpg';
import Servicefour from '../Images/Servicefour.jpg';
import { FaHome } from 'react-icons/fa';

const services = [
  {
    img: Serviceone,
    title: 'General Consultation',
    desc: 'Comprehensive health checkups and expert medical advice for all age groups.',
    bullets: [
      'Personalized health plans',
      'Preventive care guidance',
    ],
  },
  {
    img: Servicetwo,
    title: 'Specialist Doctors',
    desc: 'Access to top specialists in cardiology, orthopedics, pediatrics, and more.',
    bullets: [
      'Expert second opinions',
      'Wide range of specialties',
    ],
  },
  {
    img: Servicethree,
    title: 'Diagnostics & Lab',
    desc: 'Advanced diagnostic services and lab tests with quick and accurate results.',
    bullets: [
      'Modern equipment',
      'Fast and reliable reports',
    ],
  },
  {
    img: Servicefour,
    title: 'Emergency Care',
    desc: '24/7 emergency services with highly trained staff and modern facilities.',
    bullets: [
      'Immediate response',
      'Critical care support',
    ],
  },
];

const ServiceReachOutForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    message: '',
    time: '',
    location: '',
  });
  const [modalOpen, setModalOpen] = React.useState(false);
  const doctorOptions = [
    'General Consultation',
    'Specialist Doctors',
    'Diagnostics & Lab',
    'Emergency Care',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <div className='service-modal-heading'>Connect with WeHospital</div>
      <form className="service-reach-form" onSubmit={handleSubmit}>
        <div className="service-reach-row">
          <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="phone" type="text" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="service-reach-row">
          <input name="email" type="email" placeholder="Email ID" value={form.email} onChange={handleChange} required />
          <select name="doctor" value={form.doctor} onChange={handleChange} required>
            <option value="">Looking for ?</option>
            {doctorOptions.map((doc, idx) => (
              <option value={doc} key={idx}>{doc}</option>
            ))}
          </select>
        </div>
        <div className="service-reach-row">
          <input name="time" type="time" value={form.time} onChange={handleChange} required />
          <input name="location" type="text" placeholder="Location" value={form.location} onChange={handleChange} required />
        </div>
        <div className="service-reach-row">
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required rows={3} />
        </div>
        <button className="service-reach-submit" type="submit">Submit</button>
      </form>
      {modalOpen && (
        <div className="service-reach-modal-overlay" onClick={closeModal}>
          <div className="service-reach-modal" onClick={e => e.stopPropagation()}>
            <button className="service-reach-modal-close" onClick={closeModal}>&times;</button>
            <h2>Thank you for submitting the form!</h2>
            <p>We will reach out to you.</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Service = () => {
  return (
    <div className="service-main">
      <h1 className="service-header">Dedicated Home Service Experts</h1>
      <div className="service-list">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={service.img} alt={service.title} className="service-img" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-desc">{service.desc}</p>
            <ul className="service-bullets">
              {service.bullets.map((bullet, bidx) => (
                <li key={bidx}>{bullet}</li>
              ))}
            </ul>
            <div className="service-card-btns">
              <button className="service-btn call-btn">Call Now</button>
              <button className="service-btn book-btn">Book your slot</button>
            </div>
          </div>
        ))}
      </div>
      <div className="service-homevisit-section">
        <div className="service-homevisit-icon">
          <FaHome size={48} color="#1e90ff" />
        </div>
        <div className="service-homevisit-content">
          <h2>We Also Visit at Home</h2>
          <p>
            For your convenience and comfort, our doctors and healthcare professionals are available for home visits. Get quality medical care at your doorstep—just book an appointment and we'll come to you!
          </p>
        </div>
      </div>
      <div className='service-reach-out'>
        <ServiceReachOutForm />
      </div>
    </div>
  );
};

export default Service;
