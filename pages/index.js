import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  logo: {
    height:150
  }
}));


export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <h1>
          Welcome to <a href="https://introsolution.kr">Intro</a>
        </h1>

        <p>
          인트로{' '}
          <code>페이지 준비중입니다.</code>
        </p>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          className={classes.fab}
        >
          <NavigationIcon className={classes.extendedIcon} />
          문의하기
        </Fab>
        <footer>
        <img src="/logo.png" alt="Intro Logo" className={classes.logo} />
      </footer>
    </Container>
    
    
  );
}