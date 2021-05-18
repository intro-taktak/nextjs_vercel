import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../src/ContactForm'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  
  typoRoot: {
    width: '80%',
    margin: '3%'
  },
  typo: {
    marginBottom: 22,
    fontWeight: 800,
    textShadow: '13px 13px 26px #989a9c, -13px -13px 26px #ffffff;',
  },
  nm: {
    borderRadius: '35px',
    background: '#edf0f3',
    boxShadow: '13px 13px 26px #989a9c, -13px -13px 26px #ffffff;',
    width: '130px',
    height: '130px',
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 90,
    float: 'left',
    marginRight: 30,
    marginBottom: 30
  },
  logo: {
    width: '25%',
    maxWidth: '180px',
    margin: '5%',
  },
  flogo: {
    width: 200,
    margin: '5%',
  },
  image: {
    width: '100%',
    backgroundColor: 'red'
  },
  jumbotron: {
    width: '100%',
  },
  jumbotronDiv: {
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#292728',
    color: 'lightgray',
    padding: 30
  },
  footersub:{
    color: 'white',
    width: 70,
    float: "left",
    fontWeight: 800,
    marginLeft: 15,
  },
  c1: {
    marginTop: 100,
    marginBottom: 100
  },
  contentImage: {
    width: '300px',
  }
}));


export default function Index() {
  const classes = useStyles();

  return (
    <section>
      <Head>
          <meta name="description" content="We turn your dream into reality"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="인트로"/>
          <meta property="og:description" content="Design, Solution, Consilience: INTRO"/>
          <meta property="og:image" src="wst.png"/>
          <meta property="og:url" content="https://www.introsolution.kr"/>
          <link rel="canonical" href="https://www.introsolution.kr"></link>
      </Head>
        <CardMedia className={classes.jumbotron} image="/ux-store-jJT2r2n7lYA-unsplash.jpg">
          <img src="/logo.svg" alt="Intro Logo" className={classes.logo} />
          <div className={classes.jumbotronDiv}>
            <Typography variant="h3" className={classes.typo}>
              Trust, Youth, Consilience
            </Typography>
            <br/>
            <Typography variant="h5" className={classes.typo}>
              소프트웨어와 디자인, 통섭적 역량으로 새로운 가치를 만듭니다.
            </Typography>
            <br/><br/><br/><br/>
          </div>
        </CardMedia>

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.c1}
        >
          <Grid item>
            <img src="/balazs-ketyi-LPWl2pEVGKc-unsplash.jpg" alt="c1" className={classes.contentImage} />
          </Grid>

        </Grid>


        <ContactForm />
        <footer className={classes.footer}>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <Grid item>
                  <br/>
                  <img src="/wst.png" alt="Intro Logo" className={classes.flogo} />
                  <Typography variant="body2" align="center">
                    {'Copyright '}
                  <MuiLink color="inherit" href="https://introsolution.kr">
                      INTRO
                  </MuiLink>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                  </Typography>
                  <br/>
                </Grid>
                <Grid item>
                  <br/>
                  <Typography variant="subtitle1">
                    <div className={classes.footersub}>대표이사</div>조 영 탁
                  </Typography>
                  <Typography variant="subtitle1">
                    <div className={classes.footersub}>이메일</div>contact@introsolution.kr
                  </Typography>
                  <Typography variant="subtitle1">
                    <div className={classes.footersub}>주소</div>서울시 구로구 중앙로6길 16 2층
                  </Typography>
                  <br/>
                </Grid>
              </Grid>
          </footer>
    </section>
  );
}