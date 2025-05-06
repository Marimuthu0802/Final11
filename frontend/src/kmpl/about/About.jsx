// import React from "react";
// import { GoHomeFill } from "react-icons/go";
// import { BsBuildingsFill, BsAwardFill } from "react-icons/bs";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
// import Footer from "../components/Footer";
// import Topbar from "../components/navbar/Navbar";

// const About = () => {
//   return (
//     <>
//       <Topbar />

//       <Container className="py-5 mt-5">
//         <Row className="text-center">
//           <h1 className="text-success fw-bold" style={{ fontSize: "50px" }}>
//             About Us
//           </h1>
//         </Row>

//         <Row className="mt-4 align-items-center">
//           {/* Left Column: Content */}
//           <Col lg={6}>
//             <Row className="text-center">
//               <Col md={4} className="mb-4">
//                 <p className="fs-3 fw-bold text-dark">140+</p>
//                 <p className="text-secondary fs-5">Landmarks</p>
//                 <GoHomeFill size={40} className="text-success" />
//                 <p className="fs-5 fw-bold text-dark mt-2">
//                   Designing and innovating great homes
//                 </p>
//               </Col>
//               <Col md={4} className="mb-4">
//                 <p className="fs-3 fw-bold text-dark">50K+</p>
//                 <p className="text-secondary fs-5">Customers</p>
//                 <BsBuildingsFill size={40} className="text-success" />
//                 <p className="fs-5 fw-bold text-dark mt-2">
//                   Building aspirations with our homes
//                 </p>
//               </Col>
//               <Col md={4} className="mb-4">
//                 <p className="fs-3 fw-bold text-dark">53M+</p>
//                 <p className="text-secondary fs-5">Sq. feet developed</p>
//                 <BsAwardFill size={40} className="text-success" />
//                 <p className="fs-5 fw-bold text-dark mt-2">
//                   Delivering on time, every time
//                 </p>
//               </Col>
//             </Row>

//             <p className="fs-6 text-dark">
//               **KMPL-GRAND**, founded in **1976**, has been at the forefront of **real estate development** for nearly five decades. We specialize in constructing and selling **premium 1, 2, and 3 BHK apartments** and **row houses** across **Chennai, Coimbatore, Bengaluru, and Hyderabad**.
//             </p>
//             <p className="fs-6 text-dark">
//               With a commitment to **quality, innovation, and sustainability**, we have completed over **140+ landmark projects**, delivering more than **53 million square feet of developed space**. Every project is designed to **blend luxury with affordability**, ensuring that homeowners experience modern living with the best amenities.
//             </p>
//             <p className="fs-6 text-dark">
//               Our reputation is built on **trust, transparency, and timely delivery**, making us a preferred choice for over **50,000 satisfied customers**. Whether it’s a compact home for a young professional or a spacious villa for a growing family, KMPL-GRAND offers **homes tailored to every lifestyle**.
//             </p>
//             <p className="fs-6 text-dark">
//               We also **embrace sustainable practices**, integrating **eco-friendly materials, green landscapes, and energy-efficient designs** in our developments. Our goal is to create **communities that offer comfort, security, and connectivity**, shaping the future of urban living.
//             </p>
//           </Col>

//           {/* Right Column: Image */}
//           <Col lg={6} className="text-center">
//             <img
//               src="./src/assets/images/aboutimg.png"
//               alt="KMPL-GRAND Construction"
//               className="img-fluid rounded-4"
//             />
//           </Col>
//         </Row>
//       </Container>

//       {/* Footer */}
//       <Container fluid>
//         <Row className="mt-5">
//           <Footer />
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default About;


import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsBuildingsFill, BsAwardFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Topbar from "../components/navbar/Navbar";

const About = () => {
  return (
    <>
      <Topbar />

      <Container className="py-5 mt-5">
        <Row className="text-center">
          <h1 className="text-success fw-bold" style={{ fontSize: "50px" }}>
            About Us
          </h1>
        </Row>

        <Row className="mt-4 align-items-center">
          {/* Left Column: Content */}
          <Col lg={6}>
            <Row className="text-center">
              <Col md={4} className="mb-4">
                <p className="fs-3 fw-bold text-dark">140+</p>
                <p className="text-secondary fs-5">Landmarks</p>
                <GoHomeFill size={40} className="text-success" />
                <p className="fs-5 fw-bold text-dark mt-2">
                  Designing and innovating great homes
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <p className="fs-3 fw-bold text-dark">50K+</p>
                <p className="text-secondary fs-5">Customers</p>
                <BsBuildingsFill size={40} className="text-success" />
                <p className="fs-5 fw-bold text-dark mt-2">
                  Building aspirations with our homes
                </p>
              </Col>
              <Col md={4} className="mb-4">
                <p className="fs-3 fw-bold text-dark">53M+</p>
                <p className="text-secondary fs-5">Sq. feet developed</p>
                <BsAwardFill size={40} className="text-success" />
                <p className="fs-5 fw-bold text-dark mt-2">
                  Delivering on time, every time
                </p>
              </Col>
            </Row>

            <p className="fs-6 text-dark">
              <strong>KMPL-GRAND</strong>, founded in <strong>1976</strong>, has been at the forefront of <strong>real estate development</strong> for nearly five decades. We specialize in constructing and selling <strong>premium 1, 2, and 3 BHK apartments</strong> and <strong>row houses</strong> across <strong>Chennai, Coimbatore, Bengaluru, and Hyderabad</strong>.
            </p>
            <p className="fs-6 text-dark">
              With a commitment to <strong>quality, innovation, and sustainability</strong>, we have completed over <strong>140+ landmark projects</strong>, delivering more than <strong>53 million square feet of developed space</strong>. Every project is designed to <strong>blend luxury with affordability</strong>, ensuring that homeowners experience modern living with the best amenities.
            </p>
            <p className="fs-6 text-dark">
              Our reputation is built on <strong>trust, transparency, and timely delivery</strong>, making us a preferred choice for over <strong>50,000 satisfied customers</strong>. Whether it’s a compact home for a young professional or a spacious villa for a growing family, KMPL-GRAND offers <strong>homes tailored to every lifestyle</strong>.
            </p>
            <p className="fs-6 text-dark">
              We also <strong>embrace sustainable practices</strong>, integrating <strong>eco-friendly materials, green landscapes, and energy-efficient designs</strong> in our developments. Our goal is to create <strong>communities that offer comfort, security, and connectivity</strong>, shaping the future of urban living.
            </p>
          </Col>

          {/* Right Column: Image */}
          <Col lg={6} className="text-center">
            <img
              src="./src/assets/images/aboutimg.png"
              alt="KMPL-GRAND Construction"
              className="img-fluid rounded-4"
            />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container fluid>
        <Row className="mt-5">
          <Footer />
        </Row>
      </Container>
    </>
  );
};

export default About;
