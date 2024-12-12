import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import styles from './Reviews.module.css';

export default function Reviews() {
    return (
  
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Avaliações
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
        <div className={styles.reviews}>
        <Splide
        options={{
          type: 'loop',
          drag: 'free',
          autoWidth: true,
          focus: 'center',
          perPage: 3, // Número de slides visíveis
          autoScroll: {
            speed:0.5, // Velocidade do auto-scroll (ajuste conforme necessário)
          },
          arrows: true,
          pagination: true,
        }}
        extensions={{ AutoScroll }}
        className={styles.carouselSpacing}
      >
        <SplideSlide>
          <div className={styles.slide}>Contabilidade</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Desenvolvimento Mobile</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Marketing</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>UI Design</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Desenvolvimento Web</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Design Gráfico</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>UX Design</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Ilustração</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Redação</div>
        </SplideSlide>
      </Splide>
</div>

      </div>

    )
  }
  