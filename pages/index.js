import React from 'react';
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContactForm from '../src/ContactForm'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  logo: {
    height:43,
    margin: '3%'
  },
  typoRoot:{
    width: '80%',
    margin: '3%'
  },
  typo:{
    marginBottom: 22,
    fontWeight: 800,
  }
}));


export default function Index() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <section>
      <img src="/logo.png" alt="Intro Logo" className={classes.logo}/>
      <Container maxWidth={false}>
      <ThemeProvider theme={theme}>
          <Typography variant="h1" className={classes.typo}>
            Welcome to Intro !
          </Typography>
          <Typography variant="h4" className={classes.typo}>
            Design ❤️ Development
          </Typography>
          <Typography variant="h5" className={classes.typo}>
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