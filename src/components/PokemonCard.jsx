import React, { useEffect, useState } from 'react'
import '../styles/PokemonCard.css';
import PokemonModal from './PokemonModal';
import { getPokemonById } from '../utils/api';


const PokemonCard = ({pokemon}) => {

  const [showModal, setShowModal] = useState(false)
  const [pokemonData, setPokemonData] = useState(null)

  function capitaliseFirstLetters(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
      }

      useEffect (() => {
        if (showModal) {
          getPokemonById(pokemon.id)
              .then(data => setPokemonData(data))
        }

      }, [showModal, pokemon.id])
    

  return (
    <>
      <div className='pokemon-card' onClick={()=>{setShowModal(true)}}>
          <div className='pokemon-card-title'>{pokemon.name}
          <img className='pokemon-card-img' src={pokemon.sprites.front_default}  alt={pokemon.name} />
          </div>
      </div>
      <PokemonModal showModal={showModal} onClose={()=>setShowModal(false)} pokemonData={pokemonData}/>
    </>
  )
}

export default PokemonCard