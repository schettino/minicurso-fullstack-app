import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
