import { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import styles from './Faq.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

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
    question: 'Que tipo de serviço nós oferecemos',
    answer: 'Oferecemos uma ampla gama de serviços que incluem consultoria empresarial, design gráfico, desenvolvimento de sites, marketing digital, gestão de mídias sociais, análise de dados, e muito mais. Nosso objetivo é atender às suas necessidades específicas com soluções personalizadas.',
    category: 'services'
  },
  {
    id: 6,
    question: 'Vocês oferecem suporte após a conclusão do serviço?',
    answer: 'Sim, oferecemos suporte pós-serviço para garantir que você esteja completamente satisfeito com o resultado. Dependendo do tipo de serviço, também podemos oferecer planos de manutenção contínua.',
    category: 'services'
  },
  {
    id: 7,
    question: 'Posso definir meus próprios preços pelos serviços?',
    answer: 'Sim, como freelancer, você tem total liberdade para definir os preços de seus serviços. No entanto, recomendamos pesquisar valores de mercado para manter a competitividade e atrair mais clientes para você.',
    category: 'services'
  },
  {
    id: 8,
    question: 'Posso negociar os valores diretamente com os clientes?',
    answer: 'Sim, você pode negociar os valores diretamente com os clientes dentro da plataforma. É importante ser claro e transparente durante a negociação para alinhar expectativas e garantir que ambas as partes estejam satisfeitas com o acordo.',
    category: 'services'
  },
  {
    id: 9,
    question: 'Como entro em contato com o suporte da plataforma?',
    answer: 'Você pode entrar em contato com a gente através do nosso chat online 24/7 e totalmente humanizado, ou clicando diretamente na seção "Ajuda" do site. Nossa equipe está disponível para responder suas dúvidas de forma rápida e eficiente.',
    category: 'support'
  },
  {
    id: 10,
    question: 'O que faço se tiver problemas com um cliente ou freelancer?',
    answer: 'Se surgir algum problema, você pode abrir um chamado diretamente na plataforma. Nossa equipe de suporte analisará a situação e mediará para encontrar uma solução justa para ambas as partes.',
    category: 'support'
  },
  {
    id: 11,
    question: 'Há algum limite para o valor que posso sacar?',
    answer: 'Sim, a plataforma pode ter limites diários dependendo do método de pagamento escolhido. Verifique as políticas da plataforma na seção de "Pagamentos" para mais informações sobre os limites aplicáveis e como maximizar os saques.',
    category: 'support'
  },
  {
    id: 12,
    question: 'Como posso atualizar meus dados cadastrais na plataforma?',
    answer: 'Para atualizar seus dados cadastrais, acesse a seção "Configurações" e "Editar Perfil" e edite as informações necessárias. Se encontrar qualquer dificuldade durante o processo, nossa equipe de suporte estará disponível para ajudar a garantir que suas informações sejam atualizadas corretamente.',
    category: 'support'
  }
]
export default function Faq() {
  const [activeId, setActiveId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('about');

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveId(null);
  };

  const filteredFaqs = faqData.filter(faq => faq.category === activeCategory);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out'});
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-aos="fade-up">Perguntas Frequentes</h1> 
      <p className={styles.description} data-aos="fade-up" data-aos-delay="200">
        Tem dúvidas? Estamos aqui para ajudar! Obtenha respostas rápidas e claras sobre nossos serviços, processos e como podemos atender às suas necessidades.
      </p>

      <div className={styles.buttonGroup} data-aos="fade-up" data-aos-delay="400">
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

      <div data-aos="fade-up"  className={styles.faqList}>
        {filteredFaqs.map((faq) => (
          <div 
            className={`${styles.faqItem} ${activeId === faq.id ? styles.active : ''}`} 
            key={faq.id} 
          >
            <div
              className={`${styles.faqHeader} ${activeId === faq.id ? styles.active : ''}`}
              onClick={() => toggleFaq(faq.id)}
            >
              <span className={styles.faqText}>{faq.question}</span>
              <span
                className={`${styles.toggleIcon} ${activeId === faq.id ? styles.iconOpen : styles.iconClose}`}
              >
                <IoClose />
              </span>
            </div>
            <div className={`${styles.faqContent} ${activeId === faq.id ? styles.active : ''}`}>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
