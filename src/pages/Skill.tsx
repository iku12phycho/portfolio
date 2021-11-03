import React from "react";
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { SkillItem } from "../Types";
import './Skill.css';
import { Box } from "@mui/system";

const skillList: SkillItem[] = [
    {
      id: 1,
      title: 'PHP',
      level:  4,
      memo: '業務で主に使用しています。'
    },
    {
      id: 2,
      title: 'CAKEPHP',
      level:  4,
      memo: 'PHPのフレームワークです。業務で主に使用しています。'
    },
    {
      id: 3,
      title: 'JavaScript',
      level: 4,
      memo: '業務で主に使用しています。'
    },
    {
      id: 4,
      title: 'JQuery',
      level: 3,
      memo: '業務で使用していますが、最近は極力JQueryに頼らない記述法を模索しています。'
    },
    {
      id: 5,
      title: 'HTML5/CSS3',
      level: 4,
      memo: '業務で主に使用しています。'
    },
    {
      id: 6,
      title: 'Bootstrap',
      level: 4,
      memo: '業務で主に使用しています。'
    },
    {
      id: 7,
      title: 'MySQL(MariaDB)',
      level: 4,
      memo: '業務で主に使用しています。SQLを直接使用する場合とORMを使用する場合ともにあります。'
    },
    {
      id: 8,
      title: 'SQLServer',
      level: 2,
      memo: '業務にて使用しています。SQLを直接使用する場合とORMを使用する場合ともにあります。'
    },
    {
      id: 9,
      title: 'Python3',
      level: 3,
      memo: '簡単な業務ツール等の作成で使用しています。競プロでも少し使用しています。'
    },
    {
      id: 10,
      title: 'nodeJS',
      level: 2,
      memo: 'フロントエンドでもJSを使用しているため、基本問題なく使用できます。'
    },
    {
      id: 11,
      title: 'express',
      level: 2,
      memo: 'nodeJSの学習の際に使用しているフレームワークです。'
    },
    {
      id: 12,
      title: 'TypeScript',
      level: 1,
      memo: 'コンパイル言語の勉強としてはじめました。本ポートフォリオ作成に用いています。'
    },
    {
      id: 13,
      title: 'docker',
      level: 1,
      memo: '自宅での学習の際に使用しています。'
    },
    {
      id: 14,
      title: 'React',
      level: 1,
      memo: 'フロントエンドフレームワークを練習しています。本ポートフォリオ作成に用いています。'
    },
    {
      id: 15,
      title: 'Angular',
      level: 1,
      memo: 'フロントエンドフレームワークを練習しています。'
    },
    {
      id: 16,
      title: 'C++',
      level: 1,
      memo: '競プロを始める際に触り始めました。'
    },
    {
      id: 17,
      title: 'GoogleCloudPlatform',
      level: 1,
      memo: 'GoogleAppsScriptで業務ツールを作成する際に使用しています。'
    },
];


function Skill(){
  const skillItems = skillList.map((skill, i) => {
    return(
      <Grid item xs={12} sm={6} md={4} mt={2} key={skill.id.toString()}>
        <Card variant="outlined" className="card">
          <CardContent>
            <Typography variant="h5" component="div">
              {skill.title}
            </Typography>
            <Rating name="read-only" value={skill.level} readOnly />
            <Typography variant="body2">
              {skill.memo}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  });
  return(
    <div>
      <Box>
        <Typography variant='h2'>
          My Skills
        </Typography>
        <Typography variant='body1'>
          自身のスキルを一覧で挙げました。それぞれ最大値を5として習熟度を評価しています。
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {skillItems}
      </Grid>
    </div>
  );
}

export default Skill;