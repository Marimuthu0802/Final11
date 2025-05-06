import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Modal, Alert } from "react-bootstrap";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Topbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/Footer";
import CustomCarousel from "../../../components/customcarousel/MapCarousel/CustomCarousel";
import GMap from "../../../components/GMap";
import Tower from "../../../../assets/images/Tower.jpg";
import FloorPlanImage1 from "/src/assets/images/KMPL GRAND_files/Row house.jpg";
import FloorPlanImage2 from "/src/assets/images/KMPL GRAND_files/ROW.jpg";
import FloorPlanImage3 from "/src/assets/images/KMPL GRAND_files/RRHOW.jpg";



import FloorPlanImage4 from "../../../../assets/images/caro1.png";
import FloorPlanImage5 from "../../../../assets/images/caro2.jpg";
import FloorPlanImage6 from "../../../../assets/images/caro3.png";
import FloorPlanImage7 from "../../../../assets/images/1.jpg";
import FloorPlanImage8 from "../../../../assets/images/2.jpg";
import FloorPlanImage9 from "../../../../assets/images/3d.svg";
import axios from "axios";

const GolcondaGreens = () => {
  // State declarations
  const [show, setShow] = useState(false);
  const [activeFloorPlan, setActiveFloorPlan] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    project: "Golconda Greens"
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const isValid = 
      formData.name.trim() !== "" && 
      /^[6-9]\d{9}$/.test(formData.mobile) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && 
      isChecked;
      
    setIsFormValid(isValid);
  }, [formData, isChecked]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "mobile") {
      const cleanedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        [name]: cleanedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post("http://localhost:7000/enquiry", {
        ...formData,
        mobile: `+91${formData.mobile}`
      });
      
      setSubmitStatus({
        success: true,
        message: "Thank you! Your enquiry has been submitted. You can now download the brochure."
      });
      
      setFormData({
        name: "",
        mobile: "",
        email: "",
        project: "Golconda Greens"
      });
      setIsChecked(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again!"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/KMPL-BROCHURE.pdf';
    link.download = 'Golconda_Greens_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const floorPlans = [
    {
      id: 1,
      name: "3BHK LUXURY",
      images: [
        { id: 1, src: FloorPlanImage1 },
        { id: 2, src: FloorPlanImage2 },
        { id: 3, src: FloorPlanImage3 },
      ],
    },
    {
      id: 2,
      name: "AMENITIES",
      images: [
        { id: 1, src: FloorPlanImage4 },
        { id: 2, src: FloorPlanImage5 },
        { id: 3, src: FloorPlanImage6 },
      ],
    },
    {
      id: 3,
      name: "LOCATION",
      images: [
        { id: 1, src: FloorPlanImage7 },
        { id: 2, src: FloorPlanImage8 },
        { id: 3, src: FloorPlanImage9 },
      ],
    },
  ];

  return (
    <Container fluid className="p-0 m-0 w-100">
      <Topbar />
      
      <Container fluid className="p-0 m-0">
        <Row className="g-0 w-100 d-flex flex-wrap" style={{ marginTop: '6%' }}>
          <Col xs={12} md={8} className="p-0">
            <img
              src={Tower}
              alt="KMPL-GRAND Golconda Greens"
              className="img-fluid w-100"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Col>
          <Col xs={12} md={4} className="bg-dark text-white d-flex align-items-center justify-content-center p-3">
            <Card id="enquiry-form" className="p-4 bg-dark text-white border-0 w-100">
              <h4>KMPL-GRAND GOLCONDA GREENS HIGHLIGHTS</h4>
              <ul>
                <li>Luxury 3BHK Apartments in Hyderabad</li>
                <li>1800-2200 sq.ft Premium Residences</li>
                <li>50,000+ Happy Customers Since 1976</li>
                <li>RERA Approved Premium Project</li>
                <li>24/7 Security & Concierge Service</li>
              </ul>
              <h5 className="mt-4">ENQUIRE NOW</h5>
              <p>INTERESTED IN OUR 3BHK LUXURY APARTMENTS?</p>
              
              {submitStatus.message && (
                <Alert variant={submitStatus.success ? "success" : "danger"}>
                  {submitStatus.message}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="tel" 
                        name="mobile"
                        placeholder="Mobile Number" 
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        pattern="[6-9]\d{9}"
                        title="Please enter a 10-digit Indian mobile number"
                        maxLength="10"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check 
                    type="checkbox" 
                    label="I agree to the Privacy Policy" 
                    required
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </Form.Group>
                <Button 
                  variant="warning" 
                  type="submit" 
                  className="w-100 d-flex align-items-center justify-content-center mb-3"
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"} <FaArrowRight className="ms-2" />
                </Button>
                <Button 
                  variant="outline-light" 
                  className="w-100 d-flex align-items-center justify-content-center"
                  onClick={downloadBrochure}
                  disabled={!submitStatus.success}
                >
                  Download Brochure <FaDownload className="ms-2" />
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="text-center my-5">
        <Row>
          <h2 className="mb-4">GOLCONDA GREENS - LUXURY REDEFINED</h2>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={3}>
            <Button variant="success" className="rounded w-100 mb-3" size="lg"
              onClick={() => document.getElementById('google_map').scrollIntoView({ behavior: 'smooth' })}>
              Prime Location
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="success" className="rounded w-100 mb-3" size="lg"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              Luxury Amenities
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="success" className="rounded w-100 mb-3" size="lg"
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
              Gallery
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img 
              src={Tower} 
              alt="3BHK Luxury Apartment" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Premium 3BHK Residences</h3>
            <p className="fs-5"><strong>1.</strong> Spacious 1800-2200 sq.ft luxury apartments</p>
            <p className="fs-5"><strong>2.</strong> Italian marble flooring in living areas</p>
            <p className="fs-5"><strong>3.</strong> Modular kitchen with premium appliances</p>
            <p className="fs-5"><strong>4.</strong> Smart home automation system</p>
            <p className="fs-5"><strong>5.</strong> 3 Balconies with panoramic city views</p>
            <p className="fs-5"><strong>6.</strong> Earthquake-resistant RCC structure</p>
            
            <Button variant="success" onClick={() => setShow(true)} className="mt-3">
              View Complete Specifications
            </Button>

            <Modal show={show} onHide={() => setShow(false)} centered size="lg">
              <Modal.Header closeButton className="border-0">
                <Modal.Title className="fw-bold">3BHK Luxury Specifications</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5 className="mb-3">Premium Features:</h5>
                <ul className="fs-5">
                  <li className="mb-2">Master bedroom with walk-in wardrobe</li>
                  <li className="mb-2">Jacuzzi in master bathroom</li>
                  <li className="mb-2">Smart lighting control system</li>
                  <li className="mb-2">Central air conditioning provision</li>
                  <li className="mb-2">German kitchen appliances package</li>
                  <li className="mb-2">Video door phone system</li>
                </ul>
                <h5 className="mt-4 mb-3">Exclusive Facilities:</h5>
                <ul className="fs-5">
                  <li className="mb-2">Infinity pool with deck</li>
                  <li className="mb-2">Residents' lounge & business center</li>
                  <li className="mb-2">Yoga deck & meditation zone</li>
                  <li className="mb-2">Indoor games complex</li>
                </ul>
              </Modal.Body>
              <Modal.Footer className="border-0">
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
                </Button>
                <Button variant="success" onClick={() => {
                  setShow(false);
                  document.getElementById("enquiry-form").scrollIntoView({ behavior: 'smooth' });
                }}>
                  Schedule Private Tour
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>

      <Container className="text-center my-5 bg-light py-4 rounded">
        <Row>
          <h2 className="mb-4">WHY CHOOSE KMPL-GRAND?</h2>
          <Col md={4} className="mb-4">
            <h4><strong>45+ Years</strong></h4>
            <p>of Real Estate Excellence</p>
          </Col>
          <Col md={4} className="mb-4">
                     <h4><strong>50,000+</strong></h4>
                     <p>Happy Customers Across South India</p>
                   </Col>
          <Col md={4} className="mb-4">
            <h4><strong>RERA Approved</strong></h4>
            <p>Transparent Transactions</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light py-5">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h2 className="fw-bold mb-4" id="features">3BHK LUXURY LIVING</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              {floorPlans.map((plan) => (
                <Button 
                  key={plan.id}
                  variant={activeFloorPlan === plan.id ? "success" : "outline-success"}
                  className="rounded-pill px-4"
                  onClick={() => setActiveFloorPlan(plan.id)}
                >
                  {plan.name}
                </Button>
              ))}
            </div>
            <Row className="justify-content-center g-4">
              <Col md={8}>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  {floorPlans.find((p) => p.id === activeFloorPlan).images.map((image) => (
                    <img
                      key={image.id}
                      src={image.src}
                      className="img-fluid rounded shadow-sm"
                      alt={`${floorPlans.find((p) => p.id === activeFloorPlan).name}`}
                      style={{ maxHeight: "300px", width: "30%" }}
                    />
                  ))}
                </div>
              </Col>
            </Row>
            <div className="mt-4">
              <h4 className="mb-3">
                {activeFloorPlan === 1 && "Luxurious 3BHK Designs"}
                {activeFloorPlan === 2 && "Premium Amenities"}
                {activeFloorPlan === 3 && "Strategic Location"}
              </h4>
              <Button 
                variant="success" 
                size="lg" 
                className="fw-bold"
                onClick={() => document.getElementById("enquiry-form").scrollIntoView({ behavior: 'smooth' })}
              >
                Get Exclusive Pricing <FaArrowRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row id="gallery">
          <h2 className="fw-bold mb-4 text-center">LUXURY LIFESTYLE</h2>
          <CustomCarousel />
        </Row>
      </Container>

    <Container className="my-5">
    <Row id="google_map">
      <Col>
        <h3 className="text-center mb-4">PRIME LOCATION IN HYDERABAD</h3>
        <p className="text-center mb-4">
          Our apartments are strategically located with easy access to:
          <br /><br />
          <strong>Business Hubs:</strong>
          <br />• HITEC City - 6km
          <br />• Gachibowli Financial District - 8km  
          <br /><br />
          <strong>Education:</strong>
          <br />• IIIT Hyderabad - 4km
          <br />• ISB - 6km
          <br /><br />
          <strong>Healthcare:</strong>  
          <br />• Apollo Hospitals - 5km
          <br />• Yashoda Hospitals - 6km
          <br /><br />
          <strong>Lifestyle:</strong>
          <br />• Inorbit Mall - 6km
          <br />• Durgam Cheruvu - 4km
        </p>
        <div className="text-center mb-4">
          <Button 
            variant="outline-success" 
            onClick={() => window.open("https://maps.google.com/?q=17.3850,78.4867", "_blank")}
          >
            View Exact Location on Google Maps
          </Button>
        </div>
        <GMap coords={{ lat: 17.3850, lng: 78.4867 }} />
        <p className="text-center mt-4">
          <strong>Connectivity:</strong> 
          <br />• 10 mins from Outer Ring Road
          <br />• 25 mins from Rajiv Gandhi International Airport
          <br />• 15 mins from Hyderabad Railway Station
          <br />• Easy access to all major city routes
        </p>
      </Col>
    </Row>
  </Container>
  

      <Container className="my-5 bg-light p-4 rounded">
        <Row className="text-center">
          <h2 className="mb-4">ELITE OWNERSHIP PLANS</h2>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Flexi Payment Plan</Card.Title>
                <Card.Text>
                  20% Advance Payment<br />
                  80% During Construction
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Bank Tie-ups</Card.Title>
                <Card.Text>
                  90% Home Loan Assistance<br />
                  Low Interest Rates
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Corporate Offers</Card.Title>
                <Card.Text>
                  Special Discounts for<br />
                  Bulk Bookings
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     
      {/* Footer */}
     
      <Footer />
      
      </Container>
    );
  };

export default GolcondaGreens;