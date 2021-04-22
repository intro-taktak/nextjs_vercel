import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from '../src/ContactForm'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

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
    height: 42,
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
    color: 'white',
    padding: 30
  },
}));


export default function Index() {
  const classes = useStyles();

  return (
    <section>
        <CardMedia className={classes.jumbotron} image="/ux-store-jJT2r2n7lYA-unsplash.jpg">
          <img src="/logo.svg" alt="Intro Logo" className={classes.logo} />
          <div className={classes.jumbotronDiv}>
            <Typography variant="h3" className={classes.typo}>
              Design ❤️ Development
            </Typography>
            we are INTRO<br/><br/><br/><br/><br/>
          </div>
        </CardMedia><br/>


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
                  <img src="/wst.png" alt="Intro Logo" className={classes.logo} />
                  <Typography variant="body2" align="center">
                  {'Copyright © '}
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
                  <Typography variant="subtitle1" component="p">
                        대표이사 조영탁
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                        이메일 contact@introsolution.kr
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                        주소 서울시 구로구 고척동 중앙로6길 16 2층 인트로
                  </Typography>
                  <br/>
                </Grid>
                </Grid>
            </footer>
    </section>
  );
}