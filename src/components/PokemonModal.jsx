import React from "react";
import '../styles/PokemonModal.css';

const PokemonModal = ({ showModal, onClose, pokemonData }) => {
    if (!showModal || !pokemonData) return null;

    const capitalizeName = name => name.charAt(0).toUpperCase() + name.slice(1);

    const stats = pokemonData.stats.map(stat => ({
        name: stat.stat.name.toUpperCase(),
        value: stat.base_stat,
    }));

    const moves = pokemonData.moves.map(move => ({
        level: move.level_learned_at,
        name: move.move.name,
        type: 'Normal',
        power: '50',
        pp: '15',
    }));

    return (
        <div className={`pokemon-modal-container ${showModal ? 'show' : ''}`}>
            <div className="pokemon-modal">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{capitalizeName(pokemonData.name)}</h2>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="pokemon-modal-image"/>

                {/* Stats Table */}
                <div className="stats-table-container">
                    <table className="pokemon-stats">
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.map((stat, index) => (
                                <tr key={index}>
                                    <td>{stat.name}</td>
                                    <td>{stat.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Moves Table */}
                <div className="moves-table-container">
                    <table className="pokemon-moves">
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Move</th>
                                <th>Type</th>
                                <th>Power</th>
                                <th>PP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {moves.map((move, index) => (
                                <tr key={index}>
                                    <td>{move.level}</td>
                                    <td>{move.name}</td>
                                    <td>{move.type} &nbsp;</td>
                                    <td>{move.power}</td>
                                    <td>{move.pp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;
