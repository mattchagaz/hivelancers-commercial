import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import styles from './PrincipalAreas.module.css';

export default function PrincipalAreas() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.label}>principais áreas</h1>
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
            arrows: false,
            pagination: false,
          }}
          extensions={{ AutoScroll }}
          className={styles.carouselSpacing}
        >
          <SplideSlide>
            <div className={styles.slide}>UI Design</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Marketing Digital</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Produção e Edição de Vídeo</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Desenvolvimento Web</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>SEO</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Tradução e Localização</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Consultoria Empresarial</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Redação de Artigos e Blogs</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Social Media Management</div>
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
            <div className={styles.slide}>Design de Apresentações</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Segurança da Informação</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Aulas Online e Tutoria</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Desenvolvimento de Software</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Gestão de Mídias Pagas</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>DevOps</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Design de Moda e Estilo</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Análise de Dados</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Treinamento Corporativo</div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.slide}>Contabilidade</div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

