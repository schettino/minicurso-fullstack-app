import {all, call, takeLatest, put, throttle, select} from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import request from '../../utils/request';

export function* loadCoinlist(action) {
  try {
    const {coinlist} = yield call(request, '/coinlist');
    yield put(actions.loadCoinlisttOk(coinlist));
  } catch (error) {
    yield put(actions.loadCoinlistError(error));
  }
}

function* filterCoinsSaga(action) {
  const {searchTerm} = action.payload;
  if (!searchTerm || searchTerm.length === 0) {
    yield put(actions.filterCoinsOk([]));
    return;
  }
  const coinlist = yield select(state => state.home.coinlist);
  const searchlist = [];
  for (let i = 0; i < coinlist.length; ++i) {
    const {coinName} = coinlist[i];
    if (coinName && coinName.toLowerCase().includes(searchTerm)) {
      searchlist.push(coinlist[i]);
    }
    if (searchlist.length >= 6) break;
  }
  yield put(actions.filterCoinsOk(searchlist));
}

export default function* saga() {
  yield all([
    takeLatest(types.LOAD_COINLIST, loadCoinlist),
    throttle(450, types.FILTER_COINS, filterCoinsSaga),
  ]);
}
