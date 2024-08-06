import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaUsers, FaProjectDiagram, FaCalendarAlt } from "react-icons/fa"; // Import icons
import "./About.css"; 

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="about-description text-center">
              <h1 style={{ fontSize: "2.6em" }}>
                About <span className="purple">Us</span>
              </h1>
              <p>
                The AWS Cloud Club at St. Joseph's is dedicated to providing opportunities for students to explore and excel in cloud computing. We host events, workshops, and projects that help students gain practical experience and connect with industry professionals.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="about-stat text-center">
              <FaUsers className="about-stat-icon" />
              <h2>Over 500 members</h2>
            </Col>
            <Col md={4} className="about-stat text-center">
              <FaProjectDiagram className="about-stat-icon" />
              <h2>10+ successful projects</h2>
            </Col>
            <Col md={4} className="about-stat text-center">
              <FaCalendarAlt className="about-stat-icon" />
              <h2>5 annual events</h2>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default About;
