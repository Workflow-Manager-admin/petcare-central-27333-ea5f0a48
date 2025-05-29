import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPaw, FaBell, FaCog, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import "./NavBar.css";

// PUBLIC_INTERFACE
function NavBar() {
  // State for hamburger/open menu for mobile
  const [menuOpen, setMenuOpen] = useState(false);
  // Drop down menu state
  const [dropdown, setDropdown] = useState({pets: false, appoint: false, settings: false, account: false});
  const navRef = useRef(null);

  // Close mobile menu on route change or outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdown({pets: false, appoint: false, settings: false, account: false});
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => document.removeEventListener("mousedown", handleClickOutside, true);
  }, []);

  // Keyboard accessibility for dropdowns
  const handleToggleDropdown = (key) => setDropdown(d => ({
    ...Object.fromEntries(Object.keys(d).map(k => [k, false])),
    [key]: !d[key]
  }));

  // Used for ARIA active state
  const isAnyDropdownOpen = Object.values(dropdown).some(Boolean);

  return (
    <nav className="fec-navbar" ref={navRef} aria-label="Main Navigation">
      <div className="fec-navbar-content">
        <Link to="/" className="fec-navbar-logo" aria-label="FurEverCare Home">
          <FaPaw className="fec-navbar-logo-icon" /> <span className="fec-navbar-brand">FurEverCare</span>
        </Link>
        <button
          className="fec-navbar-hamburger"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="fec-navbar-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(m => !m)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`fec-navbar-menu${menuOpen ? " open" : ""}`}
          id="fec-navbar-menu"
          role="menubar"
        >
          <li>
            <NavLink to="/dashboard" className="fec-navbar-link" tabIndex={0} role="menuitem">
              Dashboard
            </NavLink>
          </li>
          <li
            className="fec-navbar-has-dropdown"
            aria-haspopup="true"
            aria-expanded={dropdown.pets}
            tabIndex={0}
            onMouseEnter={() => setDropdown(d => ({...d, pets: true}))}
            onMouseLeave={() => setDropdown(d => ({...d, pets: false}))}
            onFocus={() => setDropdown(d => ({...d, pets: true}))}
            onBlur={() => setDropdown(d => ({...d, pets: false}))}
          >
            <button
              className="fec-navbar-link fec-navbar-dropdown-btn"
              onClick={() => handleToggleDropdown("pets")}
              aria-label="My Pets, expand for submenu"
              aria-haspopup="true"
              aria-controls="fec-navbar-dropdown-pets"
            >
              My Pets
            </button>
            <ul
              className={`fec-navbar-dropdown${dropdown.pets ? " open" : ""}`}
              id="fec-navbar-dropdown-pets"
              role="menu"
            >
              <li><NavLink to="/pets/profile" role="menuitem" tabIndex={dropdown.pets ? 0 : -1}>Profile</NavLink></li>
              <li><NavLink to="/pets/health" role="menuitem" tabIndex={dropdown.pets ? 0 : -1}>Health Tracker</NavLink></li>
              <li><NavLink to="/pets/diet" role="menuitem" tabIndex={dropdown.pets ? 0 : -1}>Diet & Nutrition</NavLink></li>
              <li><NavLink to="/pets/activity" role="menuitem" tabIndex={dropdown.pets ? 0 : -1}>Activity</NavLink></li>
            </ul>
          </li>
          <li
            className="fec-navbar-has-dropdown"
            aria-haspopup="true"
            aria-expanded={dropdown.appoint}
            tabIndex={0}
            onMouseEnter={() => setDropdown(d => ({...d, appoint: true}))}
            onMouseLeave={() => setDropdown(d => ({...d, appoint: false}))}
            onFocus={() => setDropdown(d => ({...d, appoint: true}))}
            onBlur={() => setDropdown(d => ({...d, appoint: false}))}
          >
            <button
              className="fec-navbar-link fec-navbar-dropdown-btn"
              onClick={() => handleToggleDropdown("appoint")}
              aria-label="Appointments, expand for submenu"
              aria-haspopup="true"
              aria-controls="fec-navbar-dropdown-appoint"
            >
              Appointments
            </button>
            <ul
              className={`fec-navbar-dropdown${dropdown.appoint ? " open" : ""}`}
              id="fec-navbar-dropdown-appoint"
              role="menu"
            >
              <li><NavLink to="/appointments/manage" role="menuitem" tabIndex={dropdown.appoint ? 0 : -1}>Manage</NavLink></li>
              <li><NavLink to="/appointments/notes" role="menuitem" tabIndex={dropdown.appoint ? 0 : -1}>Notes/Documents</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/notifications" className="fec-navbar-link" tabIndex={0} role="menuitem">
              <FaBell className="fec-navbar-icon" /> Notifications
            </NavLink>
          </li>
          <li
            className="fec-navbar-has-dropdown"
            aria-haspopup="true"
            aria-expanded={dropdown.settings}
            tabIndex={0}
            onMouseEnter={() => setDropdown(d => ({...d, settings: true}))}
            onMouseLeave={() => setDropdown(d => ({...d, settings: false}))}
            onFocus={() => setDropdown(d => ({...d, settings: true}))}
            onBlur={() => setDropdown(d => ({...d, settings: false}))}
          >
            <button
              className="fec-navbar-link fec-navbar-dropdown-btn"
              onClick={() => handleToggleDropdown("settings")}
              aria-label="Settings, expand for submenu"
              aria-haspopup="true"
              aria-controls="fec-navbar-dropdown-settings"
            >
              <FaCog className="fec-navbar-icon" /> Settings
            </button>
            <ul
              className={`fec-navbar-dropdown${dropdown.settings ? " open" : ""}`}
              id="fec-navbar-dropdown-settings"
              role="menu"
            >
              <li><NavLink to="/settings" role="menuitem" tabIndex={dropdown.settings ? 0 : -1}>Settings Home</NavLink></li>
              <li><NavLink to="/support/contact" role="menuitem" tabIndex={dropdown.settings ? 0 : -1}>Support - Contact / Help</NavLink></li>
              <li><NavLink to="/support/about" role="menuitem" tabIndex={dropdown.settings ? 0 : -1}>About / Privacy</NavLink></li>
            </ul>
          </li>
          <li
            className="fec-navbar-has-dropdown fec-navbar-account"
            aria-haspopup="true"
            aria-expanded={dropdown.account}
            tabIndex={0}
            onMouseEnter={() => setDropdown(d => ({...d, account: true}))}
            onMouseLeave={() => setDropdown(d => ({...d, account: false}))}
            onFocus={() => setDropdown(d => ({...d, account: true}))}
            onBlur={() => setDropdown(d => ({...d, account: false}))}
            style={{marginLeft: "auto"}}
          >
            <button
              className="fec-navbar-link fec-navbar-dropdown-btn"
              onClick={() => handleToggleDropdown("account")}
              aria-label="Account, expand for submenu"
              aria-haspopup="true"
              aria-controls="fec-navbar-dropdown-account"
            >
              <FaUserCircle className="fec-navbar-icon" />
              Account
            </button>
            <ul
              className={`fec-navbar-dropdown fec-navbar-account-dropdown${dropdown.account ? " open" : ""}`}
              id="fec-navbar-dropdown-account"
              role="menu"
            >
              <li><NavLink to="/login" role="menuitem" tabIndex={dropdown.account ? 0 : -1}>Login</NavLink></li>
              <li><NavLink to="/signup" role="menuitem" tabIndex={dropdown.account ? 0 : -1}>Sign Up</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
