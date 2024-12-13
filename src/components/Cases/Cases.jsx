import styles from './Cases.module.css';

export default function Cases() {
    return (
  
      <section className={styles.casesSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Cases de Sucesso
          </h1>
          <p className={styles.description}>
          Veja alguns destes vários projetos incríveis feitos pelos freelancers da hive, mostrando como transformamos desafios em conquistas, com resultados que fazem a verdadeira diferença.
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

      </section>

    )
  }
  