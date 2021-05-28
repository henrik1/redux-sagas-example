import { delay, put, debounce } from 'redux-saga/effects'
import { MESSAGE_SAVE } from './constants';
import { setLoading, setSaved } from './actions';
import { showToast } from '../../ui/toast/actions';

function* handleSaveMessage() {
  yield debounce(1000, MESSAGE_SAVE, function*(args) {
    const { message } = args?.payload;
    yield put(setLoading(true));
    yield delay(1500); // Vi later som at vi lagrer noe
    yield put(setSaved(message)); // Vi oppdaterer tilstand
    yield put(setLoading(false));
    yield put(showToast('Saved message', 'green', 2000));
  });
}

export default [
  handleSaveMessage(),
];
