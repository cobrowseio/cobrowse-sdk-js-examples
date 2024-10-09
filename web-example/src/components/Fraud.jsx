import React from 'react'
import Icon from './Icon'
import styles from './Fraud.module.css'

const Fraud = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Unknown transaction</h1>
      <p className={styles.description}>Please report any unknown transactions using the fraud lines:</p>
      <div className={styles.contactItem}>
        <div className={styles.icon}>
          <Icon name='phone' />
        </div>
        <a className={styles.link} href='tel:5551234567'>555-123-4567</a>
      </div>
      <div className={styles.contactItem}>
        <div className={styles.icon}>
          <Icon name='envelope' />
        </div>
        <a className={styles.link} href='mailto:fraud@example.com'>fraud@example.com</a>
      </div>
      <p>Fraud phone line is open from Monday to Friday, 9am to 5pm.</p>
    </div>
  )
}

export default Fraud
