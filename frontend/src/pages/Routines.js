import React from "react";
import CalendarView from "../components/CalendarView";
import "./Routines.css";

// Dummy routines
const routines = [
  { id: 1, pet: "Bella", type: "Feeding", time: "8:00am" },
  { id: 2, pet: "Leo", type: "Litter Box", time: "Morning" },
  { id: 3, pet: "Bella", type: "Walk", time: "6:00pm" }
];

// PUBLIC_INTERFACE
function Routines() {
  return (
    <div>
      <div className="routines-header">
        <h2>Routine Scheduler</h2>
        <button className="pcc-cta-btn">+ Add Routine</button>
      </div>
      <CalendarView />
      <div>
        <h3>Today's Routines</h3>
        <table className="pcc-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {routines.map(rt => (
              <tr key={rt.id}>
                <td>{rt.pet}</td>
                <td>{rt.type}</td>
                <td>{rt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Routines;
