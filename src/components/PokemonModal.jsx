import React, { useState, useEffect } from "react";

const PokemonModal = ({showModal, onClose, pokemonData}) => {
    
    
    if (!showModal) {
        return null
    }
  return (
    <div className="pokemon-modal-container">
        <div className="pokemon-modal">
            <span className="close" onClick={onClose}>&times</span>
            <h2>{pokemon.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>        
    </div>
  )
}

export default PokemonModal