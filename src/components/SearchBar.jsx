import React, { useEffect, useState } from 'react';
import { getAllAbilities, getAllTypes, getPokemonByName } from '../utils/api';
import PokemonModal from './PokemonModal';
import '../styles/SearchBar.css' 
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
        if (e.target.checked) {
            setSelectedTypes(prevTypes => [...prevTypes, e.target.value]);
        } else {
            setSelectedTypes(prevTypes => prevTypes.filter(type => type !== e.target.value));
        }
    };
    
    return (
        <>
        <div className='search-bar-container'>
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
            <button className='types-button' onClick={toggleFiltersMenu}>Types</button>

            <button className='search-button' onClick={handleSearch}>Search</button>
            <PokemonModal showModal={showModal} onClose={() => setShowModal(false)} pokemonData={pokemonData} />
       </div>            {filtersMenuOpen ?  <div className='filters-menu'>
                <ul>
                    {types.map((type)=> {
                        return <li key={type.name} className='filter-item'>
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
        </>
    );
};

export default SearchBar;
