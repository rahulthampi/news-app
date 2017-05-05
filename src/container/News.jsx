import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Select from '../components/Select';
import {
  requestNewsSources,
  setCurrentNewsSource,
  setCurrentNewsCategory,
} from '../actions/newsResources';
import '../styles/main.scss';

class News extends Component {
  componentDidMount = () => {
    this.props.dispatch(
      requestNewsSources(),
    );
  }

  selectSource = (selectedSource) => {
    this.props.dispatch(
      setCurrentNewsSource(selectedSource),
    );
  }

  selectCategory = (selectedCategory) => {
    const { dispatch, sources } = this.props;
    const defaultNewsSource = sources[selectedCategory][0].id;

    dispatch(
      setCurrentNewsCategory(selectedCategory, defaultNewsSource),
    );
  }

  render = () => {
    const {
      categories,
      sources,
      currentNewsCategory,
      defaultNewsCategory,
    } = this.props;
    const sidebarProps = {
      newsCategories: categories,
      onSelect: this.selectCategory,
      currentNewsCategory: (currentNewsCategory !== '') ?
        currentNewsCategory : defaultNewsCategory,
    };
    const selectProps = {
      newsSources: (currentNewsCategory !== '') ?
        sources[currentNewsCategory] : sources[defaultNewsCategory],
      onChangeHandler: this.selectSource,
    };

    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
          <Sidebar {...sidebarProps} />
          <div className="news-wrapper">
            <Select {...selectProps} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
     sources,
    categories,
    currentNewsCategory,
    currentNewsSource,
    defaultNewsCategory,
  } = state;

  return {
    sources,
    categories,
    currentNewsCategory,
    currentNewsSource,
    defaultNewsCategory,
  };
};

News.propTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  sources: PropTypes.object.isRequired,
  currentNewsCategory: PropTypes.string.isRequired,
  defaultNewsCategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(News);
