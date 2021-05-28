import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { showToast } from '../../redux/ui/toast/actions';

export default () => {
  const dispatch = useDispatch();

  const handleClickGreen = () => {
    dispatch(showToast('Hello world', 'green', 2000));
  }

  const handleClickRed = () => {
    dispatch(showToast('Hello world', 'red', 2000));
  }

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button color="primary" onClick={handleClickGreen}>Show green toast</Button>
      <Button color="primary" onClick={handleClickRed}>Show red toast</Button>
    </div>
  )
};
