import React, { useState, useEffect } from "react";
import '../styles/PokemonModal.css';
import { type } from "@testing-library/user-event/dist/type";

const PokemonModal = ({showModal, onClose, pokemonData}) => {
    
    
    if (!showModal || !pokemonData) {
        return null
    }

    const abilities = pokemonData.abilities.map((ability) => ability.ability.name);
    const moves = pokemonData.moves.map((move) => move.move.name);
  return (
    <div className={`pokemon-modal-container ${showModal ? 'show' : ''}`}>
        <div className="pokemon-modal">
            <span className="close-button" onClick={onClose}>&times;</span>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="pokemon-modal-image"/>
            <div>Abilities: {abilities.join(', ')}</div>
            <div>Moves: {moves.join(', ')}</div>
        </div>        
    </div>
  )
}

export default PokemonModal
