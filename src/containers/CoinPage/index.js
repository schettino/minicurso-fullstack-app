import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CoinPage extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return <div />;
  }
}

function mapStateToProps({coinPage}) {
  return {
    isLoading: coinPage.isLoading,
    coin: coinPage.coin,
    error: coinPage.error,
  };
}

export default connect(mapStateToProps)(CoinPage);
