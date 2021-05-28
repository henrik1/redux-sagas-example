import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../../redux/api/message/actions';
import { CircularProgress, TextField, Typography } from '@material-ui/core';

export default () => {
  const dispatch = useDispatch();

  const { message, loading } = useSelector(state => state.api.message);

  const handleSave = (evt) => {
    dispatch(saveMessage(evt.target.value));
  }

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">Saved message: {loading ? <CircularProgress color="secondary" /> : message}</Typography>
        <br />
        <TextField id="outlined-basic" label="Input with autosave" variant="outlined" onChange={handleSave} />
    </div>
  )
};
