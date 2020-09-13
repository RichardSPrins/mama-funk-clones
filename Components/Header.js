import React from 'react'
import styles from '../styles/Home.module.css'
import HeaderLink  from './HeaderLink'


const Header = () => {
  return (
    <div className={styles.header}>
      <div style={{height: '170px', width: '170px'}}>
        <img src='/Logo-1-removebg.png' style={{height: '100%', width: '100%'}}/>
      </div>
      <div className={styles.headerLinks}>
        <ul>
          <li ><HeaderLink href="/"><a className={styles.headerLink}>Home</a></HeaderLink></li>
          <li ><HeaderLink href="/about"><a className={styles.headerLink}>About</a></HeaderLink></li>
          <li ><HeaderLink href="/inventory"><a className={styles.headerLink}>Inventory</a></HeaderLink></li>
          <li ><HeaderLink href="/cultivars"><a className={styles.headerLink}>Cultivars</a></HeaderLink></li>
          <li ><HeaderLink href="/learn"><a className={styles.headerLink}>Learn</a></HeaderLink></li>
          <li ><HeaderLink href="/shop"><a className={styles.headerLink}>Shop</a></HeaderLink></li>
        </ul>
      </div>
      <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-around', width: '120px'}}>
        <i style={{ fontSize: '30px'}} className="fab fa-instagram"></i>
        <i style={{ fontSize: '30px'}} class="fab fa-facebook-square"></i>
        <i style={{ fontSize: '30px'}} class="fab fa-twitter"></i>
      </div>
    </div>
  )
}

export default Header