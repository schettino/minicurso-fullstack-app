import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const MOUNT_NODE = document.getElementById('root');

function render() {
  ReactDOM.render(<App />, MOUNT_NODE);
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
