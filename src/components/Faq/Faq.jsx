import { useState } from 'react'
import { IoAddOutline,  IoClose } from "react-icons/io5";
import styles from './Faq.module.css'

const faqData = [
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'about'
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'about'
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'about'
  },
  {
    id: 4,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'support'
  },
  {
    id: 5,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'support'
  },
  {
    id: 6,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'services'
  },
  {
    id: 7,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'services'
  },
  {
    id: 8,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    category: 'services'
  }
]

export default function Faq() {
  const [activeId, setActiveId] = useState(null)
  const [activeCategory, setActiveCategory] = useState('about')

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  const changeCategory = (category) => {
    setActiveCategory(category)
    setActiveId(null)
  }

  const filteredFaqs = faqData.filter(faq => faq.category === activeCategory)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Perguntas Frequentes</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco
      </p>

      <div className={styles.buttonGroup}>
        <button 
          className={`${styles.button} ${activeCategory === 'about' ? styles.primaryButton : styles.secondaryButton} ${activeCategory === 'about' ? styles.active : ''}`}
          onClick={() => changeCategory('about')}
        >
          Sobre Nós
        </button>
        <button 
          className={`${styles.button} ${activeCategory === 'services' ? styles.primaryButton : styles.secondaryButton} ${activeCategory === 'services' ? styles.active : ''}`}
          onClick={() => changeCategory('services')}
        >
          Nossos Serviços
        </button>
        <button 
          className={`${styles.button} ${activeCategory === 'support' ? styles.primaryButton : styles.secondaryButton} ${activeCategory === 'support' ? styles.active : ''}`}
          onClick={() => changeCategory('support')}
        >
          Suporte
        </button>
      </div>

      <div className={styles.faqList}>
        {filteredFaqs.map((faq) => (
          <div key={faq.id} className={styles.faqItem}>
            <div
              className={`${styles.faqHeader} ${activeId === faq.id ? styles.active : ''}`}
              onClick={() => toggleFaq(faq.id)}
            >
              <span className={styles.faqText}>{faq.question}</span>
              <span className={styles.toggleIcon}>
                {activeId === faq.id ? <IoAddOutline /> : <IoClose />}
              </span>
            </div>
            <div className={`${styles.faqContent} ${activeId === faq.id ? styles.active : ''}`}>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

