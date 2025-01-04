import React, { useEffect } from 'react'
import styles from './Footer.module.css'
import { FaInstagram, FaXTwitter, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa6'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Footer() {
    useEffect(() => {
      AOS.init({ duration: 1200, once: true});
    }, []);

  return (
    <footer id='Support' className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.logo} data-aos="fade-up">Hivelancers</h2>
          
          <nav className={styles.navigation} data-aos="fade-up" data-aos-delay="200">
            <a href="#Home" className={styles.navLink} >Inicio</a>
            <a href="#About" className={styles.navLink}>Sobre Nós</a>
            <a href="#Process" className={styles.navLink}>Processos</a>
            <a href="#Categories" className={styles.navLink}>Categorias</a>
            <a href="#Timer" className={styles.navLink}>Lançamento</a>
            <a href="#Reviews" className={styles.navLink}>Avaliações</a>
            <a href="#Advantages" className={styles.navLink}>Vantagens</a>
            <a href="#Support" className={styles.navLink}>Suporte</a>
          </nav>

          <div className={styles.bottom}>
            <div className={styles.legal} >
              <span>Todos os direitos reservados ©2025</span>
              <a href="/politicas-de-privacidade">Políticas de Privacidade</a>
              <a href="/termos-de-uso">Termos de Uso</a>
            </div>

            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaXTwitter />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaTiktok />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaYoutube />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
