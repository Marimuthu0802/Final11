import React from "react";
import DashBoard from "./DashBoard"; 
import ManageApartments from "./component/ManageApartment";
import PropertyBarChart from "./PropertyBarChart";
// Import the Profile component

const Content = ({ activeTab }) => {
  return (
    <div className="flex-grow-1 p-5 bg-light d-flex align-items-center justify-content-center text-center">
      {/* {activeTab === "home" && <h2 className="text-dark"><Link to = "/home" className="text-decoration-none"> 🏡 </Link> Welcome to Admin Dashboard </h2>} */}
      {/* {activeTab === "home" && <PropertyDash />}  */}

      {activeTab === "statistics" && <PropertyBarChart />} 
      {activeTab === "dashboard" && <DashBoard />} 
      {activeTab === "manage" && <ManageApartments/>} 

    </div>
  );
};

export default Content;
