import React from 'react';
import './Framework.css';
import upcomingWorkshopImage from './workshop1.jpg';
import completedWorkshopImage2 from './workshop2.jpg'; 
import completedWorkshopImage3 from './workshop3.jpg'; 

const Framework = () => {
  return (
    <section id="workshops">
      <div className="workshops-section">
        <h1 className="workshops-title">
          <span className="purple">Workshops</span>
        </h1>
        <div className="workshop-cards">
          <div className="workshop-card">
            <img src={upcomingWorkshopImage} alt="Upcoming Workshop" className="workshop-image" />
            <div className="workshop-details">
              <h3 className="workshop-name">Upcoming Workshop</h3>
              <p className="workshop-description">
                Brief description of the upcoming workshop. This section provides an overview of what attendees can expect to learn.
              </p>
              <p className="workshop-date">Date: 25th August 2024</p>
              <p className="workshop-time">Time: 10:00 AM - 4:00 PM</p>
              <a href="#register" className="workshop-register-button">Register Now</a>
            </div>
          </div>
          <div className="workshop-card">
            <img src={completedWorkshopImage2} alt="Completed Workshop 1" className="workshop-image" />
            <div className="workshop-details">
              <h3 className="workshop-name">Completed Workshop</h3>
              <p className="workshop-description">
                Brief description of the completed workshop. Highlights of what attendees learned.
              </p>
              <p className="workshop-date">Date: 15th July 2024</p>
            </div>
          </div>
          <div className="workshop-card">
            <img src={completedWorkshopImage3} alt="Completed Workshop 2" className="workshop-image" />
            <div className="workshop-details">
              <h3 className="workshop-name">Completed Workshop</h3>
              <p className="workshop-description">
                Brief description of the completed workshop. Highlights of what attendees learned.
              </p>
              <p className="workshop-date">Date: 10th June 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
