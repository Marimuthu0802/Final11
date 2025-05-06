import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

const AdminDash = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="d-flex flex-column vh-100">
      {/* <Header /> */}
      <div className="d-flex flex-grow-1">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-grow-1 d-flex flex-column">
          <Header />
          <Content activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
