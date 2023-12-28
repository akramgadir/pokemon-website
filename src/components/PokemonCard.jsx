import React from 'react'

const PokemonCard = ({pokemon}) => {
  return (
    <>
    <img src={pokemon.sprites.front_default}  alt={pokemon.name} />
    <div>{pokemon.name}</div>
    </>
  )
}

export default PokemonCard