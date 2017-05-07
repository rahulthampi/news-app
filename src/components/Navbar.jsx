import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <span className="app-name">Current News</span>
    </Link>
  </div>
);

export default Navbar;
