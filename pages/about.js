import Head from 'next/head'
import Hero from '../Components/Hero'
import Layout from '../Components/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeSection1 from '../Components/HomeSection1'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mama Funk Clones | Putting California Cultivators First | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <Hero image='/hero-clones.jpg'/>
      <div className={styles.heroTitleCard} >
        <h1 className={styles.heroTitle}>We Grow Better Together</h1>
        <h2 className={styles.heroSubtitle}>Trusted, High quality genetics for the masses, right in the heart of SoCal</h2>
        <div className={styles.heroButton}>
          <Link href="/inventory"><p>Check Out Our Inventory</p></Link>
        </div>
      </div>
      <main className={styles.main}>
        <HomeSection1 />
        <div className={styles.contentGrid}>
          <h3>Check out what's new!</h3>
          <div className={styles.contentGridBody}>

          </div>
        </div>
      </main>
    </Layout>
    </div>
  )
}