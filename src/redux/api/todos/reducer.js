import { SET_TODOS, SET_LOADING } from './constants';

const initialState = {
  loading: false,
  todos: []
}

const reducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        todos: payload.todos
      }
    case SET_LOADING:
      return {
        ...state,
        loading: payload.isLoading
      }
    default:
      return state;
  }
}

export default reducer;
