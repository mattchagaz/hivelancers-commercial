import styles from './Reviews.module.css';

export default function Reviews() {
    return (
  
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Cases de Sucesso
          </h1>
          <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            </p>
          <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                Encontre Freelancers
              </button>
              <button className={styles.secondaryButton}>
               Publique seu Projeto
              </button>
          </div>
        </div>
        <div className={styles.cases}>
  <div className={styles.case}></div>
  <div className={styles.case}></div>
  <div className={styles.case}></div>
  <div className={styles.case}></div>
  <div className={styles.case}></div>
  <div className={styles.case}></div>
  <div className={styles.case}></div>
</div>

      </div>

    )
  }
  