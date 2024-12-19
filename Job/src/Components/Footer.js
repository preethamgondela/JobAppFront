import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 JobPortal. All rights reserved.</p>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li><a href="/terms" className="text-warning text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-warning text-decoration-none">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-warning text-decoration-none" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-warning text-decoration-none" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" className="text-warning text-decoration-none" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
