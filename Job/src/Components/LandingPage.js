// Contains the hero section, featured jobs, and call-to-action buttons.
import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import SearchBar from "./SearchBar";

function LandingPage() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm); // Replace with API call
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-light py-5 text-center">
        <Container>
          <h1>Find Your Dream Job</h1>
          <p className="lead">Search among thousands of job opportunities.</p>
          <div className="d-flex justify-content-center mt-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </Container>
      </div>

      <Container fluid className="p-4">
      {/* Popular Categories */}
      <h3 className="mb-4">Popular Categories</h3>
      <Row className="g-4">
        {["IT", "Finance", "Healthcare", "Marketing"].map((category) => (
          <Col md={3} key={category}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                  Browse jobs in {category} and boost your career.
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Featured Jobs */}
      <h3 className="mt-5 mb-4">Featured Jobs</h3>
      <Row className="g-4">
        {[...Array(4)].map((_, idx) => (
          <Col md={6} key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>Software Engineer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Company Name | Location
                </Card.Subtitle>
                <Card.Text>
                  Work on exciting projects in a collaborative environment. Great
                  benefits and growth opportunities.
                </Card.Text>
                <Button variant="success">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      </Container>
      {/* Featured Jobs Section
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Jobs</h2>
        <Row>
          {[1, 2, 3].map((job) => (
            <Col md={4} key={job} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Software Engineer</Card.Title>
                  <Card.Text>
                    Location: Remote<br />
                    Salary: $80,000 - $100,000/year
                  </Card.Text>
                  <Button variant="warning" href={`/job/${job}`}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}
    </div>
  );
}

export default LandingPage;



// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button, Form, Spinner } from "react-bootstrap";
// import axios from "axios";

// const LandingPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [featuredJobs, setFeaturedJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState({ keyword: "", location: "" });

//   useEffect(() => {
//     // Fetch categories and featured jobs from the backend
//     const fetchData = async () => {
//       try {
//         const [categoriesRes, jobsRes] = await Promise.all([
//           axios.get("http://localhost:8080/api/categories"),
//           axios.get("http://localhost:8080/api/featured-jobs"),
//         ]);
//         setCategories(categoriesRes.data);
//         setFeaturedJobs(jobsRes.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching with:", search);
//     // Add API call or redirect logic here
//   };

//   return (
//     <Container fluid className="p-4">
//       {/* Hero Section */}
//       <div className="bg-primary text-white text-center p-5 mb-4 rounded">
//         <h1>Find Your Dream Job</h1>
//         <p>Explore thousands of jobs from top companies worldwide.</p>
//         <Form className="d-flex justify-content-center mt-4" onSubmit={handleSearch}>
//           <Form.Control
//             type="text"
//             placeholder="Job Title or Keyword"
//             className="me-2"
//             style={{ maxWidth: "300px" }}
//             value={search.keyword}
//             onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
//           />
//           <Form.Control
//             type="text"
//             placeholder="Location"
//             className="me-2"
//             style={{ maxWidth: "200px" }}
//             value={search.location}
//             onChange={(e) => setSearch({ ...search, location: e.target.value })}
//           />
//           <Button variant="success" type="submit">Search</Button>
//         </Form>
//       </div>

//       {/* Popular Categories */}
//       <h3 className="mb-4">Popular Categories</h3>
//       {loading ? (
//         <Spinner animation="border" />
//       ) : (
//         <Row className="g-4">
//           {categories.map((category) => (
//             <Col md={3} key={category.id}>
//               <Card className="text-center">
//                 <Card.Body>
//                   <Card.Title>{category.name}</Card.Title>
//                   <Card.Text>{category.description}</Card.Text>
//                   <Button variant="primary">Explore</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}

//       {/* Featured Jobs */}
//       <h3 className="mt-5 mb-4">Featured Jobs</h3>
//       {loading ? (
//         <Spinner animation="border" />
//       ) : (
//         <Row className="g-4">
//           {featuredJobs.map((job) => (
//             <Col md={6} key={job.id}>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>{job.title}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     {job.company} | {job.location}
//                   </Card.Subtitle>
//                   <Card.Text>{job.description}</Card.Text>
//                   <Button variant="success">Apply Now</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default Page;
