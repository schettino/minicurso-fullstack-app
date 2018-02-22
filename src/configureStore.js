/**
 * Create the store with dynamic reducers
 */

import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import createSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  let composeEnhancers;
  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    });
  } else {
    composeEnhancers = compose;
  }

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedSagas = {}; // Saga registry

  const sagas = createSagas();
  sagas.forEach(saga => {
    store.injectedSagas[saga] = true;
    store.runSaga(saga);
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept(['./reducers'], () => {
      const nextReducers = import('./reducers');
      store.replaceReducer(nextReducers());
    });

    module.hot.accept(['./sagas'], () => {
      const nextSagas = import('./sagas');
      nextSagas.forEach(saga => {
        if (store.injectedSagas[saga]) {
          saga.cancel();
        } else {
          store.injectedSagas[saga] = true;
        }

        store.runSaga(saga);
      });
    });
  }

  return store;
}
