import React, { useState } from 'react';
import { getPokemonByName } from '../utils/api';
import PokemonModal from './PokemonModal';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [showModal, setShowModal] = useState(false);

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

    return (
        <>
            <input
                className='search-bar'
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Which Pokémon do you like...?'
            />
            <button onClick={handleSearch}>Search</button>
            <PokemonModal showModal={showModal} onClose={() => setShowModal(false)} pokemonData={pokemonData} />
        </>
    );
};

export default SearchBar;
