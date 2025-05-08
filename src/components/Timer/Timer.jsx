import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Timer.module.css';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out'});

    const targetDate = new Date('2025-09-25T23:59:59').getTime();

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
    <div id="Timer" className={styles.container} data-aos="fade-up">
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-right">Contagem Regressiva</h1>
        <p className={styles.description} data-aos="fade-left">
          Prepare-se para algo incrível! Nossa nova plataforma será lançada em breve.
          Fique atento para não perder nenhuma novidade.
        </p>

        <motion.div 
          className={styles.timerContainer} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          {Object.entries(timeLeft).map(([unit, value]) => {
            let animationDirection = 'zoom-in';
            let initial = { opacity: 0 };
            let animate = { opacity: 1 };
            
            if (unit === 'dias') {
              animationDirection = 'fade-down';
              initial = { y: -100, opacity: 0 };
              animate = { y: 0, opacity: 1 }; 
            } else if (unit === 'horas') {
              animationDirection = 'fade-up';
              initial = { y: 100, opacity: 0 };
              animate = { y: 0, opacity: 1 }; 
            } else if (unit === 'minutos') {
              animationDirection = 'fade-down';
              initial = { x: -100, opacity: 0 }; 
              animate = { x: 0, opacity: 1 }; 
            } else if (unit === 'segundos') {
              animationDirection = 'fade-up';
              initial = { x: 100, opacity: 0 };
              animate = { x: 0, opacity: 1 }; 
            }

            return (
              <div 
                key={unit} 
                className={styles.timerBox}
                data-aos={animationDirection} 
              >
                <motion.div
                  className={styles.timerContent}
                  initial={initial}
                  animate={animate}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.number}>{value}</div>
                  <div className={styles.label}>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        <a href="https://app.hivelancers.com/Signup" target="_blank">
          <motion.button 
            className={styles.createAccountButton}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            CRIAR CONTA
          </motion.button>
        </a>
      </div>
    </div>
  );
}
