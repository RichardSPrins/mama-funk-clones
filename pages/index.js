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
        <div className={`${styles.contentGrid} ${styles.featuresSection}`}>
          <h3>Check out what's new!</h3>
          <div className={styles.contentGridBody}>
            <div className={styles.contentGridItem}>
              <div className={`${styles.contentCard} ${styles.shadow2}`}>
                <img src='/SunshineOGj.jpg'/>
                <div className={styles.contentCardBody}>
                  <h3><span style={{backgroundColor: '#48D922'}}>Sunshine</span> OG</h3>
                  <p>This is a second headline</p>
                  <p>this is a footer</p>
                </div>
                <div className={styles.contentCardButton}>
                  <p>Learn More</p>
                </div>
              </div>
            </div>
            <div className={styles.contentGridItem}>
              <div className={`${styles.contentCard} ${styles.shadow2}`}>
                <img src='/clone-tray.jpg'/>
                <div className={styles.contentCardBody}>
                  <h3><span style={{backgroundColor: '#48D922'}}>Current</span> Inventory</h3>
                  <p>This is a second headline</p>
                  <p>this is a footer</p>
                </div>
                <div className={styles.contentCardButton}>
                <p>Learn More</p>    
                </div>
              </div>
            </div>
            <div className={styles.contentGridItem}>
              <div className={`${styles.contentCard} ${styles.shadow2}`}>
                <img src='/clone.jpg'/>
                <div className={styles.contentCardBody}>
                  <h3><span style={{backgroundColor: '#48D922'}}>Integrated</span> Pest Management</h3>
                  <p>This is a second headline</p>
                  <p>this is a footer</p>
                </div>
                <div className={styles.contentCardButton}>
                  <p>Learn More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
    </div>
  )
}
