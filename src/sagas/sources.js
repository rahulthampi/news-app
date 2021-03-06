import { takeLatest, put, call } from 'redux-saga/effects';
import newsResourcesAPI from '../API/sources';
import * as newsActions from '../constants';

function* getNewsResources() {
  try {
    const sources = yield call(newsResourcesAPI);

    if (sources.status === 400) throw sources.message;
    const categories = Object.keys(sources);
    const defaultNewsCategory = categories[0];
    const currentNewsSource = sources[defaultNewsCategory][0].id;

    yield put({ type: newsActions.RECEIVED_NEWS_SOURCES, sources });
    yield put({ type: newsActions.SET_NEWS_CATEGORIES, categories });
    yield put({
      type: newsActions.SET_DEFAULT_CATEGORY,
      defaultNewsCategory,
      currentNewsSource,
    });
    yield put({ type: newsActions.REQUEST_NEWS_ARTICLES, payload: currentNewsSource });
  } catch (error) {
    yield put({ type: newsActions.REQUEST_NEWS_SOURCES_ERROR, error });
  }
}

export default function* () {
  yield takeLatest(newsActions.REQUEST_NEWS_SOURCES, getNewsResources);
}
