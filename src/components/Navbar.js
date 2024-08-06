import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaUsers, FaHandsHelping, FaFlagCheckered } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/*<Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>*/}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/events"
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <FaUsers style={{ marginBottom: "2px" }} /> Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/framework"
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <FaHandsHelping style={{ marginBottom: "2px" }} /> Workshop
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/community-contributors"
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <FaUsers style={{ marginBottom: "2px" }} /> Contributors
              </Nav.Link>
            </Nav.Item>

            {/*<Nav.Item>
              <Nav.Link
                as={Link}
                to="/closing"
                onClick={() => updateExpanded(false)}
                className="nav-link"
              >
                <FaFlagCheckered style={{ marginBottom: "2px" }} /> Closing
              </Nav.Link>
            </Nav.Item>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

