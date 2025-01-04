import React from 'react';
import styles from './Error404.module.css';

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>
          Oops! A página que você está procurando não foi encontrada.
        </p>
        <div className={styles.timerContainer}>
          <div className={styles.timerBox}>
            <span className={styles.number}>E</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.number}>R</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.number}>R</span>
          </div>
          <div className={styles.timerBox}>
            <span className={styles.number}>O</span>
          </div>
        </div>
        <button className={styles.createAccountButton} onClick={() => window.location.href = '/'}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
