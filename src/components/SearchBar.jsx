import React, { useState } from 'react';
import { getPokemonByName } from '../utils/api';
import PokemonModal from './PokemonModal';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleSearch = async () => {
        if (!searchTerm.trim() === '' || searchTerm === '?') {
            alert("Please enter a Pokémon name");
            return;
        }

        const data = await getPokemonByName(searchTerm);
        if (data) {
            setPokemonData(data);
            setShowModal(true);
        } else {
            alert("That's not a Pokemon!");
        }



    };
        const handleKeyPress = (event) => {
          if (event.key === 'Enter' && isInputFocused) {
              handleSearch();
          }
      };
    return (
        <>
            <input
                className='search-bar'
                type="text"
                value={searchTerm}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Which Pokémon do you like...?'
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}

            />
            <button onClick={handleSearch}>Search</button>
            <PokemonModal showModal={showModal} onClose={() => setShowModal(false)} pokemonData={pokemonData} />
        </>
    );
};

export default SearchBar;
