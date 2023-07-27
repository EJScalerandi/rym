import React, { useState } from 'react';

export default function SearchBar({ onSearch }) { 
  const [id, setId] = useState(""); // Estado local para almacenar el valor del input

  const handleChange = (event) => {
    setId(event.target.value); // Actualizar el estado id con el valor del input
  }

  const handleSearch = () => {
    onSearch(id); // Pasar el estado id como argumento a la función onSearch
    setId(""); // Restablecer el estado id a un string vacío después de la búsqueda
  };

  return (
    <div>
      <input
        id='inputSearch'
        type='search'
        placeholder='Ingresa un ID'
        value={id} // Asignar el estado id como el value del input
        onChange={handleChange} // Llamar a handleChange cuando el usuario escriba en el input
      />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
