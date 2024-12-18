import styles from './about.module.css';

export default function AboutSection() {
  return (
    <section id="About" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.label}>Sobre nós</div>
        <div className={styles.groupDivs}>
        <div className={styles.entireContent}>
            <div className={styles.yearLabel}>2024 - ATUAL</div>
            <h1 className={styles.title}>Hivelancers</h1>
            <p className={styles.description}>
              Encontre Freelancers para Qualquer Projeto
            </p>
        </div>
    
      <div className={styles.entireContent2}>
            <p className={styles.description}>
            A Hivelancers é uma plataforma para freelancers, uma plataforma moderna e objetiva para todos os públicos. Facilitamos a conexão entre profissionais talentosos e projetos de diversas áreas, garantindo qualidade, agilidade e inovação. Seja você um freelancer buscando novas oportunidades ou uma empresa procurando os melhores profissionais. A Hivelancers é a solução ideal para alcançar seus objetivos!
            </p>
      </div>
      </div>
      </div>
    </section>
  );
}

