import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from './../state/state'

import './../styles/header.css'

export const Header = () => {
  const { darkMode, handleDarkMode } = useContext(GlobalContext)

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="logo">SaaSMetrics <span aria-label="a rocket blasting off" role="img">🚀</span></Link>

        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/metrics">Metrics</Link>
          </li>

          {/* <li>
            <Link to="/donate">Donate</Link>
          </li> */}

          {/* <li>
            <Link to="/settings">Settings</Link>
          </li> */}

          <li>
            <Link to="/about">About</Link>
          </li>

          {/* <li>
            <Link to="/subscribe">Subscribe</Link>
          </li> */}

          <li>
            <Link to="/sign-up">Sign up</Link>
          </li>

          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>

          {/* <li>
            <Link to="/deals">Deals</Link>
          </li> */}

          <li className="d-flex">
            <button
              className="btn btn-link text-dark header-mode-link"
              type="button"
              onClick={handleDarkMode}
            >
              {darkMode === 'off' ? (
                <span aria-label="Sun" title="Toggle dark mode" role="img">☀️ <span className="sr-only">Toggle dark mode</span></span>
              ) : (
                <span aria-label="Crescent moon" title="Toggle light mode" role="img">🌙 <span className="sr-only">Toggle light mode</span></span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
