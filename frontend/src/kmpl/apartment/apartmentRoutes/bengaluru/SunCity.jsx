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

const SunCity = () => {
  const [show, setShow] = useState(false);
  const [activeFloorPlan, setActiveFloorPlan] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    project: "Sun City"
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
        project: "Sun City"
      });
      setIsChecked(false);
    } catch (error) {
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
    link.download = 'Sun_City_3BHK_RowHouses_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const floorPlans = [
    {
      id: 1,
      name: "LUXURY LIVING",
      images: [
        { id: 1, src: FloorPlanImage1 },
        { id: 2, src: FloorPlanImage2 },
        { id: 3, src: FloorPlanImage3 },
      ],
    },
    {
      id: 2,
      name: "LIFE STYLE",
      images: [
        { id: 1, src: FloorPlanImage4 },
        { id: 2, src: FloorPlanImage5 },
        { id: 3, src: FloorPlanImage6 },
      ],
    },
    {
      id: 3,
      name: "ESSENTIAL HUB",
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
              alt="KMPL-GRAND Sun City Row Houses"
              className="img-fluid w-100"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Col>
          <Col xs={12} md={4} className="bg-dark text-white d-flex align-items-center justify-content-center p-3">
            <Card id="enquiry-form" className="p-4 bg-dark text-white border-0 w-100">
              <h4>KMPL-GRAND SUN CITY HIGHLIGHTS</h4>
              <ul>
                <li>Premium 3BHK Row Houses in Bengaluru</li>
                <li>Spacious 1800-2200 sq.ft homes with private gardens</li>
                <li>50,000+ Happy Customers Since 1976</li>
                <li>RERA Approved Project</li>
                <li>Ready-to-Move-In Options Available</li>
              </ul>
              <h5 className="mt-4">ENQUIRE NOW</h5>
              <p>INTERESTED IN OUR 3BHK ROW HOUSES?</p>
              
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

      {/* Highlights Section */}
      <Container className="text-center my-5">
        <Row>
          <h2 className="mb-4">WHY CHOOSE SUN CITY ROW HOUSES?</h2>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={3}>
            <Button className='bg-success rounded w-100 mb-3' size="lg" onClick={() => {
              document.getElementById('google_map').scrollIntoView({ behavior: 'smooth' });
            }}>
              Prime Location
            </Button>
          </Col>
          <Col md={3}>
            <Button className='bg-success rounded w-100 mb-3' size="lg" onClick={() => {
              document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
            }}>
              Premium Features
            </Button>
          </Col>
          <Col md={3}>
            <Button className='bg-success rounded w-100 mb-3' size="lg" onClick={() => {
              document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            }}>
              Photo Gallery
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img 
              src={Tower} 
              alt="KMPL-GRAND Sun City Row Houses" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Luxurious 3BHK Row Houses in Bengaluru</h3>
            <p className="fs-5"><strong>1.</strong> Spacious 1800-2200 sq.ft homes with private gardens</p>
            <p className="fs-5"><strong>2.</strong> Premium gated community with 24/7 security</p>
            <p className="fs-5"><strong>3.</strong> Exclusive location in prime Bengaluru neighborhood</p>
            <p className="fs-5"><strong>4.</strong> Earthquake-resistant RCC structure with premium materials</p>
            <p className="fs-5"><strong>5.</strong> Private parking for 2 cars with each unit</p>
            <p className="fs-5"><strong>6.</strong> Sustainable features including rainwater harvesting</p>
            
            <Button  
              variant="success" 
              onClick={() => setShow(true)}
              className="mt-3"
            >
              View Complete Specifications
            </Button>

            <Modal show={show} onHide={() => setShow(false)} centered size="lg">
              <Modal.Header closeButton className="border-0">
                <Modal.Title className="fw-bold">3BHK Row House Specifications</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5 className="mb-3">Construction Details:</h5>
                <ul className="fs-5">
                  <li className="mb-2">Premium vitrified tiles in living and bedrooms</li>
                  <li className="mb-2">Anti-skid ceramic tiles in bathrooms</li>
                  <li className="mb-2">Modular kitchen with granite countertop and breakfast counter</li>
                  <li className="mb-2">CPVC plumbing with concealed piping</li>
                  <li className="mb-2">Branded electrical fittings and switches</li>
                  <li className="mb-2">Teak wood main door with security lock</li>
                  <li className="mb-2">Private terrace/garden area</li>
                </ul>
                <h5 className="mt-4 mb-3">Premium Features:</h5>
                <ul className="fs-5">
                  <li className="mb-2">Walk-in wardrobes in master bedroom</li>
                  <li className="mb-2">Utility area with washing machine space</li>
                  <li className="mb-2">Pooja room in select units</li>
                  <li className="mb-2">Dedicated servant room with attached bathroom</li>
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
                  Book Site Visit
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>

      {/* Stats Section */}
      <Container className="text-center my-5 bg-light py-4 rounded">
        <Row>
          <h2 className="mb-4">THE KMPL-GRAND LEGACY</h2>
          <Col md={4} className="mb-4">
            <h4><strong>50,000+</strong></h4>
            <p>Happy Customers Across India</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4><strong>45+ Years</strong></h4>
            <p>of Trusted Real Estate Development</p>
          </Col>
          <Col md={4} className="mb-4">
            <h4><strong>RERA Approved</strong></h4>
            <p>All Projects Fully Compliant</p>
          </Col>
        </Row>
      </Container>

      {/* Floor Plans Section */}
      <Container fluid className="bg-light py-5">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h2 className="fw-bold mb-4" id="features">3BHK ROW HOUSE PLANS</h2>
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
                {activeFloorPlan === 1 && "Luxurious 3BHK Row House Designs"}
                {activeFloorPlan === 2 && "Premium Lifestyle Amenities"}
                {activeFloorPlan === 3 && "Exclusive Community Features"}
              </h4>
              <p className="mb-4 px-5">
                {activeFloorPlan === 1 && "Our 3BHK row houses offer spacious living with premium finishes, perfect for families seeking luxury and privacy."}
                {activeFloorPlan === 2 && "Enjoy high-quality finishes including vitrified tiles, modular kitchen, and premium bathroom fittings."}
                {activeFloorPlan === 3 && "Access to clubhouse, swimming pool, landscaped gardens, and 24/7 security."}
              </p>
              <Button 
                variant="success" 
                size="lg" 
                className="fw-bold"
                onClick={() => document.getElementById("enquiry-form").scrollIntoView({ behavior: 'smooth' })}
              >
                Get Pricing Details <FaArrowRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Gallery Section */}
      <Container className="my-5">
        <Row id="gallery">
          <h2 className="fw-bold mb-4 text-center">LIFESTYLE AT SUN CITY</h2>
          <CustomCarousel />
        </Row>
      </Container>

      {/* Location Section */}
      <Container className="my-5">
        <Row id="google_map">
          <Col>
            <h3 className="text-center mb-4">PRIME LOCATION IN BENGALURU</h3>
            <p className="text-center mb-4">
              Our row houses are strategically located with easy access to:
              <br /><br />
              <strong>Tech & Business Hubs:</strong>
              <br />• Manyata Tech Park - 3km
              <br />• Embassy Tech Village - 5km  
              <br />• ITPL - 8km
              <br /><br />
              <strong>Education:</strong>
              <br />• Inventure Academy - 2km
              <br />• Greenwood High - 4km
              <br /><br />
              <strong>Healthcare:</strong>  
              <br />• Manipal Hospitals - 3km
              <br />• Narayana Health - 5km
              <br /><br />
              <strong>Lifestyle:</strong>
              <br />• Phoenix MarketCity - 4km
              <br />• VR Bengaluru - 6km
            </p>
            <div className="text-center mb-4">
              <Button 
                variant="outline-success" 
                onClick={() => window.open("https://maps.google.com/?q=12.9250,77.5938", "_blank")}
              >
                View Exact Location on Google Maps
              </Button>
            </div>
            <GMap coords={{ lat: 12.9250, lng: 77.5938 }} />
            <p className="text-center mt-4">
              <strong>Connectivity:</strong> 
              <br />• 5 mins from Outer Ring Road
              <br />• 10 mins from Hebbal Flyover
              <br />• 15 mins from Nagawara Metro
              <br />• 35 mins from Kempegowda Airport
            </p>
          </Col>
        </Row>
      </Container>

      {/* Payment Options */}
      <Container className="my-5 bg-light p-4 rounded">
        <Row className="text-center">
          <h2 className="mb-4">FLEXIBLE PAYMENT OPTIONS</h2>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Down Payment Plan</Card.Title>
                <Card.Text>
                  20% Booking Amount<br />
                  Balance on Possession
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Installment Plan</Card.Title>
                <Card.Text>
                  Pay in 12 Easy Installments<br />
                  No Hidden Charges
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Home Loans</Card.Title>
                <Card.Text>
                  Tie-ups with Major Banks<br />
                  Easy EMI Options
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

export default SunCity;