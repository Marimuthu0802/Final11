import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../home/home.css";
import { NavLink } from "react-router"; 
import Topbar from "../components/navbar/Navbar";

const Csr = () => {
  const [safetyExpanded, setSafetyExpanded] = useState(false);
  const [roadsExpanded, setRoadsExpanded] = useState(false);
  const [aertExpanded, setAertExpanded] = useState(false);
  const [caresExpanded, setCaresExpanded] = useState(false);

  const toggleSafetyContent = () => {
    setSafetyExpanded(!safetyExpanded);
  };

  const toggleRoadsContent = () => {
    setRoadsExpanded(!roadsExpanded);
  };

  const toggleAertContent = () => {
    setAertExpanded(!aertExpanded);
  };

  const toggleCaresContent = () => {
    setCaresExpanded(!caresExpanded);
  };

  return (
    <>
      {/* Navbar */}
      <Topbar />
      
      {/* Image with Text Overlay */}
      <Container fluid className="position-relative p-0">
        <img
          src="../src/assets/images/csr.jpg"
          alt="Efforts Towards a Better World"
          className="w-100 img-fluid"
          style={{ height: "auto", objectFit: "cover" }}
        />
      </Container>

      {/* CSR Content */}
      <Container className="mt-5">
        <div className="card shadow-lg p-4" style={{ backgroundColor: "#f8f9fa" }}>
          <h2 className="text-center mb-4 text-success">Corporate Social Responsibility</h2>
          
          {/* Safety Booklets Section */}
          <div className="csr-section mb-5">
            <h3>KMPL GRAND – Safety Booklets for Kids</h3>
            <ul className="content-list">
              <li>Children are our greatest assets and our primary source of joy, unfortunately they are among the most vulnerable too.</li>
              <li>This campaign is to stimulate changes in attitudes, behavior and the environment to promote child safety by conducting public outreach and awareness campaigns through schools and colleges.</li>
              <li>The campaign's aim is to educate young school children by involving teachers and parents, about potential dangers they face in their day to day life. When a child knows what to do to stay safe, it enables them to avoid dangerous situations and potential accidents.</li>
            </ul>

            {safetyExpanded && (
              <div className="expanded-content">
                <p>One will be shocked to see the National Crime Records Bureau's (NCRB) annual report on Crime against children.</p>
                <p>While according to RTIs filed by an NGO in 2009, an average of 60,000 children were reported missing annually</p>
                <p>It is our endeavor that today's kids don't become tomorrow's statistics. "Ignorance is crime", therefore the Campaign was coined with the objective of reaching out to a larger audience and to establish a sustained campaign to promote Child Safety.</p>
                <h5>Campaign Flow:</h5>
                <ul>
                  <li>50+ schools were selected in the city</li>
                  <li>50,000 books were distributed to all the students from Kindergarten to class 5</li>
                  <li>Posters and banners in the respective schools highlighting safety</li>
                  <li>Department of child welfare and police department also took part of the activity to educate the kids on the do's and don'ts of safety</li>
                  <li>Kidwise would reach the parents through schools</li>
                </ul>
              </div>
            )}

            <Button 
              variant="success" 
              onClick={toggleSafetyContent}
              className="mt-3"
            >
              {safetyExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>

          {/* KMPL Safety Roads Campaign Section */}
          <div className="csr-section mb-5">
            <h3>KMPL Safety Roads Campaign</h3>
            <p>According to WHO's 2014 report, about 1.2 million people lose their lives in road related accidents across the world and India ranks higher in road-safety related deaths. With some caution, care and sound road sense, the number of accidents happening on daily basis can be controlled.</p>

            {roadsExpanded && (
              <div className="expanded-content">
                <h5>Campaign Flow:</h5>
                <ul>
                  <li>Children are the best medium to help spread awareness amongst the general public on road-safety</li>
                  <li>The 4-day event was held at 25 important and busy signals at Ambattur,Egmore,  Thirumangalam, Anna Nagar and Sembiam</li>
                  <li>The event was flagged off on 8th January, 2025 at Thirumangalam by Mr. Kishore, IPS – Joint Commissioner of Police Traffic</li>
                  <li>Children educated motorists in and around the area with banners and placards</li>
                  <li>Road safety leaflets have been distributed by the children</li>
                  <li>Each child was given a participation certificate for his/her efforts</li>
                </ul>
              </div>
            )}

            <Button 
              variant="success" 
              onClick={toggleRoadsContent}
              className="mt-3"
            >
              {roadsExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>

          {/* KMPL Emergency Response Team Section */}
          <div className="csr-section mb-5">
            <h3>KMPL Emergency Response Team – AERT</h3>
            <p>The real lifesavers – The emergency response team (AERT-KMPL Emergency Response Team), a voluntary organization, is dedicated in helping people to create awareness about lifesaving skills. The core idea behind this initiative is to reduce and prevent accidents and save lives.</p>

            {aertExpanded && (
              <div className="expanded-content">
                <h5>The topics that are part of the AERT are:</h5>
                <ul>
                  <li>BASIC LIFE SAVING SKILLS</li>
                  <li>BASIC FIRST AID</li>
                  <li>FIRE FIGHTING</li>
                  <li>EVACUATION DRILL</li>
                  <li>DISASTER MANAGEMENT TRAINING PROGRAM, etc.</li>
                </ul>
                <p>We at KMPL have a SAFETY team that is solely dedicated in imparting education to various schools. We always believe in moulding the younger generation as it is our belief that by touching the lives of children, we can build a better tomorrow.</p>
                <p>KMPL also conducts fire safety drills in various apartments and does not restrict it to the KMPL family alone.</p>
              </div>
            )}

            <Button 
              variant="success" 
              onClick={toggleAertContent}
              className="mt-3"
            >
              {aertExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>

          {/* KMPL Cares Section */}
          <div className="csr-section">
            <h3>KMPL Cares</h3>
            <p>Fund raising event to construct a school classroom for handicapped kids</p>
            <p>Jazz event has been organized by KMPL and Gino and Louis Banks has performed in the event.</p>

            {caresExpanded && (
              <div className="expanded-content">
                <h5>Event Highlights:</h5>
                <ul>
                  <li>Successful fundraising campaign for special needs education</li>
                  <li>Celebrity jazz performance to support the cause</li>
                  <li>Construction of accessible classroom facilities</li>
                  <li>Community engagement for inclusive education</li>
                </ul>
              </div>
            )}

            <Button 
              variant="success" 
              onClick={toggleCaresContent}
              className="mt-3"
            >
              {caresExpanded ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Csr;