import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaWater } from 'react-icons/fa';
import Topbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/Footer';
import GMap from '../../../components/GMap';
import ConstructionImage from '/src/assets/images/original/apartment_with_parking.jpg';

const SiruvaniApartment = () => {
  const [showAlert, setShowAlert] = useState(true);
  // Random coordinates within Coimbatore area near Siruvani
  const coimbatoreCoords = {
    lat: 11.0168 + (Math.random() * 0.05 - 0.025), // Tighter range near Siruvani
    lng: 76.9558 + (Math.random() * 0.05 - 0.025)
  };

  return (
    <Container fluid className="p-0">
      <Topbar />
      
      {/* Hero Section with Water Theme */}
      <Row className="g-0 position-relative">
        <img
          src={ConstructionImage}
          alt="Siruvani Apartment Under Construction"
          className="img-fluid w-100"
          style={{ 
            height: "70vh", 
            objectFit: "cover", 
            filter: "brightness(0.7)",
            borderBottom: "4px solid #1E90FF"
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            
            SIRUVANI APARTMENT
            
          </h1>
          <h2 className="display-5 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Coming Soon to Coimbatore
          </h2>
         
        </div>
      </Row>

      {/* Alert Banner */}
      {showAlert && (
        <Alert variant="info" className="rounded-0 text-center mb-0" onClose={() => setShowAlert(false)} dismissible>
          <strong>Under Construction:</strong> Premium apartments inspired by Siruvani's purity.
        </Alert>
      )}

      {/* Info Section */}
      <Container className="my-5 py-4">
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-3">PURE LIVING INSPIRED BY SIRUVANI WATERS</h2>
            <p className="lead">
              Siruvani Apartment brings you premium living spaces with eco-friendly design and water conservation features, located in Coimbatore's most serene neighborhood.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaWater size={32} className="mb-3 text-info" />
                <Card.Title>Water Conservation</Card.Title>
                <Card.Text>
                  Rainwater harvesting and water recycling systems
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaMapMarkerAlt size={32} className="mb-3 text-info" />
                <Card.Title>Prime Location</Card.Title>
                <Card.Text>
                  Peaceful residential area near Siruvani foothills
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaClock size={32} className="mb-3 text-info" />
                <Card.Title>Completion</Card.Title>
                <Card.Text>
                  Estimated delivery: February 2027
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <FaPhone size={32} className="mb-3 text-info" />
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
                Siruvani Apartment is strategically located in Coimbatore's serene western corridor, with convenient access to:
              </p>
              <ul className="mb-4">
                <li>Siruvani Waterfalls - 15km</li>
                <li>Coimbatore Airport - 12km</li>
                <li>PSG Tech - 5km</li>
                <li>Race Course - 6km</li>
              </ul>
              
            </Col>
            <Col md={6}>
              <div className="rounded overflow-hidden shadow" style={{ height: "400px" }}>
                <GMap coords={coimbatoreCoords} zoom={14} />
              </div>
              <p className="text-muted mt-2 text-center">
                Approximate location shown - exact coordinates will be shared at launch
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Coming Soon Section */}
      <Container className="my-5 py-5 text-center bg-info bg-opacity-10 rounded">
        <h2 className="display-4 fw-bold mb-4 text-info">EXPERIENCE PURE LIVING</h2>
        
        
      </Container>

      <Footer />
    </Container>
  );
};

export default SiruvaniApartment;