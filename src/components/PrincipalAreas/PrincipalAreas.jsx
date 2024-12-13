import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import styles from './PrincipalAreas.module.css';

export default function PrincipalAreas() {
  return (
    <>
    <section className={styles.categoriesSection}>
    <h1 className={styles.label}>Categorias</h1>
    <p className={styles.description}>Procurando ajuda? Aqui estão algumas das principais categorias mais pesquisadas na Hivelancers.</p>
    <div className={styles.carouselContainer}>
      {/* Primeiro carrossel */}
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          autoWidth: true,
          focus: 'center',
          perPage: 3, 
          autoScroll: {
            speed: -0.4, 
          },
          arrows: false,
          pagination: false,
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
            arrows: false,
            pagination: false,
          }}
          extensions={{ AutoScroll }}
          className={styles.carouselSpacing}
        >
          <SplideSlide>
            <div className={styles.slide}>Desenvolvimento Mobile</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Produção e Edição de Áudio</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Automação e Scripts</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Copywriting</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Animação e Motion Graphics</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Machine Learning e Inteligência Artificial</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>UX Design</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Fotografia</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Desenvolvimento de Jogos</div>
          </SplideSlide>
        </Splide>

      {/* Terceiro carrossel */}
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          autoWidth: true,
          focus: 'center',
          perPage: 3,
          autoScroll: {
            speed: -0.4,
          },
          arrows: false,
          pagination: false,
        }}
        extensions={{ AutoScroll }}
        className={styles.carouselSpacing}
      >
        <SplideSlide>
          <div className={styles.slide}>Redação</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Ilustração</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>UI Design</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Design Gráfico</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>UX Design</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Desenvolvimento Web</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>UX Design</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Marketing</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Desenvolvimento Mobile</div>
        </SplideSlide>
        <SplideSlide>
          <div className={styles.slide}>Contabilidade</div>
        </SplideSlide>
      </Splide>
    </div>
    </div>
    </>
  );
}

