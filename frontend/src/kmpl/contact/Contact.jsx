import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "../components/Footer";
import Topbar from "../components/navbar/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    altPhone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({ phone: "", altPhone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" || name === "altPhone") {
      if (!/^\d*$/.test(value) || value.length > 10) return;
      setFormData({ ...formData, [name]: value });

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value.length > 0 && value.length < 10 ? "Phone number must be 10 digits." : "",
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (key !== "altPhone" && formData[key].trim() === "") {
        alert("All fields except Alternate Mobile Number are required.");
        return;
      }
    }

    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (formData.altPhone && formData.altPhone.length !== 10) {
      alert("Alternate phone number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7000/contactus", formData);
      alert(response.data.message);
      setFormData({ name: "", email: "", phone: "", altPhone: "", address: "", message: "" });
    } catch (error) {
      alert("Failed to send message.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Topbar />

      {/* Page Title */}
      <Container className="text-center py-5 mt-5">
        <h1 className="text-dark fw-bold">Contact Us</h1>
      </Container>

      {/* Contact Form Section */}
      <Container fluid className="contact-container my-5 p-4 shadow bg-white rounded">
        <Row className="w-100 g-4"> 
          {/* Image Section (Hidden on Small Screens) */}
          <Col lg={6} className="d-none d-lg-flex align-items-center">
            <img src="./src/assets/images/custom.svg" alt="Contact Us" className="w-100 h-100 rounded shadow" />
          </Col>

          {/* Form Section */}
          <Col xs={12} md={12} lg={6} className="p-3">
            <Form onSubmit={handleSubmit} className="p-3">
              <Row className="mb-3">
                <Col xs={12} md={6} className="mb-3 mb-md-0">
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={12} md={6} className="mb-3 mb-md-0">
                  <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Mobile Number" required />
                  </InputGroup>
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </Col>

                <Col xs={12} md={6}>
                  <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control type="text" name="altPhone" value={formData.altPhone} onChange={handleChange} placeholder="Alternate Mobile (Optional)" />
                  </InputGroup>
                  {errors.altPhone && <small className="text-danger">{errors.altPhone}</small>}
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} rows={2} placeholder="Enter Your Address" required />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Enter Message" required />
                </Col>
              </Row>

              <div className="text-center">
                <Button variant="success" type="submit" className="px-5 fw-bold ">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ContactUs;
