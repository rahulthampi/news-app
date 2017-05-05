import initialState from './initialState';
import * as newsActions from '../constants';

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case newsActions.REQUEST_NEWS_SOURCES:
      return { ...state };
    case newsActions.RECEIVED_NEWS_SOURCES:
      return {
        ...state,
        sources: actions.sources,
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
    default:
      return { ...state };
  }
};

export default rootReducer;
