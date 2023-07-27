import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams(); // this is an object with all the params in the url
  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [name]);
  console.log(pokemon);
  if (pokemon) {
    const { name, sprites: { front_default } } = pokemon;
    return (
      <section>
        <h1>{name}</h1>
        <img src={front_default} alt="" width="200" />
      </section>
    ) 
  } else {
    return (
      <h1>Pokemon not found</h1>
    )
  }
}