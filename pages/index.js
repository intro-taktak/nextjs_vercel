import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  fabDial: {
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
  },
}));


export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Intro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://introsolution.kr">Intro</a>
        </h1>

        <p className={styles.description}>
          인트로{' '}
          <code className={styles.code}>페이지 준비중입니다.</code>
        </p>
        <Button variant="contained">Hello World</Button>
      </main>

      <Fab variant="extended" className={classes.fabDial}>
        <SendIcon></SendIcon>
        문의하기
      </Fab>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⓒ{' '}
          <img src="/logo.png" alt="Intro Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
