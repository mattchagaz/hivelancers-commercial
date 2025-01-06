import React, { useEffect } from 'react'
import { CreditCard, HeadphonesIcon, Users, Receipt, Shield, Globe } from 'lucide-react'
import styles from './Advantages.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Advantages() {
  const features = [
    {
      icon: <Users className={styles.icon} />,
      title: 'Talentos',
      description: 'Verificados',
      fullDescription: 'Conectamos você com freelancers qualificados e verificados, garantindo profissionais de alta qualidade para seu projeto.'
    },
    {
      icon: <Shield className={styles.icon} />,
      title: 'Segurança',
      description: 'Garantida',
      fullDescription: 'Sistema de pagamentos protegido. Seu dinheiro só é liberado após a aprovação do trabalho entregue.'
    },
    {
      icon: <Globe className={styles.icon} />,
      title: 'Projetos',
      description: 'Diversos',
      fullDescription: 'Acesso a uma ampla variedade de projetos e oportunidades em diferentes áreas de atuação.'
    },
    {
      icon: <Receipt className={styles.icon} />,
      title: 'Menores',
      description: 'Taxas',
      fullDescription: 'Oferecemos as taxas mais competitivas do mercado, maximizando seus ganhos em cada projeto.'
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out'});
  }, []);

  return (
    <section id='Advantages' className={styles.container}>
      <h2 className={styles.title} data-aos="fade-up">Vantagens</h2> 
      <p className={styles.description} data-aos="fade-up" data-aos-delay="200">
      Com nosso compromisso em excelência e inovação, garantimos benefícios exclusivos para nossos clientes. Nossa abordagem personalizada, profissionais experientes e soluções estratégicas proporcionam os melhores resultados para impulsionar o sucesso do seu negócio.
      </p>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={styles.feature} 
            data-aos="zoom-in" 
            data-aos-delay={index * 200} 
          >
            <div className={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
            <p className={styles.fullDescription}>{feature.fullDescription}</p>
          </div>
        ))}
      </div>
    </section>
  )
}