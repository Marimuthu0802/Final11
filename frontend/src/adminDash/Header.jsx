import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router";

const Header = () => {
  return (
    // <nav
    //   className="navbar px-4 shadow-sm"
    //   style={{ background: "linear-gradient(135deg, #4b6cb7, #182848)", color: "white" }}
    // >
    //   <span className="navbar-brand mb-0 h4 fw-bold text-light">Admin Panel</span>
    
    // </nav>


    <nav
    className="navbar px-4 shadow-sm d-flex justify-content-between align-items-center"
    style={{
      background: "linear-gradient(135deg, #4b6cb7, #182848)",
      color: "white",
    }}
  >
    <span className="navbar-brand mb-0 h4 fw-bold text-light">
      Admin Panel
    </span>

    <div className="d-flex gap-4">
      {/* Home Icon with Caption */}
      <Link to="/" className="text-decoration-none text-light text-center">
        <div className="d-flex flex-column align-items-center">
          <i className="bi bi-house-door-fill" style={{ fontSize: "2rem" }}></i>
          <span style={{ fontSize: "0.9rem" }}>Home</span>
        </div>
      </Link>

      {/* Property Icon with Caption */}
      <Link to="/properties" className="text-decoration-none text-light text-center">
        <div className="d-flex flex-column align-items-center">
          <i className="bi bi-building" style={{ fontSize: "2rem" }}></i>
          <span style={{ fontSize: "0.9rem" }}>Properties</span>
        </div>
      </Link>
    </div>
  </nav>


    

  );
};

export default Header;
