import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import './Home.css';

function Home(){
  return(
    <Grid container>
      <Grid item>
          <Box
          sx={{
            height: {xs :200, sm: 350},
            textAlign: 'center',
          }}>
            <Typography variant="h2" gutterBottom component="div" sx={{display: {xs: 'none', sm: 'block'}}}>
              iku12phycho 's Portfolio
            </Typography>
            <Box>
            <Typography variant="body1" gutterBottom component="div">
              iku12phychoのポートフォリオへようこそ。<br/>
              ここでは簡単にではありますが、プロフィールと開発スキル一覧に紹介しています。<br/>
              なお、連絡先は現在記載しておりません。ご了承ください。
            </Typography>
            </Box>
          </Box>
        </Grid>
        <div className="background">
          <ul className="floats">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </Grid>
  );
}

export default Home;