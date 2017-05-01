import React, { Component } from 'react';

import './styles/Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <span className="app-name">Current News</span>
      </div>
    );
  }
}

export default Navbar;
