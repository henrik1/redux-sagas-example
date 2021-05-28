import { takeLatest, put, delay, select, take } from "redux-saga/effects";
import {
  PROFILE_GET1,
  PROFILE_GET2, PROFILE_GET3, PROFILE_GET4, PROFILE_SAVE
} from "./constants";
import {
  CREDENTIALS_GET_SUCCESS
} from '../auth/constants';
import { getSuccess, setLoading } from "./actions";
import {getCredentials} from '../auth/actions';
import {showToast} from '../../ui/toast/actions';

export const getLoggedInUser = ({ api: { auth } }) => auth?.credentials?.id;

// Her forventer vi at credentials er satt
const handleGetProfile1 = function*() {
  yield takeLatest(PROFILE_GET1, function*() {
    yield put(setLoading(true));

    // Her tapper vi inn i state for å hente ut nåværende innlogget bruker id
    const id = yield select(getLoggedInUser);
    console.log('userId', id);
    yield delay(2000); // Vi later som at vi henter profilen

    yield put(getSuccess({
      id,
      name: 'Jhen Doe',
      avatar: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
    }));

    yield put(setLoading(false));
  });
};

// Her forventer vi at credentials er/blir satt en gang i fremtiden
const handleGetProfile2 = function*() {
  yield takeLatest(PROFILE_GET2, function*() {
    yield put(setLoading(true));

    // Her venter vi på at credentials blir satt
    const { payload: { id } } = yield take(CREDENTIALS_GET_SUCCESS);
    console.log('userId', id);
    yield delay(2000); // Vi later som at vi henter profilen

    yield put(getSuccess({
      id,
      name: 'Jhen Doe',
      avatar: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
    }));

    yield put(setLoading(false));
  });
};

const handleGetProfile3 = function*() {
  yield takeLatest(PROFILE_GET3, function* (args) {
    yield put(setLoading(true));

    // Vi trenger å hente credentials før vi kan hente brukerens profil
    yield put(getCredentials());
    const { payload: { id } } = yield take(CREDENTIALS_GET_SUCCESS);
    console.log('userId', id);
    yield delay(2000); // Vi later som at vi henter profilen

    yield put(getSuccess({
      id: 'uuid-123',
      name: 'Jhen Doe',
      avatar: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
    }));

    yield put(setLoading(false));
  });
}

// Her bundler vi sammen flere api kall for å produsere ønsket resultat
const handleGetProfile4 = function*() {
  yield takeLatest(PROFILE_GET4, function*(args) {
    yield put(setLoading(true));

    const credentials = yield delay(2000, { id: 'uuid-123' }); // Vi later som at vi henter credentials
    const profile = yield delay(2000, {
      id: 'uuid-123',
      name: 'Jhen Doe',
      avatar: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
    }); // Vi later som at vi henter profil

    // I dette eksempelet gjør vi sekvensielle kall fordi profil avhenger av credentials, men i noen tilfeller ønsker vi gjerne å gjøre alt parallelt
    // eg. yield.all(hentA, hentB)

    yield put(getSuccess(profile));

    yield put(setLoading(false));
  });
};


// Her henter vi profil som en side-effect av at credentials er satt
export const handleGetProfile5 = function*() {
  yield takeLatest(CREDENTIALS_GET_SUCCESS, function*(args) {
    const { payload: { userId } } = args;

    yield put(setLoading(true));
    console.log('userId', userId);
    yield delay(2000); // Vi later som at vi henter profilen

    yield put(getSuccess({
      id: 'uuid-123',
      name: 'Jhen Doe',
      avatar: 'https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80',
    }));

    yield put(setLoading(false));
  });
};


export const handleSaveProfile = function*() {
  yield takeLatest(PROFILE_SAVE, function*(args) {
    yield put(setLoading(true));
    yield delay(2000);
    yield put(setLoading(false));
    yield put(showToast('Profile has been saved', 'green', 4000));
  });
};

export default [
  handleGetProfile1(),
  handleGetProfile2(),
  handleGetProfile3(),
  handleGetProfile4(),
  handleSaveProfile()
];
