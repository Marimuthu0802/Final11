import React from "react";
import { Container } from "react-bootstrap";
import kmpltour from "../../../assets/images/videos/apart-vid.mp4"; 

const VideoComponent = () => {
  return (
    <Container className="text-center mt-4">
      <video className="w-100 rounded shadow-lg" autoPlay loop muted playsInline>
        <source src={kmpltour} type="video/mp4" />
        Your browser does not support the video format
      </video>
    </Container>
  );
};

export default VideoComponent;