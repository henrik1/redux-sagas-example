import toastSagas from './toast/sagas';
import confirmationDialogSagas from './confirmationDialog/sagas';

export default [
  ...toastSagas,
  ...confirmationDialogSagas
]
