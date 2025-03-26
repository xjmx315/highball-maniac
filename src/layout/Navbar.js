//Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <h1 id='logo'>Highball Maniac</h1>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">조합</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">발견</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;