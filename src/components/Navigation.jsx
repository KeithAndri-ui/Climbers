import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-icon">⛰️</span>
          <span className="brand-text">Climbers</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/routes' ? 'active' : ''}`}
                to="/routes"
              >
                Routes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`}
                to="/community"
              >
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link nav-link-register ${location.pathname === '/register' ? 'active' : ''}`}
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
