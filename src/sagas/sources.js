import { takeLatest, put, call } from 'redux-saga/effects';
import newsResourcesAPI from '../API/sources';
import * as newsActions from '../constants';

function* getNewsResources() {
  try {
    const sources = yield call(newsResourcesAPI);

    if (sources.status === 200) throw sources.message;
    yield put({ type: newsActions.RECEIVED_NEWS_SOURCES, sources });
  } catch (error) {
    yield put({ type: newsActions.REQUEST_NEWS_SOURCES_ERROR, error });
  }
}

export default function* () {
  yield takeLatest(newsActions.REQUEST_NEWS_SOURCES, getNewsResources);
}
