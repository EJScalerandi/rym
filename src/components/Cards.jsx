import React from "react";
import Card from './Card';

export default function Cards({ characters, onClose }) {
  const handleClose = (id) => {
    onClose(id);
  };

  return (
    <div>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={() => handleClose(character.id)} // Llamar la función handleClose con el ID correcto
        />
      ))}
    </div>
  );
}
