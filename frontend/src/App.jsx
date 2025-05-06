import React from "react";
import { Routes, Route } from "react-router";


//Page Route
import Home from "../src/kmpl/home/Home";
import About from "../src/kmpl/about/About";
import Apartment from "../src/kmpl/apartment/Apartment";
import Commercial from "../src/kmpl/commercial/Commercial";
import Partners from "../src/kmpl/Partners/Partners";
import Csr from "../src/kmpl/csr/Csr";
import ContactUs from "../src/kmpl/contact/Contact";

//Apartment Under Construction

import UnderConstruction from "./kmpl/underconstruction/UnderConstruction";


//Apartment Routes for each Project

import ValentLiving from "./kmpl/apartment/apartmentRoutes/chennai/ValentLiving";
import ElevantLiving from "./kmpl/apartment/apartmentRoutes/chennai/ElevantLiving";
import PearlCrest from "./kmpl/apartment/apartmentRoutes/chennai/PearlCrest";
import TheArcadia from "./kmpl/apartment/apartmentRoutes/chennai/TheArcadia";
import UrbanNest from "./kmpl/apartment/apartmentRoutes/bengaluru/UrbanNest";
import SunCity from "./kmpl/apartment/apartmentRoutes/bengaluru/SunCity";
import AuraLiving from "./kmpl/apartment/apartmentRoutes/bengaluru/AuraLiving";
import KMPLMoonCity from "./kmpl/apartment/apartmentRoutes/bengaluru/KMPLMoonCity";
import SunriseTower from "./kmpl/apartment/apartmentRoutes/coimbatore/SunriseTower";
import GrandVista from "./kmpl/apartment/apartmentRoutes/coimbatore/GrandVista";
import WhisperingPinesRow from "./kmpl/apartment/apartmentRoutes/coimbatore/WhisperingPinesRow";
import DeccanHeights from "./kmpl/apartment/apartmentRoutes/hyderabad/DeccanHeights";
import GolcondaGreens from "./kmpl/apartment/apartmentRoutes/hyderabad/GolcondaGreens";



//terms & conditions
import TermsAndConditions from "../src/kmpl/termsandcondition/Terms";
import Disclaimer from "../src/kmpl/termsandcondition/Disclaimer";
import Privacy from "../src/kmpl/termsandcondition/Policy";

//Not Found 
import NotFound from "../src/kmpl/notfound/NotFound";

//Admin
import AdminDash from "../src/adminDash/AdminDash";
import SiruvaniApartment from "./kmpl/apartment/apartmentRoutes/coimbatore/SiruvaniApartment";
import TranquilMeadows from "./kmpl/apartment/apartmentRoutes/hyderabad/TranquilMeadows";




const App = () => {
  return (
    <div>
      <Routes>

      {/* Under-Construction */}
        <Route path="/underconstruction" element={<UnderConstruction />} />
        

      {/* Page Route  */}
        <Route
          path="/"
          element={
              <Home />
          }
        />

        <Route
          path="/about"
          element={
              <About />
          }
        />
        <Route
          path="/properties"
          element={
              <Apartment />
          }
        />
        <Route
          path="/commercial"
          element={
              <Commercial />
          }
        />
        <Route
          path="/partners"
          element={
              <Partners />
          }
        />
        <Route
          path="/CSR"
          element={
              <Csr />
          }
        />
        <Route
          path="/contact"
          element={
              <ContactUs />
          }
        />
        <Route
          path="/terms"
          element={
              <TermsAndConditions />
          }
        />
        <Route
          path="/disclaimer"
          element={
              <Disclaimer />
          }
        />
        <Route
          path="/policy"
          element={
              <Privacy />
          }
        />


      {/* Apartment Routes for each Project */}
      <Route
          path="/properties/valent-living"
          element={
              < ValentLiving/>
          }
        />

        <Route
          path="/properties/elevant-living"
          element={
              < ElevantLiving />
          }
        />
        <Route
          path="/properties/pearl-crest"
          element={
              < PearlCrest />
          }
        />
        <Route
          path="/properties/the-arcadia"
          element={
              < TheArcadia />
          }
        />

        <Route
          path="/properties/urban-nest"
          element={
              < UrbanNest />
          }
        />

        <Route
          path="/properties/aura-living"
          element={
              < AuraLiving />
          }
        />




        <Route
          path="/properties/sun-city"
          element={
              < SunCity />
          }
        />




        <Route
          path="/properties/kmpl-moon-city"
          element={
              < KMPLMoonCity />
          }
        />


        <Route
          path="/properties/sunrise-tower"
          element={
              < SunriseTower />
          }
        />


        <Route
          path="/properties/grand-vista"
          element={
              < GrandVista />
          }
        />


        <Route
          path="/properties/whispering-pines-row"
          element={
              <WhisperingPinesRow />
          }
        />

        <Route
          path="/properties/siruvani-apartment"
          element={
              < SiruvaniApartment />
          }
        />

        <Route
          path="/properties/deccan-heights"
          element={
              < DeccanHeights />
          }
        />


        <Route
          path="/properties/tranquil-meadows"
          element={
              <TranquilMeadows />
          }
        />


        <Route
          path="/properties/golconda-greens"
          element={
              <GolcondaGreens />            
          }
        />


        {/* Admin Route */}
        <Route
          path="/admin"
          element={
              <AdminDash />
          }
        /> 

        {/* Not Found Handler */}
         <Route
          path="*" element={<NotFound />}
           /> 
      </Routes>
    </div>
  );
}

export default App;
