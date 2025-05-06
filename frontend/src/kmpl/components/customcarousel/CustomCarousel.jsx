import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const images = [
  "./src/assets/images/original/interior/bedroom_with_plants.jpg",
  "./src/assets/images/original/interior/hall_luxury.jpg",
  "./src/assets/images/original/interior/kitchen_with_money_plants.jpg",
  "./src/assets/images/original/interior/relaxing_outdoor_space.jpg",
  "./src/assets/images/original/interior/camping_relaxing_place.jpg",
  "./src/assets/images/original/interior/relaxing_balcony.jpg",
];

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Row className="mt-5 justify-content-center">
        <Col xs={12} md={10} lg={9}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            controls={true}
            interval={5000} // Auto-scroll every 5 seconds
            className="multi-item-carousel"
          >
            {Array.from({ length: Math.ceil(images.length / 3) }).map((_, i) => (
              <Carousel.Item key={i}>
                <div className="carousel-inner-container">
                  {images.slice(i * 3, i * 3 + 3).map((img, idx) => (
                    <div className="carousel-item-custom" key={idx}>
                      <img src={img} alt={`Slide ${i * 3 + idx}`} className="rounded-5 zoom" />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

// Inline CSS
const styles = `
  .multi-item-carousel .carousel-inner-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 10px;
  }

  .multi-item-carousel .carousel-item-custom {
    flex: 1 1 30%;
    max-width: 30%;
    height: 400px;
    padding: 5px;
  }

  .multi-item-carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .zoom {
    transition: transform 0.2s;
  }

  .zoom:hover {
    transform: scale(1.05);
    border-radius: 2px;
  }

  /* Responsive Adjustments */
  @media (max-width: 992px) {
    .multi-item-carousel .carousel-item-custom {
      flex: 1 1 45%;
      max-width: 45%;
      height: 350px;
    }
  }

  @media (max-width: 768px) {
    .multi-item-carousel .carousel-item-custom {
      flex: 1 1 100%;
      max-width: 100%;
      height: 280px;
    }
  }

  @media (max-width: 576px) {
    .multi-item-carousel .carousel-item-custom {
      height: 250px;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default CustomCarousel;


