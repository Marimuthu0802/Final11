import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  Tab,
  Nav,
  Form,
  Spinner,
  Badge
} from "react-bootstrap";
import { FaBed, FaLocationDot } from "react-icons/fa6";
import { FaTimes, FaFilter, FaUndo } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Topbar from "../components/navbar/Navbar";
import VideoComponent from "../components/video/Video";

const Apartment = () => {
  const navigate = useNavigate();
  
  // State for apartments data
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [selectedCity, setSelectedCity] = useState("chennai");
  const [visibleDetails, setVisibleDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Filter states
  const [selectedBHK, setSelectedBHK] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Options
  const cities = ["Chennai", "Bengaluru", "Coimbatore", "Hyderabad"];
  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK"];
  const priceRanges = [
    { label: "Below 50L", value: "0-5000000" },
    { label: "50L - 1Cr", value: "5000000-10000000" },
    { label: "1Cr - 2Cr", value: "10000000-20000000" },
    { label: "Above 2Cr", value: "20000000-999999999" }
  ];
  const propertyTypes = ["Apartment", "Row House"];
  const statusOptions = ["Ready to Move", "Under Construction", "Occupied"];

  // Manual route mapping for each apartment
  const getApartmentRoute = (apartmentName) => {
    const routeMap = {
      "Luxury Heights": "premium-luxury-apartments",
      "Green Valley": "eco-friendly-residences",
      "Urban Lofts": "downtown-lofts",
      "Sky View": "penthouse-collection",
      "Ocean Breeze": "beachfront-villas",
      "Royal Gardens": "royal-garden-residences",
      "Mountain View": "mountain-retreat",
      "City Lights": "urban-city-lights",
      // Add more mappings as needed
    };
    return routeMap[apartmentName] || apartmentName.toLowerCase().replace(/\s+/g, '-');
  };

  // Handle image click navigation
  const handleImageClick = (apartment) => {
    const routeName = getApartmentRoute(apartment.apartmentName);
    navigate(`/properties/${routeName}`);
  };

  // Apply all filters with useCallback
  const applyFilters = useCallback(
    (apartmentsList, city) => {
      let filtered = apartmentsList.filter((apartment) =>
        apartment.location.toLowerCase().includes(city.toLowerCase())
      );

      if (selectedBHK) {
        filtered = filtered.filter((apartment) => apartment.BHK === selectedBHK);
      }

      if (selectedPriceRange) {
        const [min, max] = selectedPriceRange.split("-").map(Number);
        filtered = filtered.filter(
          (apartment) => apartment.price >= min && apartment.price <= max
        );
      }

      if (selectedPropertyType) {
        filtered = filtered.filter(
          (apartment) => apartment.propertyType === selectedPropertyType
        );
      }

      if (selectedStatus) {
        filtered = filtered.filter(
          (apartment) => apartment.projectStatus === selectedStatus
        );
      }

      setFilteredApartments(filtered);
    },
    [selectedBHK, selectedPriceRange, selectedPropertyType, selectedStatus]
  );

  // Fetch apartments from backend
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:7000/view");
        setApartments(response.data);
        applyFilters(response.data, "chennai");
      } catch (error) {
        console.error("Error fetching apartments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApartments();
  }, [applyFilters]);

  // Handle city change
  const handleCityChange = (city) => {
    setSelectedCity(city.toLowerCase());
    applyFilters(apartments, city);
  };

  // Handle filter changes
  const handleFilterChange = () => {
    applyFilters(apartments, selectedCity);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedBHK("");
    setSelectedPriceRange("");
    setSelectedPropertyType("");
    setSelectedStatus("");
    applyFilters(apartments, selectedCity);
  };

  // Toggle details view
  const toggleDetails = (index) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Format price with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#FFD700",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <Topbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container className="py-1" style={{marginTop:"5%"}}>
          <Row>
            <VideoComponent/>
          </Row>
        </Container>
      </motion.div>

      {/* City Tabs */}
      <Container className="my-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Tab.Container defaultActiveKey="chennai">
            <Nav variant="pills" className="justify-content-center mb-4">
              {cities.map((city) => (
                <Nav.Item key={city} className="mx-1">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Nav.Link
                      eventKey={city.toLowerCase()}
                      onClick={() => handleCityChange(city.toLowerCase())}
                      active={selectedCity === city.toLowerCase()}
                      className="rounded-pill px-4"
                      style={{
                        backgroundColor:
                          selectedCity === city.toLowerCase() ? "#FFD700" : "#F8F9FA",
                        color:
                          selectedCity === city.toLowerCase() ? "#2E8B57" : "#495057",
                        fontWeight: "500"
                      }}
                    >
                      {city}
                    </Nav.Link>
                  </motion.div>
                </Nav.Item>
              ))}
            </Nav>
          </Tab.Container>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card
            className="mb-4 shadow-sm border-0"
            style={{ backgroundColor: "#F8F9FA" }}
          >
            <Card.Body>
              <Card.Title className="text-center mb-4 text-success fw-bold">
                <FaFilter className="me-2" />
                Filter Properties
              </Card.Title>
              <Row className="g-3">
                <Col md={3}>
                  <Form.Group>
                    <Form.Label className="fw-bold text-muted">BHK Type</Form.Label>
                    <Form.Select
                      value={selectedBHK}
                      onChange={(e) => setSelectedBHK(e.target.value)}
                      className="border-success"
                    >
                      <option value="">All BHK</option>
                      {bhkOptions.map((bhk) => (
                        <option key={bhk} value={bhk}>
                          {bhk}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group>
                    <Form.Label className="fw-bold text-muted">Price Range</Form.Label>
                    <Form.Select
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="border-success"
                    >
                      <option value="">All Prices</option>
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group>
                    <Form.Label className="fw-bold text-muted">
                      Property Type
                    </Form.Label>
                    <Form.Select
                      value={selectedPropertyType}
                      onChange={(e) => setSelectedPropertyType(e.target.value)}
                      className="border-success"
                    >
                      <option value="">All Types</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group>
                    <Form.Label className="fw-bold text-muted">Status</Form.Label>
                    <Form.Select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="border-success"
                    >
                      <option value="">All Statuses</option>
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs={6} className="mt-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="warning"
                      className="w-100 fw-bold"
                      onClick={handleFilterChange}
                    >
                      <FaFilter className="me-2" />
                      Apply Filters
                    </Button>
                  </motion.div>
                </Col>
                <Col xs={6} className="mt-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline-success"
                      className="w-100 fw-bold"
                      onClick={resetFilters}
                    >
                      <FaUndo className="me-2" />
                      Reset Filters
                    </Button>
                  </motion.div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Apartments Listing */}
        {isLoading ? (
          <motion.div
            className="text-center py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Spinner animation="border" variant="success" />
            <p className="mt-3 text-success">
              Loading properties in {selectedCity}...
            </p>
          </motion.div>
        ) : filteredApartments.length > 0 ? (
          <Row>
            {filteredApartments.map((apartment, index) => (
              <Col key={apartment._id} lg={4} md={6} className="mb-4">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-100 shadow-sm border-0 overflow-hidden">
                    {apartment.image && (
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={`http://localhost:7000/uploads/${apartment.image}`}
                          style={{ 
                            height: "200px", 
                            objectFit: "cover",
                            cursor: "pointer" 
                          }}
                          onClick={() => handleImageClick(apartment)}
                        />
                        <Badge
                          bg={
                            apartment.projectStatus === "Ready to Move"
                              ? "success"
                              : "warning"
                          }
                          className="position-absolute top-0 end-0 m-2 text-dark fw-bold"
                        >
                          {apartment.projectStatus}
                        </Badge>
                      </div>
                    )}
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <Card.Title className="text-success fw-bold">
                          {apartment.apartmentName}
                        </Card.Title>
                        <div className="bg-success text-white px-3 py-1 rounded-pill fw-bold">
                          ₹{formatPrice(apartment.price)}
                        </div>
                      </div>

                      <div className="mb-3">
                        <FaLocationDot className="me-2 text-success" />
                        <span className="text-muted">{apartment.location}</span>
                      </div>

                      <div className="d-flex justify-content-between mt-auto">
                        <div className="d-flex align-items-center">
                          <FaBed className="me-2 text-success" />
                          <span className="fw-bold">{apartment.BHK}</span>
                        </div>
                        <div>
                          <Badge bg="light" text="success" className="fw-bold">
                            {apartment.propertyType}
                          </Badge>
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="warning"
                          className="w-100 fw-bold mt-2"
                          onClick={() => toggleDetails(index)}
                        >
                          Quick View
                        </Button>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>

                {/* Quick View Modal */}
                {visibleDetails[index] && (
                  <motion.div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.7)",
                      zIndex: 1050
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
                      <Card
                        style={{ width: "90%", maxWidth: "800px" }}
                        className="border-success border-2"
                      >
                        <Card.Header className="d-flex justify-content-between align-items-center bg-success text-white">
                          <Card.Title className="fw-bold">
                            {apartment.apartmentName}
                          </Card.Title>
                          <motion.div
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              variant="link"
                              onClick={() => toggleDetails(index)}
                              className="text-white"
                            >
                              <FaTimes size={24} />
                            </Button>
                          </motion.div>
                        </Card.Header>
                        <Card.Body>
                          <Row>
                            <Col md={6}>
                              <div className="mb-3">
                                <strong className="text-success">Price:</strong>
                                <span className="fs-5 fw-bold ms-2">
                                  ₹{formatPrice(apartment.price)}
                                </span>
                              </div>
                              <div className="mb-3">
                                <strong className="text-success">Location:</strong>
                                <p className="ms-2">{apartment.location}</p>
                              </div>
                              <div className="mb-3">
                                <strong className="text-success">Configuration:</strong>
                                <Badge bg="success" className="ms-2">
                                  {apartment.BHK}
                                </Badge>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="mb-3">
                                <strong className="text-success">Property Type:</strong>
                                <Badge bg="success" className="ms-2">
                                  {apartment.propertyType}
                                </Badge>
                              </div>
                              <div className="mb-3">
                                <strong className="text-success">Status:</strong>
                                <Badge
                                  bg={
                                    apartment.projectStatus === "Ready to Move"
                                      ? "success"
                                      : "warning"
                                  }
                                  text={
                                    apartment.projectStatus === "Ready to Move"
                                      ? "white"
                                      : "dark"
                                  }
                                  className="ms-2"
                                >
                                  {apartment.projectStatus}
                                </Badge>
                              </div>
                              {apartment.image && (
                                <motion.img
                                  src={`http://localhost:7000/uploads/${apartment.image}`}
                                  alt={apartment.apartmentName}
                                  className="img-fluid rounded shadow"
                                  style={{ cursor: "pointer" }}
                                  whileHover={{ scale: 1.02 }}
                                  onClick={() => handleImageClick(apartment)}
                                />
                              )}
                            </Col>
                          </Row>
                        </Card.Body>
                        <Card.Footer className="bg-light">
                          <motion.div
                            whileHover={{ scale: 1.02 }} 
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              variant="success" 
                              className="w-100 fw-bold"
                              onClick={() => {
                                const routeName = getApartmentRoute(apartment.apartmentName);
                                navigate(`/properties/${routeName}`);
                              }}
                            >
                              View Full Details
                            </Button>
                          </motion.div>
                        </Card.Footer>
                      </Card>
                    </motion.div>
                  </motion.div>
                )}
              </Col>
            ))}
          </Row>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center py-5 border-0 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success fw-bold mb-3">
                  No properties found matching your criteria
                </Card.Title>
                <Card.Text className="text-muted mb-4">
                  Please try different filters or reset to see all properties
                </Card.Text>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="warning" onClick={resetFilters} className="fw-bold">
                    Reset All Filters
                  </Button>
                </motion.div>
              </Card.Body>
            </Card>
          </motion.div>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Apartment;