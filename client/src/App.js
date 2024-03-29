import React from 'react';
import { Typography, AppBar, styled } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  '& .MuiAppBar-root': {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
}));

const App = () => {
  return (
    <Wrapper>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Wrapper>
  );
}

export default App;
