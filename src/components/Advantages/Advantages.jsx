import React, { useEffect } from 'react'
import { CreditCard, HeadphonesIcon, Users, Receipt } from 'lucide-react'
import styles from './Advantages.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Advantages() {
  const features = [
    {
      icon: <CreditCard className={styles.icon} />,
      title: 'Segurança nos',
      description: 'Pagamentos'
    },
    {
      icon: <HeadphonesIcon className={styles.icon} />,
      title: 'Suporte ao',
      description: 'Cliente'
    },
    {
      icon: <Users className={styles.icon} />,
      title: 'Acesso aos',
      description: 'Melhores Freelas'
    },
    {
      icon: <Receipt className={styles.icon} />,
      title: 'Menores',
      description: 'Taxas'
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
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
          </div>
        ))}
      </div>
    </section>
  )
}
