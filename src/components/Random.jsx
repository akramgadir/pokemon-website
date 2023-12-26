import React, { useEffect, useState } from "react";
import { getPokemonById } from "../utils/api";
import RandomCard from "./RandomCard";
import '../styles/PokemonFont.css';
import '@splidejs/splide/dist/css/splide.min.css';
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '../styles/Random.css';

function Random() {
    const [randomPokemon, setRandomPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRandomPokemon = () => {
            const id = Math.floor(Math.random() * 1025);
            getPokemonById(id)
                .then(pokemon => {
                    //adding a pokemon to the initially empty array with initialised every time this useState is called to update randomPokemon to an array of what we're displaying 
                    setRandomPokemon(prevPokemon => [...prevPokemon, pokemon]);
                })
                .catch(error => {
                    console.error("Error fetching Pokemon:", error);
                });
        };
        

        const fetchData = () => {
    
            const fetchPromises = [];
            for (let i = 0; i < 6; i++) {
                fetchPromises.push(fetchRandomPokemon());
            }
        
            Promise.all(fetchPromises)
                .then(() => {
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching Pokemon:", error);
                });
        };
        

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="loading-bar">Loading...</div>;
    }

    return (
        <>
            <div className="random">
                <h2 className='random-header' style={{ fontFamily: 'PokemonFont, Arial, sans-serif' }}>Random Pokemon</h2>
                <div className="random-pokemon-cards">
                    {randomPokemon.map((pokemon, index) => (
                        <RandomCard key={index} pokemon={pokemon} />
                    ))}
                </div>

                <h2 className='random-header' style={{ fontFamily: 'PokemonFont, Arial, sans-serif' }}>Explore Pokemon</h2>
                <Splide options={{ perPage: 4, rewind: true, gap: '0rem' }} className="explore-splide">
                    {randomPokemon.map((pokemon, index) => (
                        <SplideSlide key={index} >
                            <RandomCard pokemon={pokemon} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    );
    
}

export default Random;
