import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

import Cards from './components/Cards.jsx';
import Nav from './components/nav.jsx';

function App() {
   const [characters, setCharacters] = useState([]);

   function onClose(id) {
      // Parseamos el id a number antes de realizar el filtro
      const idAsNumber = parseInt(id, 10);

      // Filtramos los personajes cuyo id sea distinto al que recibimos por parámetro
      const updatedCharacters = characters.filter((character) => character.id !== idAsNumber);

      // Actualizamos el estado local con el resultado del filtro
      setCharacters(updatedCharacters);
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
