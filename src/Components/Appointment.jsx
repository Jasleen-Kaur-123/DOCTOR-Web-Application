import React, { useState } from 'react';
import '../Style/Appointment.css';

const slotsData = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [slots, setSlots] = useState(slotsData);
  const [booked, setBooked] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedSlot('');
    setBooked(false);
    // Simulate no slots for Sundays
    const date = new Date(e.target.value);
    if (date.getDay() === 0) setSlots([]);
    else setSlots(slotsData);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    setBooked(false);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (selectedSlot) setBooked(true);
  };

  return (
    <div className="appointment-main">
      <div className="appointment-header">
        <h1>Book a Doctor Appointment with WeHospital</h1>
        <div className="appointment-stats">
          <div className="appointment-stat">
            <span className="stat-number">+1M</span>
            <span className="stat-label">Patients</span>
          </div>
          <div className="appointment-stat">
            <span className="stat-number">+5M</span>
            <span className="stat-label">Trusted Visitors</span>
          </div>
        </div>
      </div>
      <div className="appointment-calendar-section">
        <div className="calendar-box">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            min={today}
            value={selectedDate}
            onChange={handleDateChange}
          />
          <div className="slots-section">
            <h3>Available Slots</h3>
            {slots.length === 0 ? (
              <div className="no-slots">Don't call, expert is busy.</div>
            ) : (
              <div className="slots-list">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    className={`slot-btn${selectedSlot === slot ? ' selected' : ''}`}
                    onClick={() => handleSlotClick(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="book-btn"
            onClick={handleBook}
            disabled={!selectedSlot || slots.length === 0}
          >
            Book Appointment
          </button>
          {booked && <div className="booked-msg">Appointment booked for {selectedDate} at {selectedSlot}!</div>}
        </div>
      </div>
      {/* New Section: Why Book With Us? */}
      <div className="appointment-why-section">
        <h2 className="appointment-why-title">Why Book With Us?</h2>
        <div className="appointment-why-cards">
          <div className="appointment-why-card">
            <div className="appointment-why-icon">🩺</div>
            <div className="appointment-why-label">Certified Doctors</div>
            <div className="appointment-why-desc">All our doctors are highly qualified and certified in their specialties.</div>
          </div>
          <div className="appointment-why-card">
            <div className="appointment-why-icon">📅</div>
            <div className="appointment-why-label">Easy Booking</div>
            <div className="appointment-why-desc">Book appointments in just a few clicks, anytime, anywhere.</div>
          </div>
          <div className="appointment-why-card">
            <div className="appointment-why-icon">🔒</div>
            <div className="appointment-why-label">Secure Data</div>
            <div className="appointment-why-desc">Your health data is encrypted and kept completely confidential.</div>
          </div>
          <div className="appointment-why-card">
            <div className="appointment-why-icon">⏰</div>
            <div className="appointment-why-label">24/7 Support</div>
            <div className="appointment-why-desc">Our support team is available round the clock for your needs.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
