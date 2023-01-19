import React from 'react'
import styles from './Message.module.css';

const Message = ({ typ }) => {

  let messageType;
  switch (typ) {
    case 'chyba':
      messageType = styles.error;
      break;
    case 'varovani':
      messageType = styles.warning;
      break;
    default:
      messageType = styles.info;
  }

  return (
    <>
      <div className={messageType}>
        <h1 className={styles.title}>Message</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h2 className='title'>Druhá Message</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className={typ === "chyba" ? styles.error : styles.info}>
        <h1 className={styles.title}>Message</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h2 className='title'>Druhá Message</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className={styles[typ] || styles.info}>
        <h1 className={styles.title}>Message</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h2 className='title'>Druhá Message</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </>
  )
}

export default Message