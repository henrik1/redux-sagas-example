import { all } from 'redux-saga/effects'
import apiSagas from './api/sagas';
import uiSagas from './ui/sagas';

const rootSaga = function*() {
  yield all([
    ...apiSagas,
    ...uiSagas
  ])
  // code after all-effect
}

export default rootSaga;
