import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { getTodos, removeTodo } from '../../redux/api/todos/actions';

export default () => {
  const { todos, loading } = useSelector(state => state.api.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      { loading && <CircularProgress color="primary" />}

      <List style={{ maxWidth: 400 }}>
        {todos.map(todo => (
          <ListItem>
            <ListItemText
              primary={todo.text}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                disabled={loading}
                onClick={() => handleDelete(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
