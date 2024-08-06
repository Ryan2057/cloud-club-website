import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Events.css";
import eventImage1 from "./event1.jpg";
import eventImage2 from "./event2.jpg";
import eventImage3 from "./event3.jpg";

function Events() {
  return (
    <section>
      <Container fluid className="events-section" id="events">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="events-description text-center">
              <h1 style={{ fontSize: "2.6em", color: "white" }}>
                Our <span className="purple">Events</span>
              </h1>
              <p style={{ color: "white" }}>
                Highlights of our key events and activities at AWS Cloud Club.
              </p>
            </Col>
          </Row>
          <Row className="timeline">
            <Col md={12} className="event-box">
              <Row>
                <Col md={2} className="event-date">
                  <div className="date-circle">01/01/2024</div>
                </Col>
                <Col md={5} className="event-image-container">
                  <img src={eventImage1} alt="Event 1" className="event-image" />
                </Col>
                <Col md={5} className="event-details">
                  <h2 className="purple">CC Day</h2>
                  <p style={{ color: "white" }}>
                    A day dedicated to cloud computing innovations and collaborations. 
                    This event will feature keynote speakers, panel discussions, 
                    and hands-on workshops covering the latest trends and technologies in the cloud computing industry.
                  </p>
                  <div className="event-social-links">
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={12} className="event-box">
              <Row>
                <Col md={{ span: 5, order: 1 }} className="event-details">
                  <h2 className="purple">Hack a Cloud</h2>
                  <p style={{ color: "white" }}>
                    An exciting hackathon focused on cloud-based solutions. Participants 
                    will have 24 hours to develop innovative projects using various cloud services, 
                    with mentorship and guidance from industry experts.
                  </p>
                  <div className="event-social-links">
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                  </div>
                </Col>
                <Col md={5} className="event-image-container">
                  <img src={eventImage2} alt="Event 2" className="event-image" />
                </Col>
                <Col md={2} className="event-date">
                  <div className="date-circle">15/02/2024</div>
                </Col>
              </Row>
            </Col>
            <Col md={12} className="event-box">
              <Row>
                <Col md={2} className="event-date">
                  <div className="date-circle">10/03/2024</div>
                </Col>
                <Col md={5} className="event-image-container">
                  <img src={eventImage3} alt="Event 3" className="event-image" />
                </Col>
                <Col md={5} className="event-details">
                  <h2 className="purple">Workshops</h2>
                  <p style={{ color: "white" }}>
                    Hands-on workshops to deepen your cloud computing skills. These workshops 
                    will cover a range of topics, from cloud architecture and security to machine 
                    learning and data analytics, providing practical experience and insights.
                  </p>
                  <div className="event-social-links">
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Events;
