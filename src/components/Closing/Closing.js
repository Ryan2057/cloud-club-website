import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import karthiSirImage from "./karthi-sir.png";

function Closing() {
  return (
    <Container fluid className="closing-section" id="closing">
      <Container>
        <Row>
          <Col md={12} className="closing-description text-center">
            <h1 style={{ fontSize: "2.6em" }}>
              Tribute to <span className="purple">Karthi Sir</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="closing-image text-center">
            <img src={karthiSirImage} alt="Karthi Sir" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="closing-tribute text-center">
            <p>
              A heartfelt tribute to Karthi Sir, whose guidance and mentorship have been instrumental in the success of our club.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Closing;
