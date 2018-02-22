import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Segment, Container} from 'semantic-ui-react';
// import logo from '../../assets/logo.svg';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';

class App extends React.PureComponent {
  handleItemClick = () => {};
  render() {
    return (
      <div>
        <Segment basic padded as={Container}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Segment>
      </div>
    );
  }
}

export default App;
