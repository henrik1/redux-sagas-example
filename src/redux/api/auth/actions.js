import {
  CREDENTIALS_GET,
  CREDENTIALS_GET_SUCCESS,
  SET_LOADING
} from './constants';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: { isLoading }
});

export const getSuccess = (credentials) => ({
  type: CREDENTIALS_GET_SUCCESS,
  payload: { credentials }
})

export const getCredentials = () => ({
  type: CREDENTIALS_GET
});
