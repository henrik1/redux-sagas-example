import { takeEvery, put, delay } from "redux-saga/effects";
import { addToast, removeToast } from './actions';
import { SHOW_TOAST } from './constants';

const handleShowToast = function*() {
  yield takeEvery(SHOW_TOAST, function*(args) {
    const { message, color, removeAfterMs } = args?.payload

    const uuid = Date.now();

    yield put(addToast(uuid, message, color));

    yield delay(removeAfterMs);

    yield put(removeToast(uuid));

  });
};

export default [
  handleShowToast(),
];
