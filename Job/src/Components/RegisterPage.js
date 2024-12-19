import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("APPLICANT");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyname: "",
    jobtitle: "",
    // resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("role", role);
      if (role === "EMPLOYER") {
        data.append("companyname", formData.companyName);
        console.log(formData.companyname);
        try{
          const response = await axios.post("http://localhost:8080/api/employers",data, {headers: { "Content-Type": "application/json" },});
          navigate("/LoginPage");
          alert("Employer registered successfully");
        }
        catch(error){
          alert("Error please check!!");
        }
      }
      if (role === "APPLICANT") {
        data.append("jobtitle", formData.jobtitle);
        console.log(formData.jobtitle);
        try{
          const response = await axios.post("http://localhost:8080/api/users",data, {headers: { "Content-Type": "application/json" },});
          navigate("/LoginPage");
          alert("User registered successfully");
        }
        catch(error){
          alert("Error please check!!");
        }
        // if (formData.resume) {
        //   data.append("resume", formData.resume);
        // }
      }}

      // const response = await axios.post("http://localhost:8080/api/signup", data, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

    //   if (response.status === 201) {
    //     alert("Sign-up successful!");
    //     window.location.href = "/";
    //   }
    //  } 
    catch (error) {
       console.error("Error during sign-up:", error);
       alert("Sign-up failed. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} className="bg-white p-4 rounded shadow">
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            {/* Role Selection */}
            <Form.Group className="mb-3">
              <Form.Label>Sign up as:</Form.Label>
              <Form.Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="APPLICANT">Applicant</option>
                <option value="EMPLOYER">Employer</option>
              </Form.Select>
            </Form.Group>

            {/* Common Fields */}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a password"
                required
              />
            </Form.Group>

            {/* Conditional Fields */}
            {role === "EMPLOYER" && (
              <Form.Group className="mb-3">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                />
              </Form.Group>
            )}

            {role === "APPLICANT" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="jobtitle"
                    value={formData.jobtitle}
                    onChange={handleChange}
                    placeholder="Enter your desired job title"
                    required
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3">
                  <Form.Label>Upload Resume</Form.Label>
                  <Form.Control
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                </Form.Group> */}
              </>
            )}

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
