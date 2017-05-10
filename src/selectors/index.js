import { createSelector } from 'reselect';

export const getAppState = state => state;

export const getNewsCategories = createSelector(
  [getAppState],
  state => state.get('categories'),
);

export const getNewsSources = createSelector(
  [getAppState],
  state => state.get('sources'),
);

export const getDefaultNewsCategory = createSelector(
  [getAppState],
  state => state.get('defaultNewsCategory'),
);

export const getCurrentNewsCategory = createSelector(
  [getAppState],
  state => state.get('currentNewsCategory'),
);

export const getCurrentNewsSource = createSelector(
  [getAppState],
  state => state.get('currentNewsSource'),
);
export const getNewsArticles = createSelector(
  [getAppState],
  state => state.get('newsArticles'),
);
export const getIsNewsLoading = createSelector(
  [getAppState],
  state => state.get('isLoading'),
);
export const getIsArticlesLoading = createSelector(
  [getAppState],
  state => state.get('isArticlesLoading'),
);
