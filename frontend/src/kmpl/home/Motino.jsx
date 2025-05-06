/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";

const ImageGallery = () => {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const images = [
    "./src/assets/images/original/hall_with_sofa_for_thrice.jpg"  ,
    "./src/assets/images/1.jpg",
  ];

  return (
    <Container className="mt-5">
      <Row>
        {images.map((image, idx) => (
          <Col key={idx} md={6} className="d-flex justify-content-center">
            <motion.div
              className="card shadow-lg"
              variants={fadeInScale}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card.Img src={image} className="gallery-img" />
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGallery;
