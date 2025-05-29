import React from "react";
import PetProfileCard from "../components/PetProfileCard";
import CalendarView from "../components/CalendarView";
import ReminderList from "../components/ReminderList";

// Placeholder pets data
const pets = [
  { id: 1, name: "Bella", breed: "Golden Retriever", age: 3, photo: "/placeholder-avatar1.png" },
  { id: 2, name: "Leo", breed: "Tabby Cat", age: 1, photo: "/placeholder-avatar2.png" }
];

// PUBLIC_INTERFACE
function Dashboard() {
  return (
    <div>
      <div style={{ display: "flex", gap: 28, marginBottom: 30, flexWrap: "wrap" }}>
        {pets.map(pet => (
          <PetProfileCard key={pet.id} pet={pet} />
        ))}
      </div>
      <div style={{ display: "flex", gap: 38, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: 2, minWidth: 300 }}>
          <h2 style={{ color: "var(--color-primary)" }}>Upcoming Routines</h2>
          <CalendarView />
        </div>
        <div style={{ flex: 1, minWidth: 240 }}>
          <ReminderList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
