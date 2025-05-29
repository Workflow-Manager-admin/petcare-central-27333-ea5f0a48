import React from "react";
import "./ReminderList.css";

// Dummy data
const reminders = [
  { id: 1, text: "Vet appointment for Bella", due: "Today", type: "appointment" },
  { id: 2, text: "Vaccination for Leo", due: "Tomorrow", type: "vaccine" },
  { id: 3, text: "Feeding time for Bella", due: "2:00pm", type: "feeding" }
];

// PUBLIC_INTERFACE
function ReminderList() {
  return (
    <div className="pcc-reminder-card">
      <div className="pcc-reminder-header">
        Reminders <span className="pcc-badge">{reminders.length}</span>
      </div>
      <ul>
        {reminders.map(rm => (
          <li key={rm.id}>
            <span>{rm.text}</span>
            <span className="pcc-reminder-due">{rm.due}</span>
          </li>
        ))}
      </ul>
      <button className="pcc-cta-btn">View All</button>
    </div>
  );
}

export default ReminderList;
