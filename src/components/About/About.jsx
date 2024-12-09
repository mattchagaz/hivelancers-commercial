import styles from './about.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.label}>Sobre nós</div>
        <div className={styles.entireContent}>
            <div className={styles.yearLabel}>2024 - ATUAL</div>
            <h1 className={styles.title}>Hivelancers</h1>
            <p className={styles.description}>
              Encontre Freelancers para Qualquer Projeto
            </p>
        </div>
        </div>
      <div className={styles.gradientBg}>
            <p className={styles.description}>
               A Hivelancers é uma plataforma, desenvolvida por freelancers para freelancers, com o objetivo de simplificar e aprimorar a conexão entre usuários e prestadores de serviços.
            </p>
      </div>
    </section>
  );
}

