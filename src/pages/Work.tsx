import React from "react";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { WorkItem } from '../Types';

const workList: WorkItem[] = [
  {
    id: 1,
    title: 'シェアTODO',
    description: 'ログイン機能を持たせたTODOリストを作成しました。作成するタスクを設定次第で公開し、他者と共有することができます。',
    skills: 'TypeScript, BootStrap, express(Node.js), docker',
    url: 'https://iku12phycho-opentodo-as7e9tg84.herokuapp.com/'
  }
]

function Work(){
  const workItems = workList.map((work, i) => {
    return(
    <Grid item xs={12} key={work.id}>
      <Card variant="outlined" className="card">
        <CardContent>
          <Typography variant="h5" component="div">
            {work.title}
          </Typography>
          <Typography variant="body2">
            {work.description}
          </Typography>
          <Typography variant="body2">
            使用言語等：{work.skills}
          </Typography>
          <CardActions>
            <Button 
              variant="contained"
              size="small"
              href={work.url}
              target="_blank"
              rel="noreferrer noopener"
            >
            見に行く
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
    )
  });

  return(
    <div>
      <Grid container>
        {workItems}
      </Grid>
    </div>
  );
}

export default Work;