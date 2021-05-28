import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar, Box, CircularProgress, Toolbar, Typography } from '@material-ui/core';
import { getCredentials } from '../../redux/api/auth/actions';
import { getProfile1 } from '../../redux/api/profile/actions';

export default () => {
  const { profile, loading: profileLoading } =  useSelector(state => state.api.profile);
  const { credentials, loading: authLoading } = useSelector(state => state.api.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCredentials());
  }, []);

  useEffect(() => {
    if (credentials?.id) {
      dispatch(getProfile1());
    }
  }, [credentials]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box style={{ width: '100%' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">

            <Typography variant="h6">
              Profile example 1
            </Typography>

            <Box display="flex" flexDirection="row" alignItems="center">
              { (profileLoading || authLoading) && <CircularProgress color="secondary" /> }
              { profile && <span>{profile.name}</span>}
              { profile && ( <Avatar src={profile.avatar} />)}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
};
