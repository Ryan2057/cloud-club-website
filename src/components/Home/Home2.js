import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineProject, AiOutlineUsergroupAdd, AiOutlineSafetyCertificate, AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";
import ourStats1 from './our_stats1.jpg';
import ourStats2 from './our_stats2.jpg';
import './Home2.css';

const stats = [
  {
    icon: "☁️",
    number: "310+",
    description: "hours of cloud training and mastering DevOps.",
  },
  {
    icon: <AiOutlineProject />,
    number: "50+",
    description: "industrial use cases explored.",
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    number: "500+",
    description: "students empowered through AWS Academy.",
  },
  {
    icon: <AiOutlineSafetyCertificate />,
    number: "250+",
    description: "students achieved certification.",
  },
  {
    icon: <AiOutlineCalendar />,
    number: "20+",
    description: "tech events, including hackathons, workshops, and industry meetups.",
  },
  {
    icon: <AiOutlineTeam />,
    number: "30+",
    description: "expert-led talks on cloud and DevOps.",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description text-center">
            <h1 style={{ fontSize: "3.6em"}}>
              About <span className="purple">Us</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="home-about-description" style={{ textAlign: "justify" }}>
            <p>
              Step into the <span className="purple">AWS Cloud Club</span> at St. Joseph's - Your Launchpad to the stars of <span className="purple">Cloud Computing</span>! This is the go-to spot for <span className="purple">cloud lovers</span> where every step leads to exciting <span className="purple">breakthroughs</span> and chances to shine.
            </p>
            <p>
              Propel your career to new heights with real-world projects, special events, and a community buzzing with <span className="purple">energy</span> and ideas. Leave the ordinary behind and step into a world where you can achieve anything. Get set for an amazing <span className="purple">cloud adventure</span> - your journey to the top begins right here!
            </p>
            <p>
              We conduct ourselves with the utmost <span className="purple">integrity</span> in all our dealings, ensuring that our students receive the highest quality <span className="purple">knowledge</span> and <span className="purple">education</span>.
            </p>
          </Col>
        </Row>
        <Row className="home-about-stats-section">
          <Col md={12} className="text-center mb-4">
            <h1 style={{ fontSize: "2.5em" }}>
              <span style={{ color: "#FFFFFF" }}>Our</span> <span className="purple">Stats</span>
            </h1>
            <p className="stats-intro" style={{ textAlign: "justify", marginLeft: "150px" , marginTop: "50px"}}>
              At AWS Cloud Club St. Joseph's Group of Institutions, we're more than a community, we're a dynamic force of talent, innovation, and achievement. With an unyielding focus on empowering students to thrive in <span className="purple">cloud computing</span>.
            </p>
          </Col>
          <Col md={6}>
            <Row>
              {stats.map((stat, index) => (
                <Col key={index} md={6} className="home-about-stats text-center" style={{ marginBottom: "20px" }}>
                  <div>
                    <div className="stat-icon">
                      {stat.icon}
                    </div>
                    <h2 className="stat-number">
                      {stat.number}
                    </h2>
                    <p className="stat-description">{stat.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={6} className="text-center">
            <img src={ourStats1} alt="Our Stats 1" className="stats-image" />
            <img src={ourStats2} alt="Our Stats 2" className="stats-image" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
