import { take, put, race } from 'redux-saga/effects';
import {
  show, hide,
} from './actions';
import { CANCEL, CONFIRM } from './constants';

export function* confirmationSaga(message) {
  yield put(show(message));

  // yes vil ha verdi dersom den en først å inntreffe
  const { yes } = yield race({
    yes: take(CONFIRM),
    no: take(CANCEL)
  })

  yield put(hide());
  return !!yes;
}

export default [
];
