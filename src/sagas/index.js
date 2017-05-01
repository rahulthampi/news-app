import { fork } from 'redux-saga/effects';
import loadNewsResources from './sources';

export default function* () {
  yield fork(loadNewsResources);
}
