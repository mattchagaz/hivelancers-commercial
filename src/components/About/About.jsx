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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
      </div>
    </section>
  );
}

