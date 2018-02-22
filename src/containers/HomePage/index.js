import React from 'react';
import {connect} from 'react-redux';
import {Segment, Input, Transition} from 'semantic-ui-react';

class HomePage extends React.Component {
  componentDidMount() {
    setTimeout(() => this.searchField.focus(), 500);
  }

  render() {
    return (
      <Transition animation="slide down" duration={500} transitionOnMount>
        <Segment floated color="teal" raised size="massive">
          <Input
            ref={searchField => {
              this.searchField = searchField;
            }}
            icon="btc"
            transparent
            iconPosition="left"
            fluid
            size="huge"
            placeholder="Search for a crypto currency"
          />
        </Segment>
      </Transition>
    );
  }
}

function mapStateToProps(state) {
  return {
    number: state.home.number,
  };
}

export default connect(mapStateToProps)(HomePage);
