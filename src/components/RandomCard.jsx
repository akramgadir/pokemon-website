import React from 'react'
import './RandomCard.css'
import '../styles/PokemonFont.css';
import '../styles/styles.css';

function RandomCard({ pokemon }) {
    return (
        <>
        <div className='random-card'>
            <img className='random-card-img' src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <div className='random-card-title' style={{fontFamily: 'PixelFont, Arial, sans-serif'}}>{pokemon.name}</div>

        </div>
        </>
    );
}

export default RandomCard;

