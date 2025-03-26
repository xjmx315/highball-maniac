//Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <h1 id='logo'>Highball Maniac</h1>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;