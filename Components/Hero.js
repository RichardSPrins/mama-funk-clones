import React from 'react'
import styles from '../styles/Home.module.css'

const Hero = ({image}) => {
  return (
    <div style={{position: 'absolute', top: '0', zIndex: '-1', width: '100%'}}>
      <img src={image} style={{width:'100%', height: '100vh'}}/>
      <div className={styles.shade}></div>
    </div>
  )
}

export default Hero