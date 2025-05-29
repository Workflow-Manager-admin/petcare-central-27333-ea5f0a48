import React, { useState } from "react";
import "./Medical.css";

// Dummy data for tabs
const tabs = ["All Records", "Vaccinations", "Prescriptions", "Vet Visits"];
const records = [
  { id: 1, type: "Vaccination", pet: "Bella", date: "2024-01-18", note: "Rabies vaccine" },
  { id: 2, type: "Prescription", pet: "Leo", date: "2024-04-21", note: "Deworming" },
  { id: 3, type: "Vet Visits", pet: "Bella", date: "2024-05-10", note: "Annual checkup" }
];

// PUBLIC_INTERFACE
function Medical() {
  const [selectedTab, setSelectedTab] = useState("All Records");
  return (
    <div>
      <div className="medical-header">
        <h2>Medical Records</h2>
        <button className="pcc-cta-btn">+ Add Record</button>
      </div>
      <div className="medical-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={selectedTab === tab ? "medical-tab active" : "medical-tab"}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="medical-records-list">
        {records
          .filter(r => selectedTab === "All Records" || r.type === selectedTab)
          .map(r => (
            <div className="medical-card" key={r.id}>
              <b>{r.type}</b> - {r.pet} <br />
              <span className="medical-date">{r.date}</span>
              <div>{r.note}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Medical;
