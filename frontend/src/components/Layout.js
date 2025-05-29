import React from "react";
import Sidebar from "./Sidebar";
import "./Layout.css";

// PUBLIC_INTERFACE
function Layout({ children }) {
  return (
    <div className="pcc-root">
      <Sidebar />
      <main className="pcc-content">{children}</main>
    </div>
  );
}

export default Layout;
