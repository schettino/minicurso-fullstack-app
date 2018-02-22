import {all, call, takeLatest, put} from 'redux-saga/effects';
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

export default function* saga() {
  yield all([takeLatest(types.LOAD_COINLIST, loadCoinlist)]);
}
