import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom"; // Importa la etiqueta Link

export default function Nav({ onSearch }) {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      {/* Crea los botones utilizando Link */}
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </nav>
  );
}