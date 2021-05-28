import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar, Box, Button, CircularProgress, Toolbar, Typography } from '@material-ui/core';
import { getProfile4, saveProfile } from '../../redux/api/profile/actions';

export default () => {
  const { profile, loading: isLoading } =  useSelector(state => state.api.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile4());
  }, []);

  const handleSave = () => {
    dispatch(saveProfile());
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box style={{ width: '100%' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">

            <Typography variant="h6">
              Toast example 2
            </Typography>

            <Box display="flex" flexDirection="row" alignItems="center">
              { isLoading && <CircularProgress color="secondary" /> }
              { profile && <span>{profile.name}</span>}
              { profile && ( <Avatar src={profile.avatar} />)}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button disabled={isLoading} variant="contained" color="primary" onClick={handleSave}>Save profile</Button>
      </div>
    </div>
  )
};

