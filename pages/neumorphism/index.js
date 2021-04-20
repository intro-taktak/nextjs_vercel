import React from 'react';
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContactForm from '../../src/neumorphism/ContactForm'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  logo: {
    height:'50px',
    margin: '3%'
  },
  typoRoot:{
    width: '80%',
    margin: '3%'
  },
  typo:{
    marginBottom: 22,
    fontWeight: 800,
    textShadow: '13px 13px 26px #989a9c, -13px -13px 26px #ffffff;',
  },
  nm:{
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
  }
}));


export default function Index() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <section>
      <img src="/logo.svg" alt="Intro Logo" className={classes.logo}/>
      <Container maxWidth={false}>
      <ThemeProvider theme={theme}>
          <div className={classes.nm}>I</div>
          <div className={classes.nm}>N</div>
          <div className={classes.nm}>T</div>
          <div className={classes.nm}>R</div>
          <div className={classes.nm}>O</div>
          <br/>
          <Typography variant="h5" className={classes.typo}>
            Design ❤️ Development
          </Typography>
          <Typography variant="h6" className={classes.typo}>
            페이지 준비중입니다.
          </Typography>
        </ThemeProvider>
        <ContactForm />
        <footer>
        </footer>
      </Container>
    </section>
    
  );
}