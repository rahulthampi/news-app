import * as actions from '../constants';

export const requestNewsSources = () => ({
  type: actions.REQUEST_NEWS_SOURCES,
});

export const receivedNewsSources = sources => ({
  type: actions.RECEIVED_NEWS_SOURCES,
  sources,
});

export const changedNewsSource = () => ({
  type: actions.CHANGED_NEWS_SOURCE,
});

export const selectedNewsSource = () => ({
  type: actions.SELECTED_NEWS_SOURCE,
});
