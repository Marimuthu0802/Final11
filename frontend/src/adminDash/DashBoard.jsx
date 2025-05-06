import { React, useState, useEffect } from "react";
import { Card, Container, Row, Col, Navbar, Button } from "react-bootstrap";
import axios from "axios";

const DashBoard = () => {

  const [contactCount, setContactCount] = useState(0);
  const [todayContactCount, setTodayContactCount] = useState(0);
  const [enquiryCount, setEnquiryCount] = useState(0);
  const [todayEnquiryCount, setTodayEnquiryCount] = useState(0);

  const getFormattedDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const todayDate = getFormattedDate();
        const responseCount = await axios.get(`http://localhost:7000/dashboard?date=${todayDate}`);
        setContactCount(responseCount.data.totalContacts);
        setTodayContactCount(responseCount.data.dateCount);
        setEnquiryCount(responseCount.data.totalEnquiry);
        setTodayEnquiryCount(responseCount.data.dateEnquiryCount);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };
    fetchCounts();
  }, []);

  const convertToCSV = (data) => {
    if (!data.length) return "";
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(row => Object.values(row).join(","));
    return [headers, ...rows].join("\n");
  };

  const handleDownload = async (type) => {
    try {
      const response = await axios.get("http://localhost:7000/dashboard", {
        responseType: "json",
      });

      let dataToDownload = [];
      let fileName = "data.csv";

      if (type === "contacts") {
        dataToDownload = response.data.allContacts || [];
        fileName = "allContacts.csv";
      } else if (type === "enquiry") {
        dataToDownload = response.data.allEnquiry || [];
        fileName = "allEnquiries.csv";
      }

      const csvData = convertToCSV(dataToDownload);
      const blob = new Blob([csvData], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    

    <Container className="text-center mt-4">

      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="mt-4 p-3 rounded">
        <Navbar.Brand className="mx-auto">📞 Contact Information Dashboard</Navbar.Brand>
      </Navbar>

      {/* Cards Below Navbar */}
      <Row className="mt-3">
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title>Total Contacts</Card.Title>
              <Card.Text className="display-6 fw-bold text-primary">{contactCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title>Today's Contact</Card.Title>
              <Card.Text className="display-6 fw-bold text-success">{todayContactCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="primary" onClick={() => handleDownload("contacts")}>
          Download Contacts CSV
        </Button>
      </div>

      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="mt-4 p-3 rounded">
        <Navbar.Brand className="mx-auto">📞 Properties Enquiry Information Dashboard</Navbar.Brand>
      </Navbar>

      {/* Cards Below Navbar */}
      <Row className="mt-3">
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title>Total Enquires</Card.Title>
              <Card.Text className="display-6 fw-bold text-primary">{enquiryCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <Card.Title>Today's Enquiry</Card.Title>
              <Card.Text className="display-6 fw-bold text-success">{todayEnquiryCount}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="primary" onClick={() => handleDownload("enquiry")}>
          Download Enquiries CSV
        </Button>
      </div>

    </Container>
  );
};

export default DashBoard;