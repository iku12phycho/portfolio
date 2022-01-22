import React from "react";
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { SkillItem } from "../Types";
import './Skill.css';
import { Box } from "@mui/system";
import { useInView, IntersectionOptions } from 'react-intersection-observer';

const skillList: SkillItem[] = [
    {
      id: 1,
      title: 'PHP',
      level:  4,
      memo: '業務で主に使用しています。',
      iconUrl: 'https://www.php.net//images/logos/new-php-logo.svg'
    },
    {
      id: 2,
      title: 'CAKEPHP',
      level:  4,
      memo: 'PHPのフレームワークです。業務で主に使用しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/cakephp_original_logo_icon_146608.png'
    },
    {
      id: 3,
      title: 'JavaScript',
      level: 4,
      memo: '業務で主に使用しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/javascript_logo_icon_145155.png'
    },
    {
      id: 4,
      title: 'JQuery',
      level: 3,
      memo: '業務で使用していますが、最近は極力JQueryに頼らない記述法を模索しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/jquery_original_wordmark_logo_icon_146447.png'
    },
    {
      id: 5,
      title: 'HTML5/CSS3',
      level: 4,
      memo: '業務で主に使用しています。',
      iconUrl: ''
    },
    {
      id: 6,
      title: 'Bootstrap',
      level: 4,
      memo: '業務で主に使用しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png'
    },
    {
      id: 7,
      title: 'MySQL(MariaDB)',
      level: 4,
      memo: '業務で主に使用しています。SQLを直接使用する場合とORMを使用する場合ともにあります。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_mariadb_icon_130403.png'
    },
    {
      id: 8,
      title: 'SQLServer',
      level: 2,
      memo: '業務にて使用しています。SQLを直接使用する場合とORMを使用する場合ともにあります。',
      iconUrl: ''
    },
    {
      id: 9,
      title: 'Python3',
      level: 3,
      memo: '簡単な業務ツール等の作成で使用しています。競プロでも少し使用しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png'
    },
    {
      id: 10,
      title: 'nodeJS',
      level: 3,
      memo: 'フロントエンドでもJSを使用しているため、基本問題なく使用できます。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png'
    },
    {
      id: 11,
      title: 'express',
      level: 2,
      memo: 'nodeJSの学習の際に使用しているフレームワークです。',
      iconUrl: ''
    },
    {
      id: 12,
      title: 'TypeScript',
      level: 1,
      memo: 'コンパイル言語の勉強としてはじめました。本ポートフォリオ作成に用いています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_typescript_official_icon_130107.png'
    },
    {
      id: 13,
      title: 'docker',
      level: 2,
      memo: '自宅での学習の際に使用しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/128/docker_plain_logo_icon_146554.png'
    },
    {
      id: 14,
      title: 'React',
      level: 1,
      memo: 'フロントエンドフレームワークを練習しています。本ポートフォリオ作成に用いています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/128/react_original_logo_icon_146374.png'
    },
    {
      id: 15,
      title: 'Angular',
      level: 1,
      memo: 'フロントエンドフレームワークを練習しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_angular_icon_130754.png'
    },
    {
      id: 16,
      title: 'C++',
      level: 1,
      memo: '競プロを始める際に触り始めました。',
      iconUrl: ''
    },
    {
      id: 17,
      title: 'GoogleCloudPlatform',
      level: 1,
      memo: 'GoogleAppsScriptで業務ツールを作成する際に使用しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/128/google_cloud_logo_icon_171058.png'
    },
    {
      id: 18,
      title: 'Heroku',
      level: 2,
      memo: '個人の開発でデプロイ先に活用しています。',
      iconUrl: 'https://cdn.icon-icons.com/icons2/2108/PNG/128/heroku_icon_130912.png'
    },
];

type Props = {
  skill: SkillItem,
  inViewOptions: IntersectionOptions
}

function SkillCard(props: Props){
  const [ref, inView] = useInView(props.inViewOptions);
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      mt={1}
      mb={1}
      ref={ref}
      className={`skillCard ${inView ? "in-view" : ""}`}
      >
      <Card 
        variant="outlined"
        className="card"
        >
        <CardContent>
          <Typography variant="h5" component="div">
            {props.skill.title}
          </Typography>
          <Rating name="read-only" value={props.skill.level} readOnly />
          <Typography variant="body2">
            {props.skill.memo}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

function Skill(){
  const inViewOptions = {
    root: null,
    rootMargin: '0px 0px -75px 0px',
    triggerOnce: true
  };
  const skillItems = skillList.map((skill, i) => {
    return(
      <SkillCard skill={skill} key={skill.id} inViewOptions={inViewOptions} />
    )
  });
  return(
    <div>
      <Box mt={5} mb={5}>
        <Typography variant='h2'>
          My Skills
        </Typography>
        <Typography variant='body1'>
          自身のスキルを一覧で挙げました。それぞれ最大値を5として習熟度を評価しています。
        </Typography>
      </Box>
      <Grid container spacing={2} mb={5}>
        {skillItems}
      </Grid>
    </div>
  );
}

export default Skill;