import React from 'react'
import '../styles/PokemonCard.css';


const PokemonCard = ({pokemon}) => {

    function capitaliseFirstLetters(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
      }
    

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