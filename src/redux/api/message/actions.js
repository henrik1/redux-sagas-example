import { MESSAGE_SAVE, SET_SAVED_MESSAGE, SET_LOADING } from './constants';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: { isLoading }
});

export const setSaved = (message) => ({
  type: SET_SAVED_MESSAGE,
  payload: { message }
})

export const saveMessage = (message) => ({
  type: MESSAGE_SAVE,
  payload: { message }
})
