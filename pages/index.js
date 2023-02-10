import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Severin</title>
        <meta name="description" content="Victor Severin Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Victor Severin Project Portfolio
          </p>

        </div>

        <div className={styles.center}>
          <h1>Under Constrution</h1>
        </div>

        <div className={styles.grid}>

        </div>
      </main>
    </>
  )
}
