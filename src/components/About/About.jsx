import { useEffect } from 'react';
import styles from './About.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out'}); 
  }, []);

  return (
    <section id="About" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div
          className={styles.label}
          data-aos="fade-up" 
        >
          Sobre nós
        </div>
        <div className={styles.groupDivs}>
          <div
            className={styles.entireContent}
            data-aos="fade-right" 
          >
            <div className={styles.yearLabel}>2024 - ATUAL</div>
            <h1 className={styles.title}>Hivelancers</h1>
            <p className={styles.description}>
              Encontre Freelancers para Qualquer Projeto
            </p>
          </div>

          <div
            className={styles.entireContent2}
            data-aos="fade-left" 
          >
            <p className={styles.description}>
              A Hivelancers é uma plataforma para freelancers, uma plataforma moderna e objetiva para todos os públicos. Facilitamos a conexão entre profissionais talentosos e projetos de diversas áreas, garantindo qualidade, agilidade e inovação. Seja você um freelancer buscando novas oportunidades ou uma empresa procurando os melhores profissionais. A Hivelancers é a solução ideal para alcançar seus objetivos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

