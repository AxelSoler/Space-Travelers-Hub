import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/space-logo.png';
import './Header.css';

const Header = () => (
  <div>
    <header>
      <img src={logo} alt="logo" />
      <h1>Space Traveler&lsquo;s Hub</h1>
      <nav>
        <ul>
          <li><NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to="/">Rockets</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to="Missions">Missions</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'link-active' : 'link')} to="MyProfile">My Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
