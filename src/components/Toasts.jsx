import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

const Toasts = () => {
  const { list: toasts } = useSelector(state => state.ui.toast);

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, width: 320, zIndex: 100 }}>
      <Grid container spacing={4}>
        {toasts.map(toast => (
          <Grid item xs={12}>
            <div style={{ padding: 10, background: toast.color}}>{toast.message}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Toasts;
