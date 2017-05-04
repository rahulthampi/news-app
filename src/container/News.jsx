import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  onSourceSelect = (selectedSource) => {
    // Dispatch selected source action
    console.log(selectedSource);
  }

  onCategorySelect = (selectedCategory) => {
    // Dispatch selected category action
    console.log(selectedCategory);
  }

  render() {
    const { categories, sources, currentNewsCategory } = this.props;
    const sidebarProps = {
      newsCategories: categories,
      onSelect: this.onCategorySelect,
      currentNewsCategory,
    };
    const selectProps = {
      newsSources: (currentNewsCategory !== '') ? sources[currentNewsCategory] : sources[categories[0]],
      onChangeHandler: this.onSourceSelect,
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
  } = state;

  return {
    sources,
    categories,
    currentNewsCategory,
    currentNewsSource,
  };
};

News.propTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  sources: PropTypes.object.isRequired,
  currentNewsCategory: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(News);
