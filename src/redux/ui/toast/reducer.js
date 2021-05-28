import { ADD_TOAST, REMOVE_TOAST } from './constants';

const initialState = {
  list: []
}

const reducer =(state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TOAST:
      return {
        ...state,
        list: [ payload, ...state.list ]
      }
    case REMOVE_TOAST:
      return {
        ...state,
        list: state.list.filter(toast => toast.uuid !== payload.uuid)
      }
    default:
      return state;
  }
}

export default reducer;
