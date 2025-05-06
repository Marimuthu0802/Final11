import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router"; // Fixed import

// eslint-disable-next-line react-refresh/only-export-components
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <Container>
        <Row className="justify-content-center text-center text-md-start">
          {/* Footer Links Section */}
          <Col
            xs={12}
            md={7}
            className="ps-md-4 d-flex flex-column flex-md-row flex-wrap justify-content-center justify-content-md-between text-center text-md-start border-0 border-md-start"
          >
            <div className="mb-4 mb-md-0">
              <h5 className="fw-bold">© 2025 KMPL Grand</h5>
              <ul className="list-unstyled mt-3">
                <li><Link to="/features" className="text-white text-decoration-none">Features</Link></li>
                <li><Link to="/products" className="text-white text-decoration-none">Popular Products</Link></li>
                <li><Link to="/testimonials" className="text-white text-decoration-none">Testimonials</Link></li>
                <li><Link to="/faq" className="text-white text-decoration-none">FAQ</Link></li>
              </ul>
            </div>

            <div className="mb-4 mb-md-0">
              <h5 className="fw-bold">Follow Us</h5>
              <ul className="list-unstyled mt-3">
                <li><Link to="#" className="text-white text-decoration-none">Facebook</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Instagram</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">LinkedIn</Link></li>
                <li><Link to="#" className="text-white text-decoration-none">Twitter</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="fw-bold">Contact Us</h5>
              <ul className="list-unstyled mt-3">
                <li> +91-XXX-XXXX-XXX</li>
              </ul>
              <h5 className="fw-bold mt-3">Address</h5>
              <ul className="list-unstyled mt-3">
                <li> KMPL Group, Chennai, Tamil Nadu, India</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Policy & Disclaimer Section */}
      <div className="py-4 mt-4 border-top">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center">
              <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center gap-3">
                <Link to="/policy" className="text-white text-decoration-none fw-bold px-3 py-1 link-hover">Privacy Policy</Link>
                <span className="text-white d-none d-md-block">|</span>
                <Link to="/disclaimer" className="text-white text-decoration-none fw-bold px-3 py-1 link-hover">Disclaimer</Link>
                <span className="text-white d-none d-md-block">|</span>
                <Link to="/terms" className="text-white text-decoration-none fw-bold px-3 py-1 link-hover">Terms of Service</Link>
              </div>
              <p className="text-light mt-3 mb-0 small">
                By using our site, you acknowledge that you have read and understand our policies.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;



