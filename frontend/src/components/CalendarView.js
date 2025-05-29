import React from "react";
import "./CalendarView.css";

// PUBLIC_INTERFACE
function CalendarView() {
  return (
    <div className="pcc-calendar-view">
      <div className="pcc-calendar-heading">Calendar & Routines (placeholder)</div>
      <div className="pcc-calendar-placeholder">
        {/* This would hold the interactive calendar component in future */}
        <span style={{ color: "var(--color-muted)" }}>
          Calendar routines and tracker UI will display here.
        </span>
      </div>
    </div>
  );
}

export default CalendarView;
