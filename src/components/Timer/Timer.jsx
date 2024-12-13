'use client'

import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-03-01T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Atualiza imediatamente e depois a cada segundo
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contagem Regressiva</h1>
      <p className={styles.description}>
        Prepare-se para algo incrível! Nossa nova plataforma será lançada em breve.
        Fique atento para não perder nenhuma novidade.
      </p>

      <div className={styles.timerContainer}>
        <div className={styles.timerBox}>
          <div className={styles.number}>{timeLeft.days}</div>
          <div className={styles.label}>Dias</div>
        </div>
        <div className={styles.timerBox}>
          <div className={styles.number}>{timeLeft.hours}</div>
          <div className={styles.label}>Horas</div>
        </div>
        <div className={styles.timerBox}>
          <div className={styles.number}>{timeLeft.minutes}</div>
          <div className={styles.label}>Minutos</div>
        </div>
        <div className={styles.timerBox}>
          <div className={styles.number}>{timeLeft.seconds}</div>
          <div className={styles.label}>Segundos</div>
        </div>
      </div>
    </div>
  );
}

