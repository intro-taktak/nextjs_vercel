import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContactForm from '../src/ContactForm'

const useStyles = makeStyles((theme) => ({
  logo: {
    height:150
  }
}));


export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <h1>
          Welcome to <a href="https://introsolution.kr">Intro</a>
        </h1>

        <p>
          인트로{' '}
          <code>페이지 준비중입니다.</code>
        </p>
        
        <ContactForm />
        <footer>
        <img src="/logo.png" alt="Intro Logo" className={classes.logo} />
      </footer>
      asdas
    </Container>
  );
}