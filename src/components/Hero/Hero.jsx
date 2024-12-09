import styles from './hero.module.css'
import { FaSearch } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import HivelancersImage from '../../assets/Screenshot 2024-12-09 at 16.13.30.png'
import HivelancersImage2 from '../../assets/Screenshot 2024-12-09 at 16.14.08.png'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Conecte-se aos Melhores Freelancers em Minutos
        </h1>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>
           <FaSearch /> Encontre Freelancers
          </button>
          <button className={styles.secondaryButton}>
          <FiFileText /> Publique seu Projeto
          </button>
        </div>
      </div>
      <div className={styles.browserFrame}>
        <div className={styles.browserHeader}>
          <div className={styles.browserControls}>
            <span className={styles.browserDot}></span>
            <span className={styles.browserDot}></span>
            <span className={styles.browserDot}></span>
          </div>
          <div className={styles.browserAddressBar}>
            <p className={styles.browserAddressContent}>hivelancers.com</p>
          </div>
          <div className={styles.browserActions}>
            <span className={styles.browserAction}></span>
            <span className={styles.browserAction}></span>
          </div>
        </div>
        <div className={styles.browserContent}>
        <img 
            src={HivelancersImage} 
            alt="Hivelancers platform interface" 
            className={styles.browserImage}
          />
        </div>
      </div>
    </div>
  )
}

