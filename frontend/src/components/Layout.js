import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import "./Layout.css";

// PUBLIC_INTERFACE
function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="pcc-root">
        <Sidebar />
        <main className="pcc-content">{children}</main>
      </div>
    </>
  );
}

export default Layout;
