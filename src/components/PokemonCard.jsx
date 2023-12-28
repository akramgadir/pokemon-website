import React from 'react'
import '../styles/PokemonCard.css';


const PokemonCard = ({pokemon}) => {
  return (
    <>
    <div className='pokemon-card'>
        <div className='pokemon-card-title'>{pokemon.name}
        <img className='pokemon-card-img' src={pokemon.sprites.front_default}  alt={pokemon.name} />
         </div>
    </div>
    </>
  )
}

export default PokemonCard