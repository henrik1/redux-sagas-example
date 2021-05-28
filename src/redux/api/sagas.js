import authSagas from './auth/sagas';
import profileSagas from './profile/sagas';
import messageSagas from './message/sagas';
import todosSagas from './todos/sagas';

export default [
  ...authSagas,
  ...profileSagas,
  ...messageSagas,
  ...todosSagas,
]
