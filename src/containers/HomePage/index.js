import React from 'react';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  render() {
    return <h1>This is the HomePage Component ({this.props.number})</h1>;
  }
}

function mapStateToProps(state) {
  return {
    number: state.home.number,
  };
}

export default connect(mapStateToProps)(HomePage);
