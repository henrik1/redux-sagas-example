import { SHOW, HIDE } from './constants';

const initialState = {
  open: false,
  message: ''
}

const reducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW:
      return {
        ...state,
        open: true,
        message: payload.message
      }
    case HIDE:
      return initialState
    default:
      return state;
  }
}

export default reducer;
