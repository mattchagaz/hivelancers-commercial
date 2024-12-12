import styles from './Footer.module.css'
import { FaInstagram, FaXTwitter, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.logo}>Hivelancers</h2>
          
          <nav className={styles.navigation}>
            <a href="/" className={styles.navLink}>Inicio</a>
            <a href="/sobre-nos" className={styles.navLink}>Sobre Nós</a>
            <a href="/processos" className={styles.navLink}>Processos</a>
            <a href="/categorias" className={styles.navLink}>Categorias</a>
            <a href="/casos-de-sucesso" className={styles.navLink}>Casos de Sucesso</a>
            <a href="/avaliacoes" className={styles.navLink}>Avaliações</a>
            <a href="/vantagens" className={styles.navLink}>Vantagens</a>
            <a href="/suporte" className={styles.navLink}>Suporte</a>
          </nav>

          <div className={styles.bottom}>
            <div className={styles.legal}>
              <span>Todos os direitos reservados ©2024</span>
              <a href="/privacidade">Políticas de Privacidade</a>
              <a href="/termos">Termos de Uso</a>
            </div>

            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaXTwitter />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaFacebook />
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
