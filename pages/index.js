import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import HeroText from '../components/main/HeroText';
import Introduce from '../components/main/Introduce';
import WhatWeDo from '../components/main/WhatWeDo';
import Counter from '../components/main/Counter';
import Banner from '../components/main/Banner';
import Works from '../components/main/Works';
import Strategy from '../components/main/Strategy';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Mansion | Web Development Agency</title>
        <meta
          name='description'
          content='We are dedicated web development agency based in Ikeja, Nigeria.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <HeroText />
        <Introduce />
        <WhatWeDo />
        <Counter />
        <Banner />
        <Works />
        <Strategy />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
