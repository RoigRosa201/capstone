import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'
import Navbar from './components/Navbar/index.jsx'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find(({id}) => id === featPupId)
  return (
    <div className="App">
      <Navbar />
      { 
        puppies.map(({id, name}) => {
          return <p onClick={() => setFeatPupId(id)} key={id}>{name}</p>
        })
      }
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <ul className="nav-links">
        <li>Blah</li>
      </ul>
    </div>
  )
}

export default App
