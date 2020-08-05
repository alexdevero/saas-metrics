import React from 'react'
import { Link } from 'react-router-dom'

import './../styles/header.css'

export const Header = () => (
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

        <li>
          <Link to="/donate">Donate</Link>
        </li>

        {/* <li>
          <Link to="/settings">Settings</Link>
        </li> */}

        <li>
          <Link to="/subscribe">Subscribe</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        {/* <li>
          <Link to="/deals">Deals</Link>
        </li> */}
      </ul>
    </nav>
  </header>
)
