import React from "react";
import { Carousel } from "react-bootstrap";
import "./CustomCarousel.css"; // Custom styles

// Import images directly
import image1 from "../../../../assets/images/1.jpg";
import image2 from "../../../../assets/images/2.jpg";
import image3 from "../../../../assets/images/Tower.jpg";
import image4 from "../../../../assets/images/5 (1).jpg";
import image5 from "../../../../assets/images/6.jpg";

const CustomCarousel = () => {
  const slides = [
    {
      id: 1,
      src: image1,
      alt: "Property view 1"
    },
    {
      id: 2,
      src: image2,
      alt: "Property view 2"
    },
    {
      id: 3,
      src: image3,
      alt: "Tower view"
    },
    {
      id: 4,
      src: image4,
      alt: "Property view 4"
    },
    {
      id: 5,
      src: image5,
      alt: "Property view 5"
    },
  ];

  return (
    <Carousel 
      fade 
      interval={3000} 
      className="custom-carousel"
      indicators={true}
      prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
    >
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img 
            className="d-block w-100 carousel-img" 
            src={slide.src} 
            alt={slide.alt} 
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;