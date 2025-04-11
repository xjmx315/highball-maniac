//Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <h1 id='logo'>Highball Maniac</h1>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">발견</NavLink></li>
        <li><NavLink to="/recipe" activeClassName="active">레시피</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
      </ul>
      <div class="login-container">
        <NavLink to="/login" className="login-btn">로그인</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;