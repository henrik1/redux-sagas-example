import { SHOW, HIDE, CONFIRM, CANCEL } from './constants';

export const show = (message) => ({
  type: SHOW,
  payload: { message }
});

export const hide = () => ({
  type: HIDE,
});

export const confirm = () => ({
  type: CONFIRM,
});

export const cancel = () => ({
  type: CANCEL,
});
