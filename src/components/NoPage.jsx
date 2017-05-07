import React from 'react';
import PropTypes from 'prop-types';

const NoPage = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

NoPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NoPage;
