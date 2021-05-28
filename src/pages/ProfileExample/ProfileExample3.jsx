import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar, Box, CircularProgress, Toolbar, Typography } from '@material-ui/core';
import { getProfile3 } from '../../redux/api/profile/actions';

export default () => {
  const { profile, loading: isLoading } =  useSelector(state => state.api.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    // Vi vil jo egentlig ikke bry oss om noe annet her?
    dispatch(getProfile3());
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box style={{ width: '100%' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">

            <Typography variant="h6">
              Profile example 3
            </Typography>

            <Box display="flex" flexDirection="row" alignItems="center">
              { isLoading && <CircularProgress color="secondary" /> }
              { profile && <span>{profile.name}</span>}
              { profile && ( <Avatar src={profile.avatar} />)}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
};
