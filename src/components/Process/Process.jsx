import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Process.module.css';
import laptop from '../../assets/Macbook.png';
import laptopMobile from '../../assets/Macbook-mobile.png';
import screenContent1 from '../../assets/Screenshot 2024-12-09 at 16.14.08.png';
import screenContent2 from '../../assets/Screenshot 2024-12-09 at 20.33.34.png';
import screenContent3 from '../../assets/Screenshot 2024-12-09 at 16.13.30.png';
import screenContent4 from '../../assets/Screenshot 2024-12-09 at 20.33.34.png';
import screenContent5 from '../../assets/Screenshot 2024-12-09 at 20.33.34.png';
import screenContent6 from '../../assets/Screenshot 2024-12-13 at 01.42.59.png';
import screenContent7 from '../../assets/Screenshot 2024-12-13 at 01.43.16.png';

const processes = [
  {
    title: "Cadastro do Usuário",
    description: "Crie sua conta na plataforma HiveLancers para começar sua jornada.",
    image: screenContent1
  },
  {
    title: "Configurações do Perfil",
    description: "Personalize seu perfil com suas habilidades e experiências para se destacar.",
    image: screenContent2
  },
  {
    title: "Busca de Projetos",
    description: "Explore uma variedade de projetos que combinam com suas habilidades.",
    image: screenContent3
  },
  {
    title: "Proposta e Contratação",
    description: "Envie propostas para projetos e inicie sua colaboração com clientes.",
    image: screenContent4
  },
  {
    title: "Conclusão",
    description: "Complete seus projetos e construa sua reputação na plataforma.",
    image: screenContent5
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id='Process' className={styles.processSection}>
      <div className={styles.processContent}>
        <div className={styles.leftContent}>
          <div className={styles.label}>Processos</div>
          <div className={styles.steps}>
            {processes.map((_, index) => (
              <div 
                key={index}
                className={`${styles.step} ${index === activeStep ? styles.stepActive : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={styles.stepNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
          <h2 className={styles.title}>{processes[activeStep].title}</h2>
          <p className={styles.description}>
            {processes[activeStep].description}
          </p>
          <a href="https://hivelancers.vercel.app/Login">
            <button className={styles.button}>Cadastrar-se Agora</button>
          </a>
        </div>
        <div className={styles.deviceMockup}>
          <img 
            src={laptop} 
            alt="Laptop Mockup" 
            className={styles.laptop}
          />
          <img src={laptopMobile}
               alt="Laptop Mobile Mockup" 
               className={styles.laptopMobile}
          />
          {/* <AnimatePresence mode="wait">
            <motion.img 
              key={activeStep}
              src={processes[activeStep].image}
              alt={`Screen content for ${processes[activeStep].title}`}
              className={styles.screenContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence> */}
          <div className={`${styles.accent} ${styles.accentTop}`}></div>
          <div className={`${styles.accent} ${styles.accentBottom}`}></div>
        </div>
      </div>
    </section>
  );
}

