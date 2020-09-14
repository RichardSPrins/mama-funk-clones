import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerGridColumn}>
          <h3>Hours and Info</h3>
          <div className={styles.footerGridColumnBody}>
            <p>Monday-Saturday 10am-6pm</p>
            <p>Los Angeles Based</p>
            <p>Offering Delivery to All of California</p>
          </div>
        </div>
        <div className={styles.footerGridColumn}>
          <h3>Follow Us!</h3>
          <div className={styles.footerGridColumnBody}>
            <i style={{ fontSize: '30px', margin: '15px 10px'}} className="fab fa-instagram"></i>
            <i style={{ fontSize: '30px', margin: '10px'}} className="fab fa-facebook-square"></i>
            <i style={{ fontSize: '30px', margin: '10px'}} className="fab fa-twitter"></i>
          </div>
        </div>
        <div className={styles.footerGridColumn}>
          <h3>Helpful Links</h3>
          <div className={styles.footerGridColumnBody}>
            <p>This Is a link</p>
            <p>This Is a link</p>
            <p>This Is a link</p>
          </div>
        </div>
        <div className={styles.footerGridColumn}>
          <h3>Contact Us</h3>
          <div className={styles.footerGridColumnBody}>
            <p>info@mamafunkclones.com</p>
            <p>323.248.8800</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer