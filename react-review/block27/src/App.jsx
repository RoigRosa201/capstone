// Esto es un componente funcional
import { useState } from 'react'
import { SignUpForm, Authenticate } from './components'
import './App.css'

function App() {
  const [token, setToken] = useState(null)
  return (
    <div>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  )
}

export default App
