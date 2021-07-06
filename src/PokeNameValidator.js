import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

const generateRandomPokemon = () => {
  const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
  return randomPokemon;
};

export default function PokeNameValidator() {
  const [currentInput, setCurrentInput] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState(generateRandomPokemon());

  const onInputChange = (e) => {
    e.preventDefault();
    setCurrentInput(e.target.value);
  };

  useEffect(() => {
    if (currentInput === currentPokemon) {
      alert("Correct! Play again?");
      setCurrentInput("");
      setCurrentPokemon(generateRandomPokemon());
    }
  }, [currentInput, currentPokemon]);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{currentPokemon}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        placeholder="Enter the Pokémon name"
        value={currentInput}
        onChange={onInputChange}
      />
    </div>
  );
}
