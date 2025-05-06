import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router";
import { Button, Container } from "react-bootstrap";
import "./NotFound.css"; // Custom CSS for styling

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="not-found-container d-flex flex-column align-items-center justify-content-center text-center">
      {/* Background Overlay */}
      <div className="background-image"></div>
      <div className="overlay"></div>

      {/* Content Section */}
      <div className="content">
        <h1 className="display-1 fw-bold text-glow">404</h1>
        <h2 className="fs-3 text-white">Oops! Page Not Found</h2>
        <p className="text-light">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Button to Go Back */}
        <Button 
          as={Link} 
          to="/home" 
          variant="success" 
          className="mt-3 px-4 py-2 fw-bold rounded-pill shadow-sm btn-glow me-2"
        >
          Return to Home
        </Button>
        <Button 
          onClick={()=>navigate(-1)}
          className="mt-3 px-4 py-2 fw-bold rounded-pill shadow-sm btn-glow"
        >
          Back
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
