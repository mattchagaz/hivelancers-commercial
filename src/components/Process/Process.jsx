import styles from './process.module.css';
import laptop from '../../assets/laptop-mockup-png-png-image-916081.png';
import screenContent from '../../assets/Screenshot 2024-12-09 at 20.33.34.png'; 

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className={styles.processContent}>
        <div>
          <div className={styles.label}>Processos</div>
          <div className={styles.steps}>
            <div className={`${styles.step} ${styles.stepActive}`}></div>
            <div className={styles.step}></div>
            <div className={styles.step}></div>
            <div className={styles.step}></div>
          </div>
          <h2 className={styles.title}>Configurações do Perfil</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="https://hivelancers.vercel.app/Login">
            <button className={styles.button}>Cadastrar-se Agora</button>
          </a>
        </div>
        <div className={styles.deviceMockup}>
          <img 
            src={laptop} 
            alt="Laptop mockup" 
            className={styles.laptop}
          />
          <img 
            src={screenContent} 
            alt="Screen content" 
            className={styles.screenContent}
          />
          <div className={`${styles.accent} ${styles.accentTop}`}></div>
          <div className={`${styles.accent} ${styles.accentBottom}`}></div>
        </div>
      </div>
    </section>
  );
}

