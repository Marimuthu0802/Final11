import React, { useState, useEffect, useRef } from "react";
import { 
  Container, 
  Tabs, 
  Tab, 
  ButtonGroup, 
  ToggleButton, 
  Row, 
  Col, 
  Card, 
  Badge,
  Button,
  Spinner
} from "react-bootstrap";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaExpand } from "react-icons/fa";
import { motion } from "framer-motion";
import Topbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import './Commercial.css';

// Custom images
import chennaiCompleted1 from "../../assets/images/apart/apartment/1.webp";
import chennaiUpcoming1 from "../../assets/images/apart/apartment/2.webp";
import bangaloreCompleted1 from "../../assets/images/apart/apartment/3.webp";
import bangaloreUpcoming1 from "../../assets/images/apart/apartment/4.webp";
import coimbatoreUpcoming1 from "../../assets/images/apart/apartment/5.webp";
import hyderabadCompleted1 from "../../assets/images/apart/apartment/6.webp";
import Commercialvideo from "../components/video/commercialvideo";

const commercialProperties = [
  {
    _id: "1",
    projectName: "KMPL Grand Mall",
    location: "Chennai",
    price: 50000000,
    propertyType: "Commercial",
    projectStatus: "Ready to Move",
    image: chennaiCompleted1,
    description: "Premium shopping mall with luxury brands",
    area: "50,000 sq.ft",
    floors: 5
  },
  {
    _id: "2",
    projectName: "Urban Business Hub",
    location: "Chennai",
    price: 75000000,
    propertyType: "Commercial",
    projectStatus: "Under Construction",
    image: chennaiUpcoming1,
    description: "Modern office spaces with amenities",
    area: "75,000 sq.ft",
    floors: 10
  },
  {
    _id: "3",
    projectName: "Tech Park Bangalore",
    location: "Bangalore",
    price: 120000000,
    propertyType: "Commercial",
    projectStatus: "Ready to Move",
    image: bangaloreCompleted1,
    description: "IT park with premium facilities",
    area: "1,00,000 sq.ft",
    floors: 15
  },
  {
    _id: "4",
    projectName: "Future Retail Center",
    location: "Bangalore",
    price: 90000000,
    propertyType: "Commercial",
    projectStatus: "Under Construction",
    image: bangaloreUpcoming1,
    description: "Upcoming premium retail space",
    area: "60,000 sq.ft",
    floors: 8
  },
  {
    _id: "5",
    projectName: "Coimbatore Trade Center",
    location: "Coimbatore",
    price: 40000000,
    propertyType: "Commercial",
    projectStatus: "Under Construction",
    image: coimbatoreUpcoming1,
    description: "New commercial hub in Coimbatore",
    area: "45,000 sq.ft",
    floors: 6
  },
  {
    _id: "6",
    projectName: "Hyderabad Business Square",
    location: "Hyderabad",
    price: 85000000,
    propertyType: "Commercial",
    projectStatus: "Ready to Move",
    image: hyderabadCompleted1,
    description: "Premium office spaces in Hyderabad",
    area: "70,000 sq.ft",
    floors: 12
  }
];

const Banner = () => {
  return (
    <Container fluid className="py-1" style={{marginTop:"5%"}}>
    <div>
        <Commercialvideo/>
    </div>
    </Container>
      
   
  );
};

