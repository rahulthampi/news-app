import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ChasingDots } from 'better-react-spinkit';

import Sidebar from '../components/Sidebar';
import Select from '../components/Select';
import Article from '../components/Article';
import {
  requestNewsSources,
  setCurrentNewsSource,
  setCurrentNewsCategory,
  requestNewsArticles,
} from '../actions/newsResources';
import '../styles/main.scss';

class News extends Component {
  componentWillMount = () => {
    this.props.dispatch(
      requestNewsSources(),
    );
  }

  selectSource = (selectedSource) => {
    const { dispatch } = this.props;

    dispatch(setCurrentNewsSource(selectedSource));
    dispatch(requestNewsArticles(selectedSource));
  }

  selectCategory = (selectedCategory) => {
    const { dispatch, sources } = this.props;
    const defaultNewsSource = sources[selectedCategory][0].id;

    dispatch(setCurrentNewsCategory(selectedCategory, defaultNewsSource));
    dispatch(requestNewsArticles(defaultNewsSource));
  }

  render = () => {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <div className="content-wrapper isLoading">
          <ChasingDots size={50} color="#999" />
        </div>
      );
    }

    const {
      categories,
      sources,
      currentNewsCategory,
      defaultNewsCategory,
      newsArticles,
      isArticlesLoading,
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
    const articleProps = {
      newsArticles,
      isArticlesLoading: !isLoading && isArticlesLoading,
    };

    return (
      <div className="content-wrapper">
        <Sidebar {...sidebarProps} />
        <div className="news-wrapper">
          <Select {...selectProps} />
          <Article {...articleProps} />
        </div>
      </div>
    );
  }
}

News.propTypes = {
  dispatch: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  sources: PropTypes.object.isRequired,
  currentNewsCategory: PropTypes.string.isRequired,
  defaultNewsCategory: PropTypes.string.isRequired,
  newsArticles: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isArticlesLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(News);
