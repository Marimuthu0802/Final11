import React from "react";
import { Container } from "react-bootstrap";
import backgroundvideo from "../../../assets/images/videos/garden.mp4"; 

const Commercialvideo = () => {
  return (
    <Container className="text-center mt-4">
      <video className="w-100 rounded shadow-lg" autoPlay loop muted playsInline>
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video format
      </video>
    </Container>
  );
};

export default Commercialvideo;