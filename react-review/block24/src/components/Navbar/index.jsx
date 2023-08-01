import './style.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a></li>
      </ul>
    </nav>
  )
}