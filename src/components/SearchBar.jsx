import React, { useEffect, useState } from 'react';
import { getAllAbilities, getAllTypes, getPokemonByName } from '../utils/api';
import PokemonModal from './PokemonModal';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [filtersMenuOpen, setFiltersMenuOpen] = useState(false)

    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState('');
    const [selectedAbilities, setSelectedAbilities] = useState('');

    useEffect (() => {
        const fetchPokemonFilterData = async () => {
            const fetchedTypes = await getAllTypes();
            const fetchedAbilities = await getAllAbilities();
            setTypes(fetchedTypes)
            setAbilities(fetchedAbilities)
        }
        fetchPokemonFilterData()
    }, [])
    
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

    const toggleFiltersMenu = () => {
        if (!filtersMenuOpen) {setFiltersMenuOpen(true)}
        else setFiltersMenuOpen(false)
    }

    const handleTypeChange = (e) => {
        if (e.target.value) {
            setSelectedTypes([...selectedTypes, value])
        }
        else {
            setSelectedTypes(selectedTypes.filter(type => type !== value))
        }
    }
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
            <button onClick={toggleFiltersMenu}>Types</button>
            {filtersMenuOpen ?  <div className='filters-menu'>
                <ul>
                    {types.map((type)=> {
                        return <li key={type.name}>
                            <input
                                type="checkbox"
                                id={type.name}
                                value={type.name}
                                onChange={handleTypeChange}
                                checked={selectedTypes.includes(type.name)} 
                            
                            
                            />{type.name}</li>

                    })}
                </ul>
            </div> : null}
            <button onClick={handleSearch}>Search</button>
            <PokemonModal showModal={showModal} onClose={() => setShowModal(false)} pokemonData={pokemonData} />
        </>
    );
};

export default SearchBar;
