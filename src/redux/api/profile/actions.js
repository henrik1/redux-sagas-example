import {
  PROFILE_GET1,
  PROFILE_GET2, PROFILE_GET3, PROFILE_GET4,
  PROFILE_GET_SUCCESS, PROFILE_SAVE,
  SET_LOADING
} from './constants';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: { isLoading }
});

export const getSuccess = (profile) => ({
  type: PROFILE_GET_SUCCESS,
  payload: { profile }
})

export const getProfile1 = () => ({
  type: PROFILE_GET1
});

export const getProfile2 = () => ({
  type: PROFILE_GET2
});

export const getProfile3 = () => ({
  type: PROFILE_GET3
});

export const getProfile4 = () => ({
  type: PROFILE_GET4
});

export const saveProfile = () => ({
  type: PROFILE_SAVE
});
