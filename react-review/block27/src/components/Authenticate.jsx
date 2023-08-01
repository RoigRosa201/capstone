import { useState } from 'react'

export default function Authenticate({token}) {
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  async function tokenAuth() {
    try {
      console.log("Happening")
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        }
      })
      const {message} = await response.json();
      setMessage(message)
    } catch(err) {
      setError(err)
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      { error && <p>{error}</p> }
      { message && <p>{message}</p> }
      <button onClick={tokenAuth}>Authenticate Token</button>
    </>
  )
}