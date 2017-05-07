import initialState from './initialState';
import * as newsActions from '../constants';

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case newsActions.REQUEST_NEWS_SOURCES:
      return {
        ...state,
        isLoading: true,
      };
    case newsActions.RECEIVED_NEWS_SOURCES:
      return {
        ...state,
        sources: actions.sources,
        isLoading: false,
      };
    case newsActions.SET_NEWS_CATEGORIES:
      return {
        ...state,
        categories: actions.categories,
      };
    case newsActions.SET_DEFAULT_CATEGORY:
      return {
        ...state,
        defaultNewsCategory: actions.defaultNewsCategory,
        currentNewsSource: actions.currentNewsSource,
      };
    case newsActions.SET_CURRENT_NEWS_CATEGORY:
      return {
        ...state,
        currentNewsCategory: actions.selectedCategory,
        currentNewsSource: actions.defaultNewsSource,
      };
    case newsActions.SET_CURRENT_NEWS_SOURCE:
      return {
        ...state,
        currentNewsSource: actions.selectedSource,
      };

    case newsActions.REQUEST_NEWS_ARTICLES:
      return {
        ...state,
        isArticlesLoading: true,
      };
    case newsActions.RECEIVED_NEWS_ARTICLES:
      return {
        ...state,
        newsArticles: actions.articles,
        isArticlesLoading: false,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
