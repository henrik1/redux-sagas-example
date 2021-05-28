import { ADD_TOAST, REMOVE_TOAST, SHOW_TOAST } from './constants';

export const addToast = (uuid, message, color) => ({
  type: ADD_TOAST,
  payload: { uuid, message, color }
});

export const removeToast = (uuid) => ({
  type: REMOVE_TOAST,
  payload: { uuid }
});

export const showToast = (message, color, removeAfterMs = 2000) => ({
  type: SHOW_TOAST,
  payload: { message, color, removeAfterMs }
})
