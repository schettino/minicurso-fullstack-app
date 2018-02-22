import {all, put, takeLatest, select} from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import {replace} from 'react-router-redux';

function* loadCoinInfoSaga(action) {
  try {
    const {coinName} = action.payload;
    if (!coinName) {
      throw new Error('EMPTY_COIN_NAME');
    }

    const data = yield select(state => state.home.coinlist);
    const baseData = data.find(item => item.coinName === coinName);
    if (!baseData) {
      throw new Error('EMPTY_LIST');
    }

    yield put(actions.loadCoinInfoOk({...baseData}));
  } catch (error) {
    console.log(error);
    yield put(replace('/'));
  }
}

export default function*() {
  yield all([takeLatest(types.LOAD_COIN_INFO, loadCoinInfoSaga)]);
}
