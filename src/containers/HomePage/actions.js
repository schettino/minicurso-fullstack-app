import * as types from './constants';

export function loadCoinlist() {
  return {type: types.LOAD_COINLIST};
}

export function loadCoinlisttOk(coinlist) {
  return {type: types.LOAD_COINLIST_OK, payload: {coinlist}};
}

export function loadCoinlistError(error) {
  return {type: types.LOAD_COINLIST_ERROR, error};
}
