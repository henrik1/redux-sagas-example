import { takeLatest, put, delay } from "redux-saga/effects";
import {
  CREDENTIALS_GET
} from "./constants";
import { getSuccess, setLoading } from "./actions";

const handleGetCredentials = function*(args) {
  yield takeLatest(CREDENTIALS_GET, function*() {
    // Set loading true
    yield put(setLoading(true));

    // La oss anta at vi gjør et api kall eller noe
    yield delay(2000);

    // ...

    // For ordens skyld, her kunne vi gjort flere kall, kanskje hentet bruker profil osv.

    // ...

    // Vi har hentet data og ønsker nå å oppdatere tilstand
    yield put(getSuccess({
      id: 'uuid-123',
      role: 'admin',
    }));

    yield put(setLoading(false));
  });
};

export default [
  handleGetCredentials()
];
