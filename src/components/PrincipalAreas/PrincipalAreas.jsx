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
    <p className={styles.description}>Descubra as áreas mais procuradas e relevantes para o mercado atual. Nosso portfólio abrange desde tecnologia e design até marketing e gestão empresarial, oferecendo soluções inovadoras para transformar ideias em resultados concretos.</p>
    <div className={styles.carouselContainer}>
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

      {/* Segundo carrossel */}
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
          pagination: true,
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
            speed: -0.4,
          },
          arrows: true,
          pagination: true,
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
    </section>
    </>
  );
}