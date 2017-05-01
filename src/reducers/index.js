import initialState from './initialState';
import * as newsActions from '../constants';

const abc = (state = initialState, actions) => {
  switch (actions.type) {
    case newsActions.REQUEST_NEWS_SOURCES:
      return {
        ...state,
      };
    case newsActions.RECEIVED_NEWS_SOURCES:
      return {
        ...state,
        sources: actions.sources,
      };
    case newsActions.CHANGED_NEWS_SOURCE:
    case newsActions.SELECTED_NEWS_SOURCE:
    default:
      return state;
  }
};

export default abc;
