import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import './styles/App.scss';

const App = ({ children }) => (
  <div className="app-wrapper">
    <Navbar />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
