import React from "react";
import "./PetProfileCard.css";

// PUBLIC_INTERFACE
function PetProfileCard({ pet }) {
  return (
    <div className="pcc-pet-card">
      <img src={pet.photo} alt={pet.name} className="pcc-pet-avatar" />
      <div>
        <div className="pcc-pet-name">{pet.name}</div>
        <div className="pcc-pet-subtext">{pet.breed} · {pet.age} yr</div>
      </div>
    </div>
  );
}

export default PetProfileCard;
