import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import styles from './PrincipalAreas.module.css';

export default function PrincipalAreas() {
  return (
    <>
    <div className={styles.Container}>
    <h1 className={styles.label}>principais áreas</h1>
    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <div className={styles.carouselContainer}>
      {/* Primeiro carrossel */}
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          autoWidth: true,
          focus: 'center',
          perPage: 3, // Número de slides visíveis
          autoScroll: {
            speed: 1, // Velocidade do auto-scroll (ajuste conforme necessário)
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

      {/* Segundo carrossel */}
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          autoWidth: true,
          focus: 'center',
          perPage: 3,
          autoScroll: {
            speed: 1,
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
          <div className={styles.slide}>Contabilidade</div>
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
        <SplideSlide>
          <div className={styles.slide}>Marketing</div>
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
            speed: 1,
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
