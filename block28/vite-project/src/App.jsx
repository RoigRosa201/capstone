import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import Authenticated from './pages/Authenticated'
import Pokemon from './pages/Pokemon'

function App() {
  return (
    // Routes is a container for all the routes in your application
    <div>
      <NavBar />
      <Routes>
        {/* Route is a single route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/authenticated" element={<Authenticated />} />
        <Route path="/pokemon/:name/" element={<Pokemon />} />
        {/* star route is 404 */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App
