import React from 'react';
import logo from '../../img/space-logo.png';
import './Header.css';

const Header = () => (
  <header>
    <img src={logo} alt="logo" />
    <h1>Space Traveler&lsquo;s Hub</h1>
    <nav>
      <ul>
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default Header;