const Commercialpage = () => {
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [activeTab, setActiveTab] = useState("Completed");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const projectsRef = useRef(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  useEffect(() => {
    setIsLoading(true);

    const filtered = commercialProperties.filter(property => {
      const cityMatch = property.location === selectedCity;
      const statusMatch =
        activeTab === "All" ||
        (activeTab === "Completed" && property.projectStatus === "Ready to Move") ||
        (activeTab === "Upcoming" && property.projectStatus === "Under Construction");

      return cityMatch && statusMatch;
    });

    setFilteredProperties(filtered);
    setTimeout(() => setIsLoading(false), 300); // Simulate loading delay
  }, [selectedCity, activeTab]);

  const handleTabChange = (city) => {
    setSelectedCity(city); // Simplified, no need for explicit setIsLoading here
  };

  const handleToggleChange = (value) => {
    setActiveTab(value); // Simplified, no need for explicit setIsLoading here
  };

  return (
    <>
      <Topbar />
      <Banner />

      {/* View All Projects Button */}
      
      <Container className="my-5" ref={projectsRef}>
        {/* Toggle Buttons */}
        <Card className="mb-4 shadow-sm border-0" style={{ backgroundColor: "#f8f9fa" }}>
          <Card.Body>
            <ButtonGroup className="w-100">
              <ToggleButton
                type="radio"
                variant={activeTab === "Completed" ? "success" : "outline-success"}
                name="toggle"
                value="Completed"
                checked={activeTab === "Completed"}
                onClick={() => handleToggleChange("Completed")} // Changed to onClick for better toggle behavior
                className="fw-bold"
              >
                Completed Projects
              </ToggleButton>
              <ToggleButton
                type="radio"
                variant={activeTab === "Upcoming" ? "warning" : "outline-warning"}
                name="toggle"
                value="Upcoming"
                checked={activeTab === "Upcoming"}
                onClick={() => handleToggleChange("Upcoming")} // Changed to onClick
                className="fw-bold"
              >
                Upcoming Projects
              </ToggleButton>
              <ToggleButton
                type="radio"
                variant={activeTab === "All" ? "info" : "outline-info"}
                name="toggle"
                value="All"
                checked={activeTab === "All"}
                onClick={() => handleToggleChange("All")} // Changed to onClick
                className="fw-bold"
              >
                All Projects
              </ToggleButton>
            </ButtonGroup>
          </Card.Body>
        </Card>

        {/* City Tabs */}
        <Tabs  
          activeKey={selectedCity} 
          onSelect={handleTabChange} 
          className="mb-4 d-flex justify-content-center align-items-center nav-link1 "
          variant="pills warning"
        >
          {["Chennai", "Bangalore", "Coimbatore", "Hyderabad"].map((city) => (
            <Tab eventKey={city} title={city} key={city} className="border-0" >
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-5  " 
                >
                  <Spinner animation="border" variant="success" />
                  <p className="mt-3 text-success">
                    Loading {activeTab.toLowerCase()} projects in {city}...
                  </p>
                </motion.div>
              ) : filteredProperties.length > 0 ? (
                <motion.div
                  key={`${city}-${activeTab}`} // Fixed template literal syntax
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Row>
                    {filteredProperties.map((property) => (
                      <Col key={property._id} lg={4} md={6} className="mb-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ y: -5 }}
                        >
                          <Card className="h-100 shadow-sm border-0 overflow-hidden">
                            <div className="position-relative">
                              <Card.Img
                                variant="top"
                                src={property.image}
                                style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                                onClick={() => setSelectedProperty(property)}
                              />
                              <Badge
                                bg={property.projectStatus === "Ready to Move" ? "success" : "warning"}
                                className="position-absolute top-0 end-0 m-2 text-dark fw-bold"
                              >
                                {property.projectStatus}
                              </Badge>
                            </div>
                            <Card.Body className="d-flex flex-column">
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <Card.Title className="text-success fw-bold">
                                  {property.projectName}
                                </Card.Title>
                                <div className="bg-success text-white px-3 py-1 rounded-pill fw-bold">
                                  ₹{formatPrice(property.price)}
                                </div>
                              </div>
                              <div className="mb-3">
                                <FaMapMarkerAlt className="me-2 text-success" />
                                <span className="text-muted">{property.location}</span>
                              </div>
                              <div className="d-flex justify-content-between mt-auto">
                                <div className="d-flex align-items-center">
                                  <FaBuilding className="me-2 text-success" />
                                  <span className="fw-bold">{property.propertyType}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <FaExpand className="me-2 text-success" />
                                  <span className="fw-bold">{property.area}</span>
                                </div>
                              </div>
                              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                  variant="success"
                                  className="w-100 fw-bold mt-3"
                                  onClick={() => setSelectedProperty(property)}
                                >
                                  View Details
                                </Button>
                              </motion.div>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              ) : (
                <motion.div
                  key={`empty-${city}-${activeTab}`} // Fixed template literal syntax
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center py-5 border-0 shadow-sm">
                    <Card.Body>
                      <Card.Title className="text-success fw-bold mb-3">
                        No {activeTab.toLowerCase()} projects found in {city}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {activeTab === "Completed" 
                          ? "No ready-to-move commercial properties available in this city."
                          : activeTab === "Upcoming"
                          ? "No upcoming commercial projects in this city yet."
                          : "No commercial projects available in this city yet."}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}
            </Tab>
          ))}
        </Tabs>
      </Container>

      {/* Modal */}
      {selectedProperty && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1050 }}
          onClick={() => setSelectedProperty(null)}
        >
          <motion.div 
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card style={{ width: "90%", maxWidth: "800px" }} className="border-success border-2">
              <Card.Header className="d-flex justify-content-between align-items-center bg-success text-white">
                <Card.Title className="fw-bold">{selectedProperty.projectName}</Card.Title>
                <Button
                  variant="link"
                  onClick={() => setSelectedProperty(null)}
                  className="text-white"
                >
                  <span style={{ fontSize: "1.5rem" }}>×</span>
                </Button>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <strong className="text-success">Price:</strong>
                      <span className="fs-5 fw-bold ms-2">₹{formatPrice(selectedProperty.price)}</span>
                    </div>
                    <div className="mb-3">
                      <strong className="text-success">Location:</strong>
                      <p className="ms-2">{selectedProperty.location}</p>
                    </div>
                    <div className="mb-3">
                      <strong className="text-success">Property Type:</strong>
                      <Badge bg="success" className="ms-2">{selectedProperty.propertyType}</Badge>
                    </div>
                    <div className="mb-3">
                      <strong className="text-success">Status:</strong>
                      <Badge
                        bg={selectedProperty.projectStatus === "Ready to Move" ? "success" : "warning"}
                        text={selectedProperty.projectStatus === "Ready to Move" ? "white" : "dark"}
                        className="ms-2"
                      >
                        {selectedProperty.projectStatus}
                      </Badge>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <strong className="text-success">Area:</strong>
                      <p className="ms-2">{selectedProperty.area}</p>
                    </div>
                    <div className="mb-3">
                      <strong className="text-success">Floors:</strong>
                      <p className="ms-2">{selectedProperty.floors}</p>
                    </div>
                    <div className="mb-3">
                      <strong className="text-success">Description:</strong>
                      <p className="ms-2">{selectedProperty.description}</p>
                    </div>
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.projectName}
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "200px" }}
                    />
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="bg-light">
                <Button 
                  variant="success" 
                  className="w-100 fw-bold"
                  onClick={() => console.log("Enquiry for:", selectedProperty.projectName)}
                >
                  Enquire Now
                </Button>
              </Card.Footer>
            </Card>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default Commercialpage;