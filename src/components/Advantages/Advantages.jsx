import { CreditCard, HeadphonesIcon, Users, Receipt } from 'lucide-react'
import styles from './Advantages.module.css'

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
  ]

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Vantagens</h2>
      <p className={styles.description}>
      Com nosso compromisso em excelência e inovação, garantimos benefícios exclusivos para nossos clientes. Nossa abordagem personalizada, profissionais experientes e soluções estratégicas proporcionam os melhores resultados para impulsionar o sucesso do seu negócio.
      </p>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
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

