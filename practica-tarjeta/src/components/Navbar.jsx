import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Delivery 1</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">List Adder</a>
        </li>
        <li>
          <a href="/about">Credit Card</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </nav>
  ) 
}

export default Navbar
