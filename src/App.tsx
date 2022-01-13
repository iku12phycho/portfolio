import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Skill from './pages/Skill';
import Work from './pages/Work';
import Nav from './Nav';
import './App.css';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles'


const Offset = styled('div')(({theme}) => theme.mixins.toolbar);

function App() {
  return (
    <div>
      <Nav />
      <Offset />
      <Box className='App'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio/">
              <Home />
            </Route>
            <Route exact path="/portfolio/Profile">
              <Profile />
            </Route>
            <Route exact path="/portfolio/Skill">
              <Skill />
            </Route>
            <Route exact path="/portfolio/Work">
              <Work />
            </Route>
          </Switch>
      </Box>
    </div>
  );
}

export default App;
