import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Topbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/Footer';
import GMap from '../../../components/GMap';
import ConstructionImage from '/src/assets/images/original/apartment_with_outdoor_parking.jpg';

const TheArcadia = () => {
  const [showAlert, setShowAlert] = useState(true);
  // Random coordinates within Chennai area
  const chennaiCoords = {
    lat: 13.0827 + (Math.random() * 0.1 - 0.05),  // Base Chennai coords ±0.05
    lng: 80.2707 + (Math.random() * 0.1 - 0.05)
  };

  return (
    <Container fluid className="p-0">
      <Topbar />
      
      {/* Hero Section */}
      <Row className="g-0 position-relative">
        <img
          src={ConstructionImage}
          alt="The Arcadia Under Construction"
          className="img-fluid w-100"
          style={{ height: "70vh", objectFit: "cover", filter: "brightness(0.7)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-3 fw-bold mb-4">THE ARCADIA</h1>
          <h2 className="display-5 mb-4">Coming Soon to Chennai</h2>
          <div className="d-flex justify-content-center gap-3">
            
          </div>
        </div>
      </Row>

      {/* Alert Banner */}
      {showAlert && (
        <Alert variant="warning" className="rounded-0 text-center mb-0" onClose={() => setShowAlert(false)} dismissible>
          <strong>Under Construction:</strong> We're crafting premium living spaces in Chennai.
        </Alert>
      )}

      {/* Info Section */}
      <Container className="my-5 py-4">
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-3">LUXURY RESIDENTIAL TOWERS IN CHENNAI</h2>
            <p className="lead">
              The Arcadia will offer sophisticated urban living with panoramic city views, premium amenities, and unmatched connectivity in Chennai's prime location.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaMapMarkerAlt size={32} className="mb-3 text-primary" />
                <Card.Title>Prime Chennai Location</Card.Title>
                <Card.Text>
                  Situated in the heart of Chennai's growth corridor
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaClock size={32} className="mb-3 text-primary" />
                <Card.Title>Completion</Card.Title>
                <Card.Text>
                  Estimated delivery: December 2026
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaEnvelope size={32} className="mb-3 text-primary" />
                <Card.Title>Get Updates</Card.Title>
                <Card.Text>
                  Register for exclusive pre-launch offers
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaPhone size={32} className="mb-3 text-primary" />
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  +91 xxx-xxxx-xxx<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Location Section */}
      <Container fluid className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3 className="fw-bold mb-4">PROJECT LOCATION</h3>
              <p className="mb-4">
                The Arcadia is strategically positioned in Chennai's most sought-after residential zone, with excellent access to:
              </p>
              <ul className="mb-4">
                <li>Anna Nagar - 3km</li>
                <li>Chennai Airport - 12km</li>
                <li>CMBT - 5km</li>
                <li>Metro Station - 1.5km</li>
              </ul>
              
            </Col>
            <Col md={6}>
              <div className="rounded overflow-hidden shadow" style={{ height: "400px" }}>
                <GMap coords={chennaiCoords} zoom={14} />
              </div>
              <p className="text-muted mt-2 text-center">
                Approximate location shown - exact coordinates will be shared at launch
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Coming Soon Section */}
      <Container className="my-5 py-5 text-center">
        <h2 className="display-4 fw-bold mb-4">REDEFINING CHENNAI LIVING</h2>
        
        
      </Container>

      <Footer />
    </Container>
  );
};

export default TheArcadia;