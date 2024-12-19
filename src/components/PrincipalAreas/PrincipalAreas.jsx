import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './PrincipalAreas.module.css';

export default function PrincipalAreas() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out'}); 
  }, []);

  return (
    <>
      <section 
        id="Categories" 
        className={styles.categoriesSection}
        data-aos="fade-up" 
      >
        <h1 className={styles.label} data-aos="fade-right">Categorias</h1>
        <p className={styles.description} data-aos="fade-left">
          Descubra as áreas mais procuradas e relevantes para o mercado atual. Nosso portfólio abrange desde tecnologia e design até marketing e gestão empresarial, oferecendo soluções inovadoras para transformar ideias em resultados concretos.
        </p>
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
              arrows: false,
              pagination: false,
            }}
            extensions={{ AutoScroll }}
            className={styles.carouselSpacing}
          >
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>Contabilidade</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>Desenvolvimento Mobile</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>Marketing</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>UI Design</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>Desenvolvimento Web</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>Design Gráfico</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>UX Design</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
              <div className={styles.slide}>Ilustração</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-right">
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
              arrows: false,
              pagination: false,
            }}
            extensions={{ AutoScroll }}
            className={styles.carouselSpacing}
          >
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>Desenvolvimento Mobile</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>Contabilidade</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>UI Design</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>Desenvolvimento Web</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>Design Gráfico</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>UX Design</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>Ilustração</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
              <div className={styles.slide}>Redação</div>
            </SplideSlide>
            <SplideSlide data-aos="flip-left">
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
              arrows: false,
              pagination: false,
            }}
            extensions={{ AutoScroll }}
            className={styles.carouselSpacing}
          >
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>Redação</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>Ilustração</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>UI Design</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>Design Gráfico</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>UX Design</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>Desenvolvimento Web</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>UX Design</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>Marketing</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>Desenvolvimento Mobile</div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up">
              <div className={styles.slide}>Contabilidade</div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
}
