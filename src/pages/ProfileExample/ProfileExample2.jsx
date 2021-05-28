import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar, Box, CircularProgress, Toolbar, Typography } from '@material-ui/core';
import { getProfile2 } from '../../redux/api/profile/actions';
import { getCredentials } from '../../redux/api/auth/actions';



const Child = () => {
  const { profile, loading: isLoading } =  useSelector(state => state.api.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile2());
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box style={{ width: '100%' }} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">

            <Typography variant="h6">
              Profile example 2
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

export default () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCredentials());
  }, []);

  return (
    <div>
      <Typography variant="h6">
        Innloggede sider
      </Typography>
      <Child />
    </div>
  )
}
