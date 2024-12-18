import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-25T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
        const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ dias, horas, minutos, segundos });
      } else {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id='Timer' className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contagem Regressiva</h1>
        <p className={styles.description}>
          Prepare-se para algo incrível! Nossa nova plataforma será lançada em breve.
          Fique atento para não perder nenhuma novidade.
        </p>

        <div className={styles.timerContainer}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className={styles.timerBox}>
              <div className={styles.number}>{value}</div>
              <div className={styles.label}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
            </div>
          ))}
        </div>
        <button className={styles.createAccountButton}>CRIAR CONTA</button>
      </div>
    </div>
  );
}

