import React from 'react';
import '../Style/About.css';

const feedbacks = [
  {
    name: 'Amit Sharma',
    text: 'The doctors and staff are very professional and caring. My family has trusted this hospital for years!'
  },
  {
    name: 'Priya Verma',
    text: 'Clean facilities, quick service, and expert doctors. Highly recommended for all healthcare needs.'
  },
  {
    name: 'Rahul Singh',
    text: 'I had a great experience during my treatment. The hospital truly cares for its patients.'
  }
];

const About = () => {
  return (
    <div className="about-main">
      <section className="about-history-section">
        <h1>About Our We Hospital</h1>
        <h2>40 Years of Excellence</h2>
        <p>
          Established 40 years ago, our hospital has been a pillar of trust and care in the community. Over the decades, we have grown into a multi-specialty healthcare institution, offering world-class medical services and compassionate care to thousands of patients. Our journey began with a vision to provide accessible and affordable healthcare to all, and today, we continue to uphold that legacy with state-of-the-art facilities, experienced doctors, and a patient-first approach.
        </p>
        <p>
          Our hospital is equipped with modern technology, a dedicated emergency department, and a team of highly qualified professionals. We are committed to continuous improvement and innovation in healthcare, ensuring the best outcomes for our patients.
        </p>
      </section>
      <section className="about-feedback-section">
        <h2>What Our Patients Say</h2>
        <div className="about-feedback-list">
          {feedbacks.map((fb, idx) => (
            <div className="about-feedback-card" key={idx}>
              <div className="about-feedback-text">"{fb.text}"</div>
              <div className="about-feedback-name">- {fb.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
