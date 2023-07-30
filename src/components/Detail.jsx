import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    Axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return () => setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>Detalle del Personaje</h1>
      <h2>Nombre: {character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin?.name}</p>
      {character.image && <img src={character.image} alt={character.name} />}
    </div>
  );
}