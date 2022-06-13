import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/space-logo.png';
import './Header.css';

const Header = () => (
  <div>
    <header>
      <img src={logo} alt="logo" />
      <h1>Space Traveler&lsquo;s Hub</h1>
      <nav>
        <ul>
          <li><Link to="/">Rockets</Link></li>
          <li><Link to="Missions">Missions</Link></li>
          <li>My Profile</li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
