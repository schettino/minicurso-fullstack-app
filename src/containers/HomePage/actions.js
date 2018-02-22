import * as types from './constants';

/**  Load Coin List */

export function loadCoinlist() {
  return {type: types.LOAD_COINLIST};
}

export function loadCoinlisttOk(coinlist) {
  return {type: types.LOAD_COINLIST_OK, payload: {coinlist}};
}

export function loadCoinlistError(error) {
  return {type: types.LOAD_COINLIST_ERROR, error};
}

/** Filter Coins */

export function filterCoins(searchTerm) {
  return {type: types.FILTER_COINS, payload: {searchTerm}};
}

export function filterCoinsOk(result) {
  return {type: types.FILTER_COINS_OK, payload: {result}};
}
