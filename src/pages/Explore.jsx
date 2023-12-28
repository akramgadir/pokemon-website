import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import { getPokemonById, getPokemonList } from "../utils/api";
import PokemonCard from '../components/PokemonCard';

const Explore = () => {
  const [pokemonDisplayed, setPokemonDisplayed] = useState()
  const [offset, setOffset] = useState(60)
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true);


  useEffect = () => {
    const fetchPokemon = () => {
      getPokemonList(currentPage, offset)
        .then(pokemonDisplayed => {
          setPokemonDisplayed(pokemonDisplayed)
        })
        .catch(error => {
          console.error("Error fetching Pokemon:", error);
        });

      }
    }


    const fetchPokemonList = () => {
      const fetchPromises = [];
      
    }








  return (
    <div>
        <h2>
            The Complete Pokedex
        </h2>
        <div>
          {pokemonDisplayed.map((pokemonDisplayed, index) => (
              <PokemonCard pokemonDisplayed={pokemon}/>

          ))}

        </div>
    </div>
  )
}

export default Explore