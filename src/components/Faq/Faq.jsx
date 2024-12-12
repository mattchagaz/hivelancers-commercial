import { useState } from 'react'
import { IoAddOutline,  IoClose } from "react-icons/io5";
import styles from './Faq.module.css'

const faqData = [
  {
    id: 1,
    question: 'É seguro usar a Hivelancers?',
    answer: 'Sim! Nós priorizamos a segurança dos nossos usuários. Contamos com um sistema de pagamento seguro que protege tanto freelancers quanto clientes. Além disso, monitoramos a plataforma para garantir interações respeitosas e temos suporte disponível 24h e 100% humanizado para resolver qualquer problema que possa surgir.',
    category: 'about'
  },
  {
    id: 2,
    question: 'Existe algum custo para usar a plataforma?',
    answer: 'Para freelancers, a criação de perfil e a busca por projetos são gratuitas, mas cobramos uma pequena taxa de serviço sobre os pagamentos recebidos. Para clientes, a publicação de projetos é gratuita, com opções de planos pagos para destacar os anúncios ou acessar funcionalidades adicionais.',
    category: 'about'
  },
  {
    id: 3,
    question: 'Posso confiar nos freelancers/clientes da plataforma?',
    answer: 'Todos os nossos usuários passam por verificações iniciais, e incentivamos avaliações e feedbacks após cada trabalho concluído. Essas avaliações ajudam a construir uma comunidade confiável, permitindo que você tome decisões com base em experiências reais de outros usuários.',
    category: 'about'
  },
  {
    id: 4,
    question: 'Como posso começar na Hivelancers?',
    answer: 'É muito simples! Se você é freelancer, basta criar uma conta, completar seu perfil com suas habilidades e portfólio e começar a buscar projetos. Se você é cliente, crie uma conta, publique um projeto ou procure diretamente por freelancers qualificados. Nossa interface foi projetada para ser intuitiva e rápida, ajudando você a dar os primeiros passos em poucos minutos.',
    category: 'about'
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
    category: 'support'
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
  },
  {
    id: 9,
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

