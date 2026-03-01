'use client'

import styles from '@/styles/Features.module.css'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  tag?: { text: string; style: string }
  glowColor: string
  index: number
}

function FeatureCard({ icon, title, description, tag, glowColor, index }: FeatureCardProps) {
  const iconClass = `fi${(index % 6) + 1}`
  return (
    <div className={styles.featCard}>
      <div className={styles.featCardGlow} style={{ background: glowColor }}></div>
      <div className={`${styles.featIcon} ${styles[iconClass]}`}>
        {icon}
      </div>
      <h3 className={styles.featTitle}>{title}</h3>
      <p className={styles.featDesc}>{description}</p>
      {tag && <span className={`${styles.featTag} ${styles[tag.style]}`}>{tag.text}</span>}
    </div>
  )
}

export default function Features() {
  const features = [
    {
      icon: '✦',
      title: 'Circl Coach IA',
      description: 'Un coach IA qui te connaît vraiment. Questions personnalisées, contexte mémorisé, feedback humain basé sur tes vraies données.',
      tag: { text: 'IA Powered', style: 'ftAi' },
      glowColor: 'rgba(147,51,234,.7)',
    },
    {
      icon: '💬',
      title: 'Chat en temps réel',
      description: 'Ton groupe, une conversation live. Partage tes victoires, célébrez ensemble, restez connectés quand ça compte le plus.',
      tag: { text: 'Live', style: 'ftLive' },
      glowColor: 'rgba(56,189,248,.7)',
    },
    {
      icon: '🔥',
      title: 'Streaks collectifs',
      description: 'Le streak n\'est plus solitaire. Quand ton groupe tient, tout le monde gagne. La pression positive qui crée de vraies habitudes.',
      tag: { text: 'Nouveau', style: 'ftNew' },
      glowColor: 'rgba(61,214,140,.7)',
    },
    {
      icon: '📊',
      title: 'Check-in quotidien',
      description: '3 étapes, 2 minutes. Humeur, énergie, note. Ton historique devient une carte de ta progression. Visible, réel, motivant.',
      glowColor: 'rgba(245,166,35,.7)',
    },
    {
      icon: '🏆',
      title: 'Circl Score',
      description: 'Un score qui reflète ton engagement réel. XP, streaks, régularité — tout compte. Grimpe dans le classement de ton groupe.',
      glowColor: 'rgba(244,114,182,.7)',
    },
    {
      icon: '👥',
      title: 'Groupes thématiques',
      description: 'Fitness, productivité, mindfulness, apprentissage — trouve ton crew ou crée le tien en 30 secondes.',
      glowColor: 'rgba(129,140,248,.7)',
    },
  ]

  return (
    <section id="features" className={styles.features}>
      <div className={styles.sectionTag}>FONCTIONNALITÉS</div>
      <h2 className={styles.sectionTitle}>
        Tout ce qu'il faut
        <br />
        <span style={{
          background: 'linear-gradient(90deg,var(--purple-light),var(--cyan))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          rester dans la course
        </span>
      </h2>
      <p className={styles.sectionSub}>
        Un écosystème complet pensé pour créer de vraies habitudes, pas juste des intentions.
      </p>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={`feature-${index}`} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}
