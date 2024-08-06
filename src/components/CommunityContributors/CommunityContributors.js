import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./CommunityContributors.css";
import communityLead from "./communityLead.jpg"; // Add your community lead image
import portrait1 from "./lead1.jpg"; // Add your portrait images
import portrait2 from "./lead2.jpg"; // Add your portrait images
import portrait3 from "./lead3.jpg"; // Add your new portrait image
import smallImage1 from "./soundariya.jpg"; // Add your small images
import smallImage2 from "./vishal.jpg"; // Add your small images
import smallImage3 from "./vishagan.jpg"; // Add your small images

function CommunityContributors() {
  const [showMoreTechnical, setShowMoreTechnical] = useState(false);
  const [showMoreSocial, setShowMoreSocial] = useState(false);
  const [showMoreEvent, setShowMoreEvent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMoreTechnical(true), 1000); // 1-second delay for technical team
    const timer2 = setTimeout(() => setShowMoreSocial(true), 2000); // 2-second delay for social media team
    const timer3 = setTimeout(() => setShowMoreEvent(true), 3000); // 3-second delay for event team

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section>
      <Container fluid className="community-contributors-section" id="community-contributors">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="community-contributors-description text-center">
              <h1 style={{ fontSize: "2.6em", color: "white", marginTop: "40px" }}>
                Community <span className="purple">Lead</span>
              </h1>
            </Col>
          </Row>
          <Row className="text-center align-items-center community-dark-section team-section">
            <Col md={6} className="community-lead-text">
              <h3 style={{ color: "white" }}>Alice Johnson</h3>
              <p style={{ color: "white" }}>Head of Community Engagement</p>
              <p style={{ color: "white" }}>
                Alice has over 10 years of experience in community management and has been pivotal in growing and nurturing our vibrant community.
              </p>
              <p style={{ color: "white" }}>
                Her strategic approach and passion for community building have driven numerous successful initiatives, making our community more connected and engaged.
              </p>
              <p style={{ color: "white" }}>
                In her free time, Alice enjoys hiking, reading, and exploring new cultures.
              </p>
            </Col>
            <Col md={6}>
              <img src={communityLead} alt="Community Lead" className="community-lead-portrait-right" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="community-contributors-description text-center">
              <h1 style={{ fontSize: "2.6em", color: "white" }}>
                Community <span className="purple">Contributors</span>
              </h1>
            </Col>
          </Row>
          <Row className="community-dark-section team-section">
            <Col md={12} className="community-contributors-description text-center">
              <h2 style={{ fontSize: "2em", color: "white", marginTop: "40px" }}>
                Our Dedicated Team
              </h2>
            </Col>
            <Col md={4} className="contributor-item">
              <img src={portrait1} alt="lead 1" className="contributor-portrait" />
              <h3 style={{ color: "white" }}>John Doe</h3>
              <p style={{ color: "white" }}>Senior Cloud Architect</p>
            </Col>
            <Col md={4} className="contributor-item">
              <img src={portrait2} alt="lead 2" className="contributor-portrait" />
              <h3 style={{ color: "white" }}>Jane Smith</h3>
              <p style={{ color: "white" }}>Lead DevOps Engineer</p>
            </Col>
            <Col md={4} className="contributor-item">
              <img src={portrait3} alt="lead 3" className="contributor-portrait" />
              <h3 style={{ color: "white" }}>Emily Davis</h3>
              <p style={{ color: "white" }}>Cloud Specialist</p>
            </Col>
          </Row>
          <Row className="community-dark-section team-section">
            <Col md={12} className="community-contributors-description text-center">
              <h2 style={{ fontSize: "2em", color: "white", marginTop: "40px" }}>
                Technical <span className="purple">Team</span>
              </h2>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage1} alt="small 1" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Tech Member 1</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage2} alt="small 2" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Tech Member 2</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage3} alt="small 3" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Tech Member 3</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            {showMoreTechnical && (
              <>
                <Col md={4} className="small-contributor-item slide-in">
                  <img src={smallImage1} alt="small 4" className="small-contributor-portrait" />
                  <h4 style={{ color: "white" }}>Tech Member 4</h4>
                  <p style={{ color: "white" }}>Role</p>
                </Col>
                <Col md={4} className="small-contributor-item slide-in">
                  <img src={smallImage2} alt="small 5" className="small-contributor-portrait" />
                  <h4 style={{ color: "white" }}>Tech Member 5</h4>
                  <p style={{ color: "white" }}>Role</p>
                </Col>
              </>
            )}
          </Row>
          <Row className="community-dark-section team-section">
            <Col md={12} className="community-contributors-description text-center">
              <h2 style={{ fontSize: "2em", color: "white", marginTop: "40px" }}>
                Social Media <span className="purple">Team</span>
              </h2>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage1} alt="small 1" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Social Member 1</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage2} alt="small 2" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Social Member 2</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage3} alt="small 3" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Social Member 3</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            {showMoreSocial && (
              <>
                <Col md={4} className="small-contributor-item slide-in">
                  <img src={smallImage1} alt="small 4" className="small-contributor-portrait" />
                  <h4 style={{ color: "white" }}>Social Member 4</h4>
                  <p style={{ color: "white" }}>Role</p>
                </Col>
                <Col md={4} className="small-contributor-item slide-in">
                  <img src={smallImage2} alt="small 5" className="small-contributor-portrait" />
                  <h4 style={{ color: "white" }}>Social Member 5</h4>
                  <p style={{ color: "white" }}>Role</p>
                </Col>
              </>
            )}
          </Row>
          <Row className="community-dark-section team-section">
            <Col md={12} className="community-contributors-description text-center">
              <h2 style={{ fontSize: "2em", color: "white", marginTop: "40px" }}>
                Event Management <span className="purple">Team</span>
              </h2>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage1} alt="small 1" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Event Member 1</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage2} alt="small 2" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Event Member 2</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            <Col md={4} className="small-contributor-item">
              <img src={smallImage3} alt="small 3" className="small-contributor-portrait" />
              <h4 style={{ color: "white" }}>Event Member 3</h4>
              <p style={{ color: "white" }}>Role</p>
            </Col>
            {showMoreEvent && (
              <>
                <Col md={4} className="small-contributor-item slide-in">
                  <img src={smallImage1} alt="small 4" className="small-contributor-portrait" />
                  <h4 style={{ color: "white" }}>Event Member 4</h4>
                  <p style={{ color: "white" }}>Role</p>
                </Col>
                <Col md={4} className="small-contributor-item slide-in">
                  <img src={smallImage2} alt="small 5" className="small-contributor-portrait" />
                  <h4 style={{ color: "white" }}>Event Member 5</h4>
                  <p style={{ color: "white" }}>Role</p>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default CommunityContributors;
