import { PROFILE_GET_SUCCESS, SET_LOADING } from './constants';

const initialState = {
  loading: false,
  profile: null
}

const reducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload.isLoading
      }
    case PROFILE_GET_SUCCESS:
      return {
        ...state,
        profile: payload.profile
      }
    default:
      return state;
  }
}

export default reducer;
