/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomCarousel from '../components/customcarousel/CustomCarousel';
import Footer from '../components/Footer';
import Topbar from '../components/navbar/Navbar';
import ImageGallery from './Motino';
import { FaBuilding, FaStar, FaBed } from "react-icons/fa6";
import { FaHome, FaCar, FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidCctv } from "react-icons/bi";

const Home = () => {
  const clipart = [
    { title: "Apartments", icon: FaBuilding, color: "text-primary", desc: "Spacious apartments in prime locations with modern amenities and security." },
    { title: "Row Houses", icon: FaHome, color: "text-success", desc: "Beautifully designed row houses with private space and community living." },
    { title: "Premium Living", icon: FaStar, color: "text-warning", desc: "Luxury residences with exclusive amenities and high-end finishes." },
  ];

  const properties = [
    { type: "Apartment", price: "₹20,00,000", city: "Perungudi, Chennai", bhk: "2 BHK", image: "./src/assets/images/apart/apartment/8.webp", details: ["✅ Gated Community", "✅ 24/7 Security", "✅ Power Backup"] },
    { type: "Row House", price: "₹25,00,000", city: "Vidhana Soudha, Bengaluru", bhk: "3 BHK", image: "./src/assets/images/apart/rowhouse/images (1).jpeg", details: ["✅ Private Parking", "✅ Spacious Garden", "✅ Smart Home Features"] },
    { type: "Apartment", price: "₹18,00,000", city: "Singanallur, Coimbatore", bhk: "1 BHK", image: "./src/assets/images/apart/apartment/6.webp", details: ["✅ High-Speed WiFi", "✅ Community Hall", "✅ Swimming Pool"] },
    { type: "Apartment", price: "₹30,00,000", city: "Shamshabad, Hyderabad", bhk: "3 BHK", image: "./src/assets/images/apart/apartment/5.webp", details: ["✅ Prime Location", "✅ Kids Play Area", "✅ 24/7 Water Supply"] },
    { type: "Row House", price: "₹22,50,000", city: "ISKCON Temple, Bengaluru", bhk: "2 BHK", image: "./src/assets/images/apart/rowhouse/images.jpeg", details: ["✅ Covered Car Parking", "✅ Private Terrace", "✅ CCTV Surveillance"] },
    { type: "Apartment", price: "₹27,00,000", city: "Film City, Hyderabad", bhk: "3 BHK", image: "./src/assets/images/apart/apartment/4.webp", details: ["✅ Fitness Center", "✅ Jogging Track", "✅ Indoor Games"] }
  ];

  const [visibleDetails, setVisibleDetails] = useState({});

  const toggleDetails = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Topbar />

      {/* Hero Section */}
      <Container fluid className="position-relative p-0">
        <div className="position-relative">
          <img src="./src/assets/images/homebg.svg" alt="House" className="w-100" style={{ height: "100vh", objectFit: "cover" }} />
          <div className="position-absolute top-50 start-0 translate-middle-y text-white p-4" style={{ left: "5%", maxWidth: "90%" }}>
            <h1 className="fw-bold display-5">
              We Make Your Real Estate <br /> <span className="text-warning">"Dreams Happen"</span>
            </h1>
            <p className="fs-5">
              "Buying real estate is not the best way, the quickest way, <br />
              the safest way, but the only way to become wealthy."
            </p>
            <Button
              className="btn-warning text-dark fw-bold px-4 py-2 rounded-pill"
              onClick={() => document.getElementById("project-list").scrollIntoView({ behavior: "smooth" })}
            >
              Explore Now
            </Button>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <Container fluid className="bg-light py-5 text-center">
        <h1 className="mb-4">Find Your Dream Home with KMPL-GRAND</h1>
        <Row className="justify-content-center">
          {clipart.map(({ title, icon:Icon, color, desc }, idx) => (
            <Col key={idx} md={4} sm={6} xs={12} className="d-flex justify-content-center mb-4">
              <Card className="text-center p-4 shadow-lg" style={{ width: "18rem", transition: "transform 0.3s ease-in-out" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div className="d-flex justify-content-center mb-3">
                  <Icon size={60} className={color} />
                </div>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Image Gallery Section */}
      <Container className="my-5">
        <h1 className="text-center">Gallery</h1>
        <ImageGallery />
      </Container>

      {/* Properties Section */}
      <Container className="my-5" id="project-list">
        <h1 className="text-center">Projects Across South India</h1>
        <Row className="mt-5">
          {properties.map((property, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <Card className="text-center shadow-lg position-relative p-3" style={{ transition: "transform 0.3s ease-in-out" }}>
                <Card.Img variant="top" src={property.image} style={{ height: "200px", objectFit: "cover" }} />
                <Badge bg="dark" className="position-absolute top-0 start-0 m-2 px-3 py-1">{property.type}</Badge>
                <Card.Body>
                  <Card.Title><b>{property.price}</b></Card.Title>
                  <p className="mb-2"><FaMapMarkerAlt className="text-danger me-2" />{property.city}</p>

                  {/* Icons Section */}
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div className="text-center">
                      <FaBed size={25} className="text-primary" />
                      <p className="mb-0">{property.bhk}</p>
                    </div>
                    <div className="text-center">
                      <FaCar size={25} className="text-success" />
                      <p className="mb-0">Parking</p>
                    </div>
                    <div className="text-center">
                      <BiSolidCctv size={25} className="text-dark" />
                      <p className="mb-0">CCTV</p>
                    </div>
                  </div>

                  <Button variant="success" className="mt-3" onClick={() => toggleDetails(index)}>
                    {visibleDetails[index] ? "Hide Details" : "View Details"}
                  </Button>

                  {visibleDetails[index] && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-75 text-white rounded p-4"
                      style={{ backdropFilter: "blur(10px)" }}>
                      <h5>Property Details</h5>
                      {property.details.map((detail, i) => <p key={i}>{detail}</p>)}
                      <Button variant="danger" onClick={() => toggleDetails(index)}>Close</Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <CustomCarousel />
      <Footer />
    </>
  );
};

export default Home;
