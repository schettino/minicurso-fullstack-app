import * as types from './constants';

/**  Load Coin List */

export function loadCoinInfo(coinName) {
  return {type: types.LOAD_COIN_INFO, payload: {coinName}};
}

export function loadCoinInfoOk() {
  return {type: types.LOAD_COIN_INFO_OK, payload: {}};
}

export function loadCoinInfoError(error) {
  return {type: types.LOAD_COIN_INFO_ERROR, error};
}
