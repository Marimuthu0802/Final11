import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./partners.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { SiXdadevelopers, SiAffinitydesigner, SiNginxproxymanager } from "react-icons/si";
import { GrServices, GrTechnology } from "react-icons/gr";
import Topbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const partners = [
  { src: "/src/assets/images/partners-img/logo-1.svg", alt: "Chevron" },
  { src: "/src/assets/images/partners-img/logo-2.svg", alt: "Chipotle" },
  { src: "/src/assets/images/partners-img/logo-3.svg", alt: "MAA" },
  { src: "/src/assets/images/partners-img/logo-4.svg", alt: "Lowe's" },
  { src: "/src/assets/images/partners-img/logo-5.svg", alt: "Hess" },
  { src: "/src/assets/images/partners-img/logo-6.svg", alt: "Chipote" },
  { src: "/src/assets/images/partners-img/logo-7.svg", alt: "MA" },
  { src: "/src/assets/images/partners-img/logo-8.svg", alt: "Loe's" },
  { src: "/src/assets/images/partners-img/logo-9.svg", alt: "Hes" }
];

const data = [
  {
    icon: <MdOutlineDeveloperBoard style={{ fontSize: "34px" }} />,
    title: " Leading Developers",
    description: "We collaborate with top real estate developers to bring you premium apartments and row houses. Our partners ensure world-class construction quality, modern architecture, and top-notch facilities."
  },
  {
    icon: <SiXdadevelopers style={{ fontSize: "30px", marginTop: "5px" }} />,
    title: "Mortgage & Financial Services",
    description: "Finding your dream home is easy with our trusted financial partners. Enjoy competitive mortgage rates, simplified loan approvals, and expert financial guidance tailored to your needs."
  },
  {
    icon: <GrServices style={{ fontSize: "30px", marginTop: "5px" }} />,
    title: "Legal & Compliance",
    description: "Our legal experts ensure a hassle-free property transaction by handling documentation, ownership verification, and compliance, giving you peace of mind when purchasing or selling properties."
  },
  {
    icon: <SiAffinitydesigner style={{ fontSize: "30px", marginTop: "5px" }} />,
    title: "Interior & Home Design",
    description: "Our interior design partners help you customize your space to match your vision. Whether it's a modern apartment or a classic row house, we provide design solutions that transform your home."
  },
  {
    icon: <SiNginxproxymanager style={{ fontSize: "30px", marginTop: "5px" }} />,
    title: "Property Management",
    description: "Managing a property is easier with our professional property management partners, offering tenant screening, rental assistance, and end-to-end maintenance solutions."
  },
  {
    icon: <GrTechnology style={{ fontSize: "30px", marginTop: "5px" }} />,
    title: "Smart Realty Solutions",
    description: "We leverage technology to enhance real estate experiences. Our partners use AI-driven insights, virtual property tours, and digital marketing to maximize property visibility."
  }
];

const Partners = () => {
  return (
    <>
    <Topbar />
      {/* Hero Section */}
      <section className="hero-section text-white text-center position-relative overflow-hidden py-5 mt-5" style={{ background: "linear-gradient(135deg, #0f9d58, #00796b)", height: "100vh" }}>
        
        <div className="container position-relative py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">We Make Your Real Estate <span className="text-warning">Dreams Happen</span></h1>
              <p className="mt-3">
                Explore premium apartments and row houses built with trust and quality by KMPL-GRAND.
              </p>
              <button className="btn btn-warning mt-3">Get Started</button>
            </div>
            <div className="col-md-6">
              <img src="./src/assets/images/partners-img/pat-lan-image.svg" alt="Real Estate" className="img-fluid rounded" />
            </div>
          </div>
        </div>
        <img src="./src/assets/images/partners-img/Group 111.svg" className="hero-blur-img  position-absolute top-0 start-0 "alt="blur-img "  style={{ width: "100%" }}></img>
      </section>

      {/* Trusted Partners Section */}
      <section className="partners-section text-center py-5 bg-white">
        <div className="container">
          <h2 className="text-success fw-bold">Our Trusted Partners</h2>
          <p className="text-muted">
            We partner with leading companies to provide a seamless property buying and ownership experience.
          </p>
          <div className="row align-items-center mt-4">
            <div className="col-md-6 text-start">
              <h4 className="fw-bold text-success">Why Choose Our Partners?</h4>
              <p>
                Our trusted partners include top-tier developers, financial institutions, legal experts, and property managers. 
                We ensure that your property transactions are secure, financing is stress-free, and ownership is smooth.
              </p>
              <button className="btn btn-success mt-3">Learn More</button>
            </div>
            <div className="col-md-6">
              <img src="./src/assets/images/partners-img/contact-img-1.svg" alt="Partners" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Collaboration Section */}
      <section className="partners-section text-center py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="./src/assets/images/partners-img/Contact-img.svg" height={700} width={650} alt="Network" className="img-fluid" />
            </div>
            <div className="col-md-6 text-start">
              <h4 className="fw-bold text-success">Innovative Real Estate Solutions</h4>
              <p>
                Our industry collaborations help us integrate smart technologies, sustainable architecture, and modern home designs. 
                Whether you're an investor or a homebuyer, we ensure you get the best property options.
              </p>
              <button className="btn btn-success mt-3">Get Started</button>
            </div>
          </div>

          {/* Partners Carousel */}
          <Carousel
            responsive={{
              superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
              desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
              tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
            }}
            infinite
            autoPlay
            autoPlaySpeed={2000}
            arrows={false}
          >
            {partners.map((partner, index) => (
              <div key={index} className="p-3">
                <img src={partner.src} alt={partner.alt} className="img-fluid" style={{ maxHeight: "50px" }} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Partner Services */}
      <section className="py-5 px-3">
        <div className="bg-light p-4 rounded d-flex justify-content-between flex-wrap gap-3">
          {data.map((item, i) => (
            <div key={i} className="card border-0 shadow-sm rounded-lg card-hover" style={{ width: "22rem", transition: "0.3s" }}>
              <div className="card-body p-4 d-flex flex-column align-items-start">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-light icon-hover">
                    {item.icon}
                  </div>
                  <h5 className="card-title m-0">{item.title}</h5>
                </div>
                <p className="card-text text-muted mt-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partners;
