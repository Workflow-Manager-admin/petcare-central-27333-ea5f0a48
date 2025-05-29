import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pets from "./pages/Pets";
import Routines from "./pages/Routines";
import Medical from "./pages/Medical";
import Reminders from "./pages/Reminders";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
