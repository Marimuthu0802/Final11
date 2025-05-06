import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  
  return (
    <div
      className="d-flex flex-column shadow-lg text-white p-4"
      style={{ width: "260px", minHeight: "100vh", background: "linear-gradient(135deg, #4b6cb7, #182848)" }}
    >
      {/* Profile Section */}
      <div className="text-center mb-4">
        <img src="/logo.png" alt="Profile" className="rounded-circle mb-2 border border-light" style={{ width: "80px", height: "80px" }} />
        <h5 className="fw-bold">Admin Name</h5>
        <p className="text-light small">Administrator</p>
      </div>

      <ul className="nav flex-column gap-2">
        {[ 
          // { id: "profile", label: "👤 Profile" },
          { id: "dashboard", label: "📊 Dashboard" },
          { id: "statistics", label: "📈 Statistics"},
          { id: "manage", label: "➕ Manage" },
          
        ].map((item) => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-link w-100 text-start rounded py-2 fw-bold d-flex align-items-center ${activeTab === item.id ? "active bg-light text-dark" : "text-white bg-transparent"}`}
              onClick={() => setActiveTab(item.id)}
              style={{ transition: "0.3s", fontSize: "1rem" }}
            >
              {item.label}
            </button>
          </li>
        ))}
        

      </ul>
    </div>
  );
};

export default Sidebar;
