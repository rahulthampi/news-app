import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Homepage.scss';

const Homepage = () => (
  <div>
    <div className="homepage">
      <h2 className="app-description">
        App to show current news, using News API(
          <Link to="//newsapi.org/" target="_blank">newsapi.org</Link>
        )
      </h2>
      <Link to="/news" className="app-link">
        <button className="btn btn-lg btn-primary">Check out latest news</button>
      </Link>
    </div>
    <hr className="page-end" />
  </div>
);

export default Homepage;
