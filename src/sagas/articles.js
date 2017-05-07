import { takeLatest, put, call } from 'redux-saga/effects';
import newsArticlesAPI from '../API/articles';
import * as newsActions from '../constants';

function* getNewsArticles({ payload }) {
  try {
    const articles = yield call(newsArticlesAPI, payload);

    if (articles.status === 400) throw articles.message;
    yield put({ type: newsActions.RECEIVED_NEWS_ARTICLES, articles });
  } catch (error) {
    yield put({ type: newsActions.REQUEST_NEWS_ARTICLES_ERROR, error });
  }
}

export default function* () {
  yield takeLatest(newsActions.REQUEST_NEWS_ARTICLES, getNewsArticles);
}
