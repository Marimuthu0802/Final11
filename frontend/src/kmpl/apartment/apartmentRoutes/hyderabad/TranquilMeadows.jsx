import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaTree } from 'react-icons/fa';
import Topbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/Footer';
import GMap from '../../../components/GMap';
import ConstructionImage from '/src/assets/images/original/apartment_with_parking.jpg';

const TranquilMeadows = () => {
  const [showAlert, setShowAlert] = useState(true);
  // Random coordinates within Hyderabad area
  const hyderabadCoords = {
    lat: 17.3850 + (Math.random() * 0.05 - 0.025), // Random location within Hyderabad
    lng: 78.4867 + (Math.random() * 0.05 - 0.025)
  };

  return (
    <Container fluid className="p-0">
      <Topbar />
      
      {/* Hero Section with Nature Theme */}
      <Row className="g-0 position-relative">
        <img
          src={ConstructionImage}
          alt="Tranquil Meadows Under Construction"
          className="img-fluid w-100"
          style={{ 
            height: "70vh", 
            objectFit: "cover", 
            filter: "brightness(0.7)",
            borderBottom: "4px solid #2E8B57"
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            TRANQUIL MEADOWS
          </h1>
          <h2 className="display-5 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Serene Living Coming Soon to Hyderabad
          </h2>
        </div>
      </Row>

      {/* Alert Banner */}
      {showAlert && (
        <Alert variant="success" className="rounded-0 text-center mb-0" onClose={() => setShowAlert(false)} dismissible>
          <strong>Under Construction:</strong> Peaceful residential community with lush green spaces.
        </Alert>
      )}

      {/* Info Section */}
      <Container className="my-5 py-4">
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-3">NATURE-INSPIRED LIVING IN HYDERABAD</h2>
            <p className="lead">
              Tranquil Meadows offers a harmonious blend of modern amenities and natural beauty, creating the perfect retreat in the heart of the city.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaTree size={32} className="mb-3 text-success" />
                <Card.Title>Green Spaces</Card.Title>
                <Card.Text>
                  Lush gardens and 30% dedicated green area
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
                  Peaceful neighborhood with excellent connectivity
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaClock size={32} className="mb-3 text-success" />
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
                <FaPhone size={32} className="mb-3 text-success" />
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  +91 XXX-XXX-XXXX<br />
                 
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
                Tranquil Meadows is thoughtfully located in Hyderabad's peaceful western corridor, with convenient access to:
              </p>
              <ul className="mb-4">
                <li>HITEC City - 8km</li>
                <li>Gachibowli - 5km</li>
                <li>Rajiv Gandhi International Airport - 25km</li>
                <li>Hussain Sagar Lake - 12km</li>
              </ul>
            </Col>
            <Col md={6}>
              <div className="rounded overflow-hidden shadow" style={{ height: "400px" }}>
                <GMap coords={hyderabadCoords} zoom={14} />
              </div>
              <p className="text-muted mt-2 text-center">
                Approximate location shown - exact coordinates will be shared at launch
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Coming Soon Section */}
      <Container className="my-5 py-5 text-center bg-success bg-opacity-10 rounded">
        <h2 className="display-4 fw-bold mb-4 text-success">EXPERIENCE SERENE LIVING</h2>
        
      </Container>

      <Footer />
    </Container>
  );
};

export default TranquilMeadows;