import {all, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';

function* helloWorldSaga() {
  let i = 0;
  while (true) {
    yield call(console.log, `Hello world from a saga #${i}`);
    yield call(delay, 5000);
    i = i + 1;
  }
}

export default function* saga() {
  yield all([helloWorldSaga()]);
}
