// src/components/Example.tsx — Template pour nouvelles sections
// Copie ce fichier et adapte pour créer rapidement une nouvelle section

'use client'

import styles from '@/styles/Example.module.css'
import { useIntersection } from '@/hooks/useInteraction'

/**
 * Example Component
 * 
 * Template pour créer rapidement une nouvelle section.
 * 
 * Structure :
 * 1. Import des styles (CSS Module)
 * 2. Import des hooks (scroll, intersection, mouse, etc)
 * 3. Component function
 * 4. JSX avec classNames du CSS Module
 */

interface ExampleCardProps {
  title: string
  description: string
  icon: string
}

function ExampleCard({ title, description, icon }: ExampleCardProps) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>()

  return (
    <div 
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default function Example() {
  const { ref: sectionRef, isVisible } = useIntersection<HTMLElement>()

  const cards = [
    {
      icon: '✨',
      title: 'Card 1',
      description: 'Description for card 1',
    },
    {
      icon: '🎯',
      title: 'Card 2',
      description: 'Description for card 2',
    },
    {
      icon: '🚀',
      title: 'Card 3',
      description: 'Description for card 3',
    },
  ]

  return (
    <section 
      id="example" 
      ref={sectionRef}
      className={styles.example}
    >
      {/* Section Tag */}
      <div className={styles.sectionTag}>SECTION</div>

      {/* Titre */}
      <h2 className={styles.sectionTitle}>
        Titre de la section
        <br />
        <span className={styles.grad}>avec gradient</span>
      </h2>

      {/* Sous-titre */}
      <p className={styles.sectionSub}>
        Description courte de votre section
      </p>

      {/* Content Grid */}
      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <ExampleCard key={idx} {...card} />
        ))}
      </div>

      {/* Dynamic Content Based on Intersection */}
      {isVisible && (
        <div className={styles.animation}>
          Ce contenu s'affiche une fois en vue
        </div>
      )}
    </section>
  )
}

/**
 * Usage dans src/app/page.tsx :
 * 
 * import Example from '@/components/Example'
 * 
 * export default function Home() {
 *   return (
 *     <main>
 *       <Navigation />
 *       <Hero />
 *       <Stats />
 *       <Features />
 *       <Example />  // ← Nouveau !
 *       <Showcase />
 *       <Community />
 *       <CTA />
 *       <Footer />
 *     </main>
 *   )
 * }
 */
