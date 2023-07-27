import React from "react";

export default function Card({ name, status, species, gender, origin, image, handleClose }) {
   return (
      <div>
         <button onClick={handleClose}>X</button> {/* Llamar a handleClose en lugar de onClose */}
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt='' />
      </div>
   );
}
