import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Nav from './Nav';
import './App.css';
import Profile from './pages/Profile';
import { Box } from '@mui/system';

function App() {
  return (
    <div>
      <Nav />
      <Box className='App-header'>
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
          </Switch>
            <Route exact path="/portfolio/Skill">
              <Skill />
            </Route>
      </Box>
    </div>
  );
}

export default App;
