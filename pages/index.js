import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className={styles.container}>
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
