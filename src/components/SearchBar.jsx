import React, { useEffect, useState } from 'react'
// import { getPokemonByName } from '../utils/api'
import axios from 'axios';
import { getPokemonByName } from '../utils/api';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonSearched, setPokemonSearched] = useState(null);

    const handleSearch = async () => {
      if (searchTerm.trim() === '') {
        setPokemonSearched(null);
        return null;
      }
  
      try {
        const pokemonData = await getPokemonByName(searchTerm);
        setPokemonSearched(pokemonData);
      } catch (error) {
        console.error('Error searching for Pokemon:', error);
        setPokemonSearched(null);
      }
    };
  
    useEffect(() => {
      handleSearch();
      console.log(pokemonSearched)
    }, [searchTerm]);


  return (
    <>
    <input
        type="text"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder='Which pokemon do you like...?'
    />
    <button onClick={handleSearch}>Search</button>
    <div></div>
    </>
  )
}

export default SearchBar