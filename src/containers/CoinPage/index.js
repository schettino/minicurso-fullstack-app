import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadCoinInfo} from './actions';

class CoinPage extends React.Component {
  componentWillMount() {
    const {dispatch, match} = this.props;
    dispatch(loadCoinInfo(match.params.coinName));
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
