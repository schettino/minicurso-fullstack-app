import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';

import './styles/globals.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const MOUNT_NODE = document.getElementById('root');

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
}

render();
registerServiceWorker();

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}
