import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intro Solution</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://introsolution.kr">Intro Solution</a>
        </h1>

        <p className={styles.description}>
          인트로솔루션{' '}
          <code className={styles.code}>페이지 준비중입니다.</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="introsolution.kr"
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
