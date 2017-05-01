import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Select from '../components/Select';
import { requestNewsSources } from '../actions/newsResources';
import '../styles/main.scss';

class News extends Component {
  componentDidMount = () => {
    this.props.dispatch(requestNewsSources());
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <div className="news-wrapper">
            <Select />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sources } = state;

  return {
    sources,
  };
};

export default connect(mapStateToProps)(News);
