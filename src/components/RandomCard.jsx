import React, { useEffect, useState } from 'react'
import '../styles/RandomCard.css';
import '../styles/PokemonFont.css';
import '../styles/styles.css';
import '@splidejs/splide/dist/css/splide.min.css';
import PokemonModal from './PokemonModal';
import { getPokemonById } from '../utils/api';


function capitaliseFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  }

function RandomCard({ pokemon }) {

  const [showModal, setShowModal] = useState(false)
  const [pokemonData, setPokemonData] = useState(null)

  useEffect (() => {
    if (showModal) {
      getPokemonById(pokemon.id)
          .then(data => setPokemonData(data))
    }

  }, [showModal, pokemon.id])


    return (
        <> 
        <div className='random-card'onClick={()=>{setShowModal(true)}}>
            
            <img className='random-card-img' src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <div className='random-card-title' style={{ fontFamily: 'PixelFont, Arial, sans-serif' }}>
  {capitaliseFirstLetters(pokemon.name)}
        </div>
        </div>
        <PokemonModal showModal={showModal} onClose={()=>setShowModal(false)} pokemonData={pokemonData}/>

        </>
    );
}

export default RandomCard;

