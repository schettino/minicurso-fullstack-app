// import {all} from 'redux-saga/effects';
import homeSagas from './containers/HomePage/saga';
import coinSagas from './containers/CoinPage/saga';

export default function runSagas() {
  return [homeSagas, coinSagas];
}
