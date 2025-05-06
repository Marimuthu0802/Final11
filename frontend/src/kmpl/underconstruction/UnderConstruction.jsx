import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";
import { Button, Container, Modal  } from "react-bootstrap";
import { FaTools, FaHammer, FaHardHat, FaPencilRuler } from "react-icons/fa";
import { useState } from "react";
import "./UnderConstruction.css"; // Custom CSS file

const UnderConstruction = () => {
   const [showAlert, setShowAlert] = useState(false);
  return (
    <Container fluid className="under-construction-container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <div className="construction-icons mb-4">
        <FaTools className="text-green rotating-icon" size={60} />
        <FaHammer className="text-green bouncing-icon" size={50} />
        <FaHardHat className="text-green floating-icon" size={55} />
        <FaPencilRuler className="text-green swinging-icon" size={50} />
      </div>

      <h1 className="display-3 fw-bold text-white mb-3">KMPL-GRAND</h1>

      {/* <div className="construction-bar mb-4">
        <div className="progress progress-striped">
          <div className="progress-bar progress-bar-animated" style={{ width: "65%" }}></div>
        </div>
        <small className="text-light">Construction Progress: 65%</small>
      </div> */}

      <p className="lead text-white mb-4 px-3">
        We're working hard to bring you an amazing experience.  
        <br />
        Our site will be ready soon!
      </p>

      <div className="d-flex gap-3">
        <Button 
          as={Link} 
          to="/properties" 
          variant="dark" 
          className="mt-3 px-4 py-2 fw-bold rounded-pill shadow-sm hover-grow btn-green"
        >
          Go Back To Apartment
        </Button>
        <Button variant="dark" className="mt-3 px-4 py-2 fw-bold rounded-pill shadow-sm hover-grow btn-green" onClick={() => setShowAlert(true)}>
            Get Updates 📩
          </Button>
      </div>

      <Modal show={showAlert} onHide={() => setShowAlert(false)} centered>
              <div className="custom-alert">
                <h2 className="text-highlight">📢 Stay Updated!</h2>
                <p>We’ll notify you with the latest updates on our projects.</p>
                <Button className="btn-primary-custom" onClick={() => setShowAlert(false)}>
                  Close
                </Button>
              </div>
            </Modal>

            <div className="mt-5 text-light text-center">
  <h3 className="fw-bold text-uppercase" style={{ letterSpacing: "2px", color: "#4CAF50" }}>
    UNDER CONSTRUCTION
  </h3>
  <h1 
    className="fw-bold display-4"
    style={{
      color: "#ffffff",
      textShadow: "4px 4px 15px rgba(0, 255, 0, 0.6)", // Green glow effect
      letterSpacing: "3px",
      fontWeight: "900",
    }}
  >
    COMING SOON
  </h1>
</div>
    </Container>
  );
};

export default UnderConstruction;
