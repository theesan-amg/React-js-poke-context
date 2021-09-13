import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';

const Home = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id , setId] = useState(1)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(res =>
                setPokemon(res));
    }, [id])

    function randomNumber() {
        const random = Math.floor(Math.random() * 151) + 1;
        setId(random)
    }

  

    return (

        <div>
            <h1>Home</h1>
            <div>
                {pokemon && (
                    <div className="container-pokemon">
                     
                        <p>Name: {pokemon.name}</p>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        Types : {" "}
                        <p>{pokemon.types.map((type) => (
                            type.type.name
                        ))}
                        </p>
                        <button onClick={randomNumber}>Aleatoire</button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Home;