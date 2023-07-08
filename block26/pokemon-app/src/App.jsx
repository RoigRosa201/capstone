import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const likesPokemon = true;
  function renderPokemonMessage() {
    if (likesPokemon) {
      return <p>I like Pokemon</p>
    }
    return <p>I do not like Pokemon</p>
  }
  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const { results: pokemon } = await response.json()
      setPokemon(pokemon);
    }
    fetchPokemon()
  }, [])
  return (
    <div>
      <h1>Pokemon App</h1>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      {/* {likesPokemon ? <p>I like Pokemon</p> : <p>I do not like pokemon</p>} */}
      {/* {likesPokemon && <p>I like Pokemon</p>} */}
      {renderPokemonMessage()}
    </div>
  )
}

export default App
