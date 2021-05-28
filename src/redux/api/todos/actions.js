import { SET_TODOS, GET_TODOS, SET_LOADING, REMOVE_TODO } from './constants';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: { isLoading }
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }
})

export const getTodos = () => ({
  type: GET_TODOS,
  payload: { }
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: { todos }
});
