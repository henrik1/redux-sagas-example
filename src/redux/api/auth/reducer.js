import { CREDENTIALS_GET_SUCCESS, SET_LOADING } from './constants';

const initialState = {
  loading: false,
  credentials: null
}

const reducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload.isLoading
      }
    case CREDENTIALS_GET_SUCCESS:
      return {
        ...state,
        credentials: payload.credentials
      }
    default:
      return state;
  }
}

export default reducer;
