import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';

function Home(){
  return(
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
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
        <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Home;