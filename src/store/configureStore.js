import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const configureStore = () => ({
  ...createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware,
      loggerMiddleware,
    ),
  ),
  runSaga: sagaMiddleware.run(rootSaga),
});

export default configureStore;
