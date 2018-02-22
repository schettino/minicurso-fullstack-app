import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {Segment, Container} from 'semantic-ui-react';

import HomePage from '../HomePage';
import CoinPage from '../CoinPage';
import NotFoundPage from '../NotFoundPage';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Segment basic padded as={Container}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:coinName" component={CoinPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Segment>
      </div>
    );
  }
}

export default withRouter(App);
