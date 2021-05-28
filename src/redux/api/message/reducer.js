import { SET_SAVED_MESSAGE, SET_LOADING } from './constants';

const initialState = {
  message: '',
  loading: false
}

const reducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload.isLoading
      }
    case SET_SAVED_MESSAGE:
      return {
        ...state,
        message: payload.message
      }
    default:
      return state;
  }
}

export default reducer;
