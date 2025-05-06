import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router"; // ✅ Correct Import

const Topbar = () => {
  const [expanded, setExpanded] = useState(false); // ✅ Toggle state for responsive navbar

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded} // ✅ Ensure navbar collapses properly
      className="px-4 shadow-sm"
      style={{ backgroundColor: "#d0ac66" }}
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="KMPL GRAND Logo"
            width="50"
            height="50"
            className="me-2"
          />
          <span className="text-dark fw-semibold fs-5">KMPL GRAND</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
          onClick={() => setExpanded(expanded ? false : "expanded")} // ✅ Toggle navbar
        />
        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="mx-auto text-center">
            {["home", "about", "properties", "commercial", "partners", "CSR", "contact"].map((path) => (
              <NavLink
                key={path}
                to={path === "home" ? "/" : `/${path}`} // ✅ Home points to `/`
                className={({ isActive }) =>
                  `nav-link fw-semibold px-3 position-relative ${isActive ? "active-tab" : ""}`
                }
                onClick={() => setExpanded(false)} // ✅ Collapse navbar on link click
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#8b4513" : "#f1f8f4",
                  paddingBottom: "5px",
                  transition: "color 0.3s ease-in-out, border-bottom 0.3s ease-in-out",
                })}
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom CSS for Hover & Active Styling */}
      <style>
        {`
          .nav-link:hover {
            color: #1b5e20 !important; /* Green hover effect */
          }

          .active-tab {
            color: #8b4513 !important;
            font-weight: bold;
          }

          .active-tab::after {
            content: "";
            position: absolute;
            bottom: -3px;
            left: 50%;
            width: 100%;
            height: 3px;
            background-color: #8b4513;
            transform: translateX(-50%);
          }
        `}
      </style>
    </Navbar>
  );
};

export default Topbar;
