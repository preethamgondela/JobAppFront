import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { FaUserCircle, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import "./ApplicantDashboard.css";

const ApplicantDashboard = () => {
  const [profile, setProfile] = useState({});
  const [jobRecommendations, setJobRecommendations] = useState([]);
  const [applicationStatus, setApplicationStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get("http://localhost:8080/api/profile");
        const jobResponse = await axios.get("http://localhost:8080/api/jobs");
        const statusResponse = await axios.get("http://localhost:8080/api/applications");

        setProfile(profileResponse.data);
        setJobRecommendations(jobResponse.data);
        setApplicationStatus(statusResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <Container fluid className="dashboard-container">
      <Row className="mt-4">
        <Col md={4}>
          <Card className="profile-card">
            <Card.Body>
              <div className="text-center">
                <FaUserCircle size={100} className="text-primary mb-3" />
                <h4>{profile.name}</h4>
                <p>{profile.email}</p>
                <Button variant="primary" className="mt-3">
                  Edit Profile
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="recommendations-card">
            <Card.Body>
              <h4 className="mb-4">Recommended Jobs</h4>
              {jobRecommendations.length > 0 ? (
                jobRecommendations.map((job, index) => (
                  <div key={index} className="job-listing mb-3">
                    <Row>
                      <Col>
                        <h5>{job.title}</h5>
                        <p>{job.company}</p>
                      </Col>
                      <Col className="text-end">
                        <Button variant="success">Apply</Button>
                      </Col>
                    </Row>
                  </div>
                ))
              ) : (
                <p>No job recommendations available at the moment.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="status-card">
            <Card.Body>
              <h4>Application Status</h4>
              {applicationStatus.length > 0 ? (
                applicationStatus.map((status, index) => (
                  <div key={index} className="status-listing mb-3">
                    <Row>
                      <Col>
                        <h5>{status.jobTitle}</h5>
                        <p>{status.status}</p>
                      </Col>
                      <Col className="text-end">
                        {status.status === "Accepted" && (
                          <FaCheckCircle size={24} className="text-success" />
                        )}
                      </Col>
                    </Row>
                  </div>
                ))
              ) : (
                <p>No applications yet.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ApplicantDashboard;
