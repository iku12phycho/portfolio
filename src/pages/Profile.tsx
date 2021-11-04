import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './Profile.css';

type QandA = {
  question: string;
  answer: string;
};

const questions: QandA[] = [
  {
    question: 'なぜエンジニアになったの？',
    answer: 'きっかけはたまたま異動でエンジニア部署に配属されたためです。その後、この分野の面白さを感じそのまま続けています。',
  },
  {
    question: 'これまでのエンジニア経験の中で苦労したことは？',
    answer: 'ユーザーの要望から要件定義をし、開発提案をすることが大変でした。\
            ユーザーはなんとなく「もっとよくなればいいな」という曖昧な希望しかないことが多いため、\
            具体的にそれを形にして話を進めることに苦労しました。\
            非エンジニアと関わる際に相手に伝わる言葉でなおかつ、質問がしやすい形式（クローズドな質問等）で話を進めることに気を付けました。',
  },
  {
    question: '今後どういうことをしていきたい？',
    answer: '現職がレガシーな環境でああるため、特にモダンな開発に弱いです。まずは現在の流れをつかんでいきたいです。\
            また現在、フロントではUI/UX、バックではクラス設計、テーブル設計などを一人で悩んでいることが多いです。\
            もっと様々なエンジニアの方とコミュニケーション、ディスカッションをとり、自身の設計の癖を直し、より良い形を探していきたいです。',
  },
]

function Profile(){
  const qaList = questions.map((item, i) => {
    return(
      <div key={i}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom component="div" className="question">
            Q. {item.question}
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1" gutterBottom component="div" className="answer">
              A.{item.answer}
            </Typography>
        </Grid>
      </div>
    );
  });
  return(
    <Grid container spacing={0.5}>
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
              2年半
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
      <Grid item xs={12} className="box">
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