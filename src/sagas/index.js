import { fork } from 'redux-saga/effects';
import initSources from './sources';
import getNewsArticles from './articles';

export default function* () {
  yield [
    fork(initSources),
    fork(getNewsArticles),
  ];
}
