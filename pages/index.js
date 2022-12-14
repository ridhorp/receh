import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { React, useState } from "react";

export default function Home() {
  const [jokes, setJokes] = useState("");

  const moreJokes = async (e) => {
    e.preventDefault();
    // Fetch data from external API
    const res = await fetch(`https://candaan-api.vercel.app/api/text/random`)
    const data = await res.json()

    // Pass data to the page via props
    setJokes(data.data)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Jokes Receh</title>
        <meta name="description" content="semoga membantu kalian mendapatkan jokes receh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Jokes Receh!
        </h1>

        <p id='txtReceh' className={styles.description}>
          {jokes}
        </p>

        <button className={styles.button}
          onClick={(e) => {
            moreJokes(e);
          }}>
          Jokes Receh!
        </button>
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://www.instagram.com/ridhorprdn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iseng by{' ridhorprdn '}
          </a>
          <a
            className='mt-2'
            href="https://candaan-api.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API by{' Candaan API '}
          </a>
        </div>
      </footer>
    </div >
  )
}