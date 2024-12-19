import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data (e.g., token, user info) from localStorage, sessionStorage, or cookies
    localStorage.removeItem('authToken'); // Example of removing token from localStorage
    sessionStorage.removeItem('authToken'); // Example for sessionStorage

    // Optionally, you can clear cookies too
    // document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirect to the login page after logging out
    navigate('/LoginPage');
  };


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
            <Button variant="danger" onClick={handleLogout} className="ms-2">Logout</Button>
            <Button variant="warning" as={Link} to="/RegisterPage">Register</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


// import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import SearchBar from './SearchBar'; // Assuming you have a SearchBar component

// const Header = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   // Check if the user is authenticated on page load
//   useEffect(() => {
//     const authToken = localStorage.getItem('authToken');
//     console.log("authToken from localStorage:", authToken); // Debugging line

//     if (authToken) {
//       setIsAuthenticated(true); // User is authenticated
//     } else {
//       setIsAuthenticated(false); // User is not authenticated
//     }
//   }, []);

//   const handleLogout = () => {
//     // Clear session data (token, user info)
//     localStorage.removeItem('authToken'); // Removing token from localStorage
//     sessionStorage.removeItem('authToken'); // Removing token from sessionStorage
//     localStorage.removeItem('userInfo'); // Removing user info from localStorage (if stored)

//     // Optionally, you can clear cookies as well if necessary:
//     // document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

//     // Reset the authentication state
//     setIsAuthenticated(false);

//     // Redirect to the login page after logout
//     navigate('/LoginPage');
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">JobPortal</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto">
//             <Link className="nav-link active" aria-current="page" to="/LandingPage">Home</Link>
//             <Link className="nav-link active" aria-current="page" to="/JobListingsPage">Find Jobs</Link>
//             <Link className="nav-link active" aria-current="page" to="/ApplicantDashboard">ApplicantDashboard</Link>
//           </Nav>
//           <SearchBar />
//           <div className="d-flex ms-3">
//             {/* Conditionally render Login/Register or Logout button */}
//             {!isAuthenticated ? (
//               <>
//                 <Button variant="outline-light" as={Link} to="/LoginPage" className="me-2">Login</Button>
//                 <Button variant="warning" as={Link} to="/RegisterPage">Register</Button>
//               </>
//             ) : (
//               <Button variant="danger" onClick={handleLogout} className="ms-2">Logout</Button>
//             )}
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
