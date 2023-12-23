import React from 'react'
import './RandomCard.css'

function RandomCard({ pokemon }) {
    return (
        <>
        <div className='random-card'>
            <div className='random-card-title'>{pokemon.name}</div>
            <img className='random-card-img' src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
        </>
    );
}

export default RandomCard;

