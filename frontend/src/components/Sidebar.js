import React from "react";
import { NavLink } from "react-router-dom";
import { FaPaw, FaClock, FaStethoscope, FaBell, FaCog, FaHome } from "react-icons/fa";
import "./Sidebar.css";

// Dummy count for badge demonstration
const reminderCount = 3;

// PUBLIC_INTERFACE
function Sidebar() {
  return (
    <nav className="pcc-sidebar">
      <div className="pcc-sidebar-logo">
        <FaPaw style={{ marginRight: 9, color: "var(--color-primary)" }} size={28} />
        <span>PetCare Central</span>
      </div>
      <NavLink to="/dashboard" className={({isActive})=> isActive ? "active" : ""}>
        <FaHome /> Dashboard
      </NavLink>
      <NavLink to="/pets" className={({isActive})=> isActive ? "active" : ""}>
        <FaPaw /> Pets
      </NavLink>
      <NavLink to="/routines" className={({isActive})=> isActive ? "active" : ""}>
        <FaClock /> Routines
      </NavLink>
      <NavLink to="/medical" className={({isActive})=> isActive ? "active" : ""}>
        <FaStethoscope /> Medical
      </NavLink>
      <NavLink to="/reminders" className={({isActive})=> isActive ? "active reminders-link" : "reminders-link"}>
        <FaBell />
        Reminders
        <span className="pcc-badge">{reminderCount}</span>
      </NavLink>
      <div style={{ flex: 1 }} />
      <NavLink to="/settings" className={({isActive})=> isActive ? "active" : ""}>
        <FaCog /> Settings
      </NavLink>
    </nav>
  );
}

export default Sidebar;
