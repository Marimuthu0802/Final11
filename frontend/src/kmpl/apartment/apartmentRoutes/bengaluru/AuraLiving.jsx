import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaHome } from 'react-icons/fa';
import Topbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/Footer';
import GMap from '../../../components/GMap';
import ConstructionImage from '/src/assets/images/original/apartment_with_parking.jpg';
import { Link } from 'react-router';

const AuraLiving = () => {
  const [showAlert, setShowAlert] = useState(true);
  // Fixed coordinates since project is complete
  const bangaloreCoords = {
    lat: 12.9716,
    lng: 77.5946
  };

  return (
    <Container fluid className="p-0">
      <Topbar />
      
      {/* Hero Section */}
      <Row className="g-0 position-relative">
        <img
          src={ConstructionImage}
          alt="Aura Living - Fully Occupied"
          className="img-fluid w-100"
          style={{ height: "70vh", objectFit: "cover", filter: "brightness(0.7)" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-3 fw-bold mb-4">AURA LIVING</h1>
          <h2 className="display-5 mb-4">
            <span className="badge bg-success p-3">
              <FaCheckCircle className="me-2" />
              ALL UNITS OCCUPIED
            </span>
          </h2>
        </div>
      </Row>

      {/* Alert Banner */}
      {showAlert && (
        <Alert variant="success" className="rounded-0 text-center mb-0" onClose={() => setShowAlert(false)} dismissible>
          <strong>Project Fully Occupied:</strong> All units in Aura Living have been sold. Contact us for future projects.
        </Alert>
      )}

      {/* Info Section */}
      <Container className="my-5 py-4">
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-3">PREMIUM LUXURY APARTMENTS IN BANGALORE</h2>
            <p className="lead">
              Aura Living has successfully redefined urban luxury with world-class amenities and sustainable design in Bangalore's prime location.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaHome size={32} className="mb-3 text-success" />
                <Card.Title>Project Status</Card.Title>
                <Card.Text>
                  Fully Occupied<br />
                  (100% Sold Out)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaMapMarkerAlt size={32} className="mb-3 text-success" />
                <Card.Title>Prime Location</Card.Title>
                <Card.Text>
                  North Bangalore's premium residential corridor
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaCheckCircle size={32} className="mb-3 text-success" />
                <Card.Title>Completion</Card.Title>
                <Card.Text>
                  Successfully delivered<br />
                  January 2025
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaPhone size={32} className="mb-3 text-success" />
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  For future projects:<br />
                  +91 xxx-xxxx-xxx
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
                Aura Living is located in North Bangalore's premium residential corridor, with excellent connectivity to:
              </p>
              <ul className="mb-4">
                <li>Manyata Tech Park - 4km</li>
                <li>Bangalore International Airport - 18km</li>
                <li>Hebbal Flyover - 3km</li>
                <li>Nagawara Metro Station - 2km</li>
              </ul>
              
            </Col>
            <Col md={6}>
              <div className="rounded overflow-hidden shadow" style={{ height: "400px" }}>
                <GMap coords={bangaloreCoords} zoom={14} />
              </div>
              <p className="text-muted mt-2 text-center">
                Actual project location
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Completion Section */}
      <Container className="my-5 py-5 text-center bg-success bg-opacity-10 rounded">
        <h2 className="display-4 fw-bold mb-4 text-success">THANK YOU FOR YOUR INTEREST</h2>
        <p className="lead mb-5">
          While Aura Living is fully occupied, we invite you to explore our upcoming premium projects in Bangalore
        </p>
        <Link to="/properties"><Button variant="success" size="lg" className="px-5">
          View Upcoming Projects
        </Button></Link>
      </Container>

      <Footer />
    </Container>
  );
};

export default AuraLiving;