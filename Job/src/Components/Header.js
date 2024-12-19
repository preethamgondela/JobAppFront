import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">JobPortal</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link active" aria-current="page" to="/LandingPage">Home</Link>
            <Link className="nav-link active" aria-current="page" to="/JobListingsPage">Find Jobs</Link>
            <Link className="nav-link active" aria-current="page" to="/ApplicantDashboard">ApplicantDashboard</Link>
        
          </Nav>
          <SearchBar />
          <div className="d-flex ms-3">
            <Button variant="outline-light" as={Link} to="/LoginPage" className="me-2">Login</Button>
            <Button variant="warning" as={Link} to="/RegisterPage">Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
