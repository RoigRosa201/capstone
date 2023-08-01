import { useState } from 'react';

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      const {token} = await response.json()
      setToken(token)
    } catch(err) {
      setError(err.message)
    }
  }
  return (
    <>
      <h2>Sign Up</h2>
      { error && <p>{error}</p> }
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}