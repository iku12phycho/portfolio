import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import './Nav.css';

type headerItem = {
  url: string;
  title: string;
}

const headerList: headerItem[] =[
  {
    url: '/portfolio/',
    title: 'HOME',
  },
  {
    url: '/portfolio/Profile',
    title: 'PROFILE',
  },
  {
    url: '/portfolio/Skill',
    title: 'SKILL',
  },
];

function Nav(){
  const navs = headerList.map((item, i) =>{
    return(
      <Grid container sx={{justifyContent: {xs: 'flext-start', sm: 'center'}}}>
        <Grid item xs={4} key={i.toString()} className='nav-item'>
          <Button color="inherit" component={Link} to={item.url}>{item.title}</Button>
        </Grid>
      </Grid>
    );
  });
  return(
    <AppBar position="static">
      <Toolbar>
          {navs}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;