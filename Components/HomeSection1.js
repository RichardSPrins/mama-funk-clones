import React from 'react'
import styles from '../styles/Home.module.css'

const HomeSection1 = () => {
  return (
    <div className={styles.contentRow}>
          <div className={styles.contentRowLeft}>
            <h2 className={styles.contentRowBlockHeading}>We Put California Cultivators <span style={{backgroundColor: '#48D922'}}>First</span></h2>
            <p>At Mama Funk Clones we believe quality, community and education should always come first. We know the key to a successful harvest begins with healthy, pest-free clones. There is nothing worse than starting off with problems and chasing your tail all season trying to fix what was broken before you received it. We’ve been there. We get it. Our goal is to help you start solid and finish solid every time.</p>
            <p>On this site, you will find many different resources including our personal garden procedures and the products we recommend. In the cultivars section, you will find detailed descriptions and photos of the variety of genetics we carry. Be sure to check our current inventory to see what we have in stock at the moment.</p>
          </div>
          <div className={styles.contentRowRight}>
            <img src='/clone.jpg'/>
          </div>
        </div>
  )
}

export default HomeSection1