import React from 'react';
import PropTypes from 'prop-types';
import { ChasingDots } from 'better-react-spinkit';

import './styles/Article.scss';

const Article = ({ newsArticles, isArticlesLoading }) => {
  if (isArticlesLoading) {
    return (
      <div className="news-list isArticlesLoading">
        <ChasingDots size={50} color="#999" />
      </div>
    );
  }

  return (
    <div className="news-list">
      {newsArticles.map(article => (
        <div className="article-wrapper" key={article.url}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <img className="news-image" src={article.urlToImage} alt={article.title} />
            <div className="news-details">
              <p className="news-title">{article.title}</p>
              <p className="news-description">{article.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

Article.propTypes = {
  newsArticles: PropTypes.array.isRequired,
  isArticlesLoading: PropTypes.bool.isRequired,
};

export default Article;
