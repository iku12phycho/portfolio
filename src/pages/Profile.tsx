import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './Profile.css';

type QandA = {
  id: number;
  question: string;
  answer: string;
};

const questions: QandA[] = [
  {
    id: 1,
    question: 'これまでのエンジニア経験の中で苦労したことは？',
    answer: 'ユーザーの要望から要件定義をし、開発提案をすることが大変でした。'+
    'ユーザーはなんとなく「もっとよくなればいいな」という曖昧な希望しかないことが多いため、'+
    '具体的にそれを形にして話を進めることに苦労しました。'+
    'ユーザーの希望から具体的な課題点を見出すこと、非エンジニアの相手でも伝わる言葉でなおかつ、質問がしやすい形式（クローズドな質問等）で話を進めることに気を付けました。',
  },
  {
    id: 2,
    question: '今後どういうことをしていきたい？',
    answer: '現職がレガシーな環境であるため、特にモダンな開発に弱いです。まずは現在の流れをつかんでいきたいです。'+
            'また現在、フロントではUI/UX、バックではクラス設計、テーブル設計などを一人で悩んでいることが多いです。'+
            'もっと様々なエンジニアの方とコミュニケーション、ディスカッションをとり、自身の設計の癖を直し、より良い形を探していきたいです。',
  },
]

function Profile(){
  const qaList = questions.map((item, i) => {
    return(
      <Grid container justifyContent='center' key={item.id}>
        <Grid item xs={11} md={10}>
          <Typography variant="h6" gutterBottom component="div" className="question">
            Q. {item.question}
          </Typography>
        </Grid>
        <Grid item xs={11} md={10}>
            <Typography variant="body1" gutterBottom component="div" className="answer">
              A.{item.answer}
            </Typography>
        </Grid>
      </Grid>
    );
  });
  return(
    <Grid container justifyContent="center" spacing={0.5} mt={5} mb={5}>
      <Grid item xs={12}>
          <Typography variant="h2" gutterBottom component="div">
            About Me
          </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{position: 'relative'}}>
          <Box sx={{
            left: { xs: '35%', md: '40%'},
            width: 'fit-content',
            position: 'relative',
            }}>
            <Avatar 
            alt="iku12phycho's icon"
            src="https://github.com/iku12phycho/portfolio/blob/gh-pages/ei.png?raw=true"
            sx={{ width: 100,
                  height: 100,
                  bgcolor: 'white'}} />
            <Typography variant="caption" gutterBottom component="div" sx={{marginLeft: '15px'}}>
              iku12phycho
            </Typography>
          </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
            <Typography variant="h6" gutterBottom component="div" className="question">
              エンジニア歴
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1" gutterBottom component="div" className="answer">
              2年半～3年未満
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6" gutterBottom component="div" className="question">
              趣味
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1" gutterBottom component="div" className="answer">
              映画鑑賞・楽器演奏・ゲーム
            </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className="splitRow"></Grid>
      <Grid item xs={12} md={6} sx={{textAlign: 'center'}}>
          <Typography variant="h6" gutterBottom component="div" className="question">
            参加プロジェクト
          </Typography>
      </Grid>
      <Grid item xs={12} md={6} className="answer">
          <ul>
            <li>会員制ECサイト開発・運用・保守</li>
            <li>業務アプリケーション（CRM）開発・運用・保守</li>
            <li>DX推進 業務ツール開発</li>
          </ul>
      </Grid>
      <Grid item xs={12} className="splitRow"></Grid>
      <Grid item xs={10} className="box">
          <Typography variant="h5" gutterBottom component="div">
            Q&A
          </Typography>
      </Grid>
      <div className="box">
        {qaList}
      </div>

    </Grid>
    );
}

export default Profile;