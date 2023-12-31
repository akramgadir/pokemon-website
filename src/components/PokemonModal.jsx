import React, { useState, useEffect } from "react";
import '../styles/PokemonModal.css';

const PokemonModal = ({showModal, onClose, pokemonData}) => {
    
    
    if (!showModal || !pokemonData) {
        return null
    }
  return (
    <div className="pokemon-modal-container">
        <div className="pokemon-modal">
            <span className="close" onClick={onClose}>&times</span>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>        
    </div>
  )
}

export default PokemonModal