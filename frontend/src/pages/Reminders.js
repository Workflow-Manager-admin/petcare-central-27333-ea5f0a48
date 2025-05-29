import React from "react";
import ReminderList from "../components/ReminderList";

// PUBLIC_INTERFACE
function Reminders() {
  return (
    <div>
      <h2>Your Reminders</h2>
      <ReminderList />
      <div style={{marginTop:"22px", color:"var(--color-muted)"}}>
        More reminder management features coming soon!
      </div>
    </div>
  );
}

export default Reminders;
