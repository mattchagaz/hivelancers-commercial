import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { TypeAnimation } from 'react-type-animation';
import { FaSearch } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import HivelancersImage from '../../assets/Screenshot 2024-12-09 at 16.14.08.png';
import HivelancersImageMobile from '../../assets/iphone-mockup.png';

export default function Hero() {
  const [isBlurred, setIsBlurred] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir mobile quando a largura for menor ou igual a 768px
    };

    handleResize(); // Verificar o tamanho da tela no carregamento
    window.addEventListener('resize', handleResize); // Atualizar ao redimensionar

    return () => window.removeEventListener('resize', handleResize); // Limpar listener
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='Home' className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${isBlurred ? styles.blurred : ''}`}>
          <TypeAnimation
            sequence={[
              'Conecte-se aos Melhores Freelancers em Minutos',
              3000,
              'Encontre Talentos Excepcionais Rapidamente',
              3000,
              'Impulsione Seus Projetos com Profissionais Qualificados',
              3000,
            ]}
            wrapper="span"
            speed={30}
            repeat={0}
            style={{ fontFamily: "Arial", display: 'inline-block' }}
          />
        </h1>
        <p data-aos="fade-in" data-aos-duration="1500" className={styles.description}>
          Deixe para trás a complicação de múltiplas plataformas. Encontre projetos, gerencie clientes e receba pagamentos diretamente no mesmo lugar.
        </p>
        <div data-aos="fade-up" data-aos-duration="1200" className={styles.buttonGroup}>
          <a href="https://app.hivelancers.com/Login" target='_blank' rel="noreferrer">
            <button className={styles.primaryButton}>
              <FaSearch /> Encontre Freelancers
            </button>
          </a>
          <a href="https://app.hivelancers.com/Login" target='_blank' rel="noreferrer">
            <button className={styles.secondaryButton}>
              <FiFileText /> Publique seu Projeto
            </button>
          </a>
        </div>
      </div>

      {/* Condicional para exibir o conteúdo certo */}
      {isMobile ? (
        <div data-aos="zoom-in" data-aos-duration="1200" className={styles.mobileImageContainer}>
          <img
            src={HivelancersImageMobile}
            alt="Hivelancers mobile mockup"
            className={styles.mobileImage}
          />
        </div>
      ) : (
        <div data-aos="zoom-in" data-aos-duration="1200" className={styles.browserFrame}>
          <div className={styles.browserHeader}>
            <div className={styles.browserControls}>
              <span className={styles.browserDot}></span>
              <span className={styles.browserDot}></span>
              <span className={styles.browserDot}></span>
            </div>
            <div className={styles.browserAddressBar}>
              <a href="https://app.hivelancers.com/Login" target='_blank' rel="noreferrer">
                <p className={styles.browserAddressContent}>www.hivelancers.com</p>
              </a>
            </div>
            <div className={styles.browserActions}>
              <span className={styles.browserAction}></span>
              <span className={styles.browserAction}></span>
            </div>
          </div>
          <div className={styles.browserContent}>
            <img
              src={HivelancersImage}
              alt="Hivelancers platform interface"
              className={styles.browserImage}
            />
          </div>
        </div>
      )}

      <div className={styles.overlay}></div>
    </div>
  );
}
