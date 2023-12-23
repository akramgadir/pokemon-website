import { useEffect, useState } from "react";
import { getAllPokemon } from "../utils/api";
import RandomCard from "./RandomCard";

import './Random.css'
function Random() {
    const [randomPokemon, setRandomPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            const fetchedPokemon = [];
            for (let i = 0; i < 10; i++) {
                const id = Math.floor(Math.random() * 1302);
                try {
                    const pokemon = await getAllPokemon(id);
                    fetchedPokemon.push(pokemon);
                } catch (error) {
                    console.error("Error fetching Pokemon:", error);
                }
            }
            setRandomPokemon(fetchedPokemon);
            setIsLoading(false);
        };

        fetchPokemon();
    }, []);

    if (isLoading) {
        return <div className="loading-bar">Loading...</div>;
    }

    return (
        <>
        <div className="random">
            <h2 className='random-header'>Random Pokemon</h2>
            <div className="random-pokemon-cards">
                {randomPokemon.map((pokemon, index) => (
                    <RandomCard key={index} pokemon={pokemon} />
                ))}
            </div>
          </div>
        </>
    );
}

export default Random;
