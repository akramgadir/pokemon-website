import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import { getPokemonById, getPokemonList, getPokemonDetails } from "../utils/api";
import PokemonCard from '../components/PokemonCard';
import '../styles/Explore.css';


const Explore = () => {
  const [pokemonDisplayed, setPokemonDisplayed] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const limit=60;


  useEffect(() => {
      let offset=currentPage*limit;
      getPokemonList(offset, limit)
      .then(data => {
        const fetchPromises = data.results.map(pokemon => getPokemonDetails(pokemon.url));
        return Promise.all(fetchPromises);
      })
      .then(pokemonDetails => {
        setPokemonDisplayed(pokemonDetails);
      })
        .catch(error => {
          console.error("Error fetching Pokemon:", error);
        });

      }, [currentPage])
    


    const handleNextPage = () => {
      setCurrentPage(currentPage => currentPage + 1)
    }
    const handlePreviousPage = () => {
      if (currentPage>0) {setCurrentPage(currentPage => currentPage - 1)}
    }



  return (
    <div>
        <h2>
            The Complete Pokedex
        </h2>
        <button onClick={handlePreviousPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
        <div className='pokemon-card-container'>
          {pokemonDisplayed.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon}/>

          ))}

        </div>

    </div>
  )
}

export default Explore