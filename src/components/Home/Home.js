import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
//import Type from "./Type";
import "./Home.css"; // Import CSS for additional styles if needed

function Home() {
  const [isCloudMoving, setIsCloudMoving] = useState(true);

  // Function to toggle cloud movement
  const toggleCloudMovement = () => {
    setIsCloudMoving((prev) => !prev);
  };

  // Effect to start and stop cloud movement on component mount and unmount
  useEffect(() => {
    const interval = setInterval(toggleCloudMovement, 1000); // Toggle every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col md={7} className="home-header text-center">
              <h1 style={{ paddingBottom: 350 }} className="heading">
                <span className="aws-cloud-club" style={{ fontWeight: 'bold', color: '#9754CB' }}>AWS CLOUD CLUB</span>{" "}
                <span className="st-josephs-institution">St.JOSEPH'S GROUP OF INSTITUTIONS</span>
                <span className="wave" role="img" aria-labelledby="wave">
                  ☁️
                </span>
              </h1>
              <p style={{ marginBottom: 100 }}></p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
