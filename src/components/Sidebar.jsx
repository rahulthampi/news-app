import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/Sidebar.scss';

class Sidebar extends Component {
  render() {
    const { newsCategories, onSelect, currentNewsCategory } = this.props;
    const categories = newsCategories.map(category => (
      <li key={category} className={(category === currentNewsCategory) ? 'selected' : ''}>
        <button onClick={e => onSelect(category, e)}>{category}</button>
      </li>
    ));

    return (
      <div className="sidebar-nav">
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  newsCategories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  currentNewsCategory: PropTypes.string.isRequired,
};

export default Sidebar;
