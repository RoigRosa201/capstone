import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <h1>Cool Website</h1>
      <nav>
        <ul>
          {/* Link is a single link */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}