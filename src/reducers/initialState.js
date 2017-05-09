import { Map } from 'immutable';

const initialState = Map({
  sources: {},
  categories: [],
  defaultNewsCategory: '',
  currentNewsCategory: '',
  currentNewsSource: '',
  newsArticles: [],
  isLoading: false,
  isArticlesLoading: false,
});

export default initialState;
