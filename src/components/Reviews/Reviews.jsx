import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import styles from './Reviews.module.css';
import star from '../../assets/star.png'

export default function Reviews() {
    return (
  
      <section className={styles.reviewsSection}>
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
        <div className={styles.slide}><p className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      </Splide>
</div>

      </section>

    )
  }
  