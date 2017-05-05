import * as actions from '../constants';

export const requestNewsSources = () => ({
  type: actions.REQUEST_NEWS_SOURCES,
});

export const receivedNewsSources = sources => ({
  type: actions.RECEIVED_NEWS_SOURCES,
  sources,
});

export const setNewsCategories = categories => ({
  type: actions.SET_NEWS_CATEGORIES,
  categories,
});

export const setDefaultCategory = defaultNewsCategory => ({
  type: actions.SET_DEFAULT_CATEGORY,
  defaultNewsCategory,
});

export const setCurrentNewsCategory = (selectedCategory, defaultNewsSource) => ({
  type: actions.SET_CURRENT_NEWS_CATEGORY,
  selectedCategory,
  defaultNewsSource,
});

export const setCurrentNewsSource = selectedSource => ({
  type: actions.SET_CURRENT_NEWS_SOURCE,
  selectedSource,
});
