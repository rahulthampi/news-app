import * as newsActions from '../constants';

const rootReducer = (state, actions) => {
  switch (actions.type) {
    case newsActions.REQUEST_NEWS_SOURCES:
      return state
        .set('isLoading', true);
    case newsActions.RECEIVED_NEWS_SOURCES:
      return state
        .set('sources', actions.sources)
        .set('isLoading', false);
    case newsActions.SET_NEWS_CATEGORIES:
      return state
        .set('categories', actions.categories);
    case newsActions.SET_DEFAULT_CATEGORY:
      return state
        .set('defaultNewsCategory', actions.defaultNewsCategory)
        .set('currentNewsSource', actions.currentNewsSource);
    case newsActions.SET_CURRENT_NEWS_CATEGORY:
      return state
        .set('currentNewsCategory', actions.selectedCategory)
        .set('currentNewsSource', actions.defaultNewsSource);
    case newsActions.SET_CURRENT_NEWS_SOURCE:
      return state
        .set('currentNewsSource', actions.selectedSource);
    case newsActions.REQUEST_NEWS_ARTICLES:
      return state
        .set('isArticlesLoading', true);
    case newsActions.RECEIVED_NEWS_ARTICLES:
      return state
        .set('newsArticles', actions.articles)
        .set('isArticlesLoading', false);
    default:
      return state;
  }
};

export default rootReducer;
