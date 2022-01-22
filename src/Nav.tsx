import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import './Nav.css';

type headerItem = {
  id: number;
  url: string;
  title: string;
}

const headerList: headerItem[] =[
  {
    id: 1,
    url: '/portfolio/',
    title: 'HOME',
  },
  {
    id: 2,
    url: '/portfolio/Profile',
    title: 'PROFILE',
  },
  {
    id: 3,
    url: '/portfolio/Skill',
    title: 'SKILL',
  },
  {
    id: 4,
    url: '/portfolio/Work',
    title: 'WORK',
  },
];

function Nav(){
  const navs = headerList.map((item, i) =>{
    return(
      <Grid key={item.id} container sx={{justifyContent: {xs: 'flext-start', sm: 'center'}}}>
        <Grid item xs={3} className='nav-item'>
          <Button color="inherit" component={Link} to={item.url}>{item.title}</Button>
        </Grid>
      </Grid>
    );
  });
  return(
    <AppBar className="positionFixed">
      <Toolbar>
          {navs}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;