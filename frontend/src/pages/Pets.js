import React from "react";
import PetProfileCard from "../components/PetProfileCard";
import "./Pets.css";

// Placeholder data
const pets = [
  { id: 1, name: "Bella", breed: "Golden Retriever", age: 3, photo: "/placeholder-avatar1.png" },
  { id: 2, name: "Leo", breed: "Tabby Cat", age: 1, photo: "/placeholder-avatar2.png" }
];

// PUBLIC_INTERFACE
function Pets() {
  return (
    <div>
      <div className="pets-header">
        <h2>Registered Pets</h2>
        <button className="pcc-cta-btn">+ Add New Pet</button>
      </div>
      <div style={{ display: "flex", gap: 25, flexWrap: "wrap" }}>
        {pets.map(pet => (
          <PetProfileCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Pets;
