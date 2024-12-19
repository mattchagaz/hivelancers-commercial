import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { FaSearch } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import styles from './Reviews.module.css';
import star from '../../assets/star.png'

export default function Reviews() {
    return (
  
      <section id='Reviews' className={styles.reviewsSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Avaliações
          </h1>
          <p className={styles.description}>
          Na Hivelancers, garantimos qualidade, eficiência e a conexão entre empresas e os melhores freelancers do mercado. Veja o que alguns de nossos clientes dizem sobre os projetos entregues com excelência e confiança.
            </p>
        <div className={styles.buttonGroup}>
          <a href="https://hivelancers.vercel.app/Login" target='_blank'>
            <button className={styles.primaryButton}>
             <FaSearch /> Encontre Freelancers
            </button>
          </a>
          <a href="https://hivelancers.vercel.app/Login" target='_blank'>
            <button className={styles.secondaryButton}>
            <FiFileText /> Publique seu Projeto
            </button>
          </a>
        </div>
        </div>
        <div className={styles.reviews}>
        <Splide
        options={{
          type: 'loop',
          drag: 'free',
          autoWidth: true,
          focus: 'center',
          perPage: 3, 
          autoScroll: {
            speed: 0.4, 
          },
          arrows: true,
          pagination: false,
        }}
        extensions={{ AutoScroll }}
        className={styles.carouselSpacing}
      >
        <SplideSlide>
        <div className={styles.slide}><p className={styles.comment}>
        A plataforma superou minhas expectativas! Consegui encontrar freelancers altamente qualificados e entregas rápidas. Recomendo a todos que buscam resultados eficientes e profissionais.
            </p>
            <div className={styles.author} >
            <button className={styles.authorButton}>
              Maria Clara
            </button>
            </div>
            <div className={styles.helper}>
              <div className={styles.stars}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className={styles.jobs}>
              Desenvolvedora Web
            </div>
            </div>
            </div>
        </SplideSlide>
        <SplideSlide>
        <div className={styles.slide}><p className={styles.comment}>
          Hivelancers é uma excelente solução para quem precisa de agilidade e qualidade. Os profissionais cadastrados são muito competentes, e a experiência foi muito boa!
            </p>
            <div className={styles.author} >
            <button className={styles.authorButton}>
              João Silva
            </button>
            </div>
            <div className={styles.helper}>
              <div className={styles.stars}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className={styles.jobs}>
              Designer Gráfico
            </div>
            </div>
            </div>
        </SplideSlide>
        <SplideSlide>
        <div className={styles.slide}><p className={styles.comment}>
            Contratar freelancers foi bem tranquilo! A plataforma é bem intuitiva e os profissionais entregaram um trabalho que superou minhas expectativas. A comunicação é clara e o processo foi bem rápido pro serviço que eu precisava.
            </p>
            <div className={styles.author} >
            <button className={styles.authorButton}>
              Ana Beatriz
            </button>
            </div>
            <div className={styles.helper}>
              <div className={styles.stars}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className={styles.jobs}>
              Gestora de Projetos
            </div>
            </div>
            </div>
        </SplideSlide>
        <SplideSlide>
        <div className={styles.slide}><p className={styles.comment}>
           A Hivelancers é muito boa! Encontrei profissionais talentosos pro meu projeto em poucos minutos. A plataforma é prática, moderna e facilita bastante.
            </p>
            <div className={styles.author} >
            <button className={styles.authorButton}>
              Lucas Andrade
            </button>
            </div>
            <div className={styles.helper}>
              <div className={styles.stars}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className={styles.jobs}>
              Desenvolvedor Full Stack
            </div>
            </div>
            </div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}><p className={styles.comment}>
           Foi uma experiência ótima! Recebi propostas rapidamente e o freelancer que contratei entregou um trabalho impecável. Recomendo a plataforma a todos!
            </p>
            <div className={styles.author} >
            <button className={styles.authorButton}>
              Mariana Costa
            </button>
            </div>
            <div className={styles.helper}>
              <div className={styles.stars}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className={styles.jobs}>
               Marketing
            </div>
            </div>
            </div>
        </SplideSlide>
      </Splide>
</div>
      </section>

    )
  }
  