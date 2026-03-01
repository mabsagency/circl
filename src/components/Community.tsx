'use client'

import styles from '@/styles/Community.module.css'

export default function Community() {
  return (
    <section id="community" className={styles.community}>
      <div className={styles.communityInner}>
        <div className={styles.sectionTag}>Communauté</div>
        <h2 className={styles.sectionTitle}>
          Des vraies personnes,
          <br />
          de vrais{' '}
          <span style={{
            background: 'linear-gradient(90deg,var(--purple-light),var(--cyan))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            résultats
          </span>
        </h2>

        <div className={styles.avatarsGrid}>
          <div className={styles.avBig} style={{ background: 'linear-gradient(135deg,#9333EA,#38BDF8)' }}>
            👤
          </div>
          <div className={styles.avBig} style={{ background: 'linear-gradient(135deg,#38BDF8,#3DD68C)' }}>
            👤
          </div>
          <div className={styles.avBig} style={{ background: 'linear-gradient(135deg,#3DD68C,#F5A623)' }}>
            👤
          </div>
          <div className={styles.avBig} style={{ background: 'linear-gradient(135deg,#F5A623,#8B89B0)' }}>
            👤
          </div>
          <div className={styles.avBig} style={{ background: 'linear-gradient(135deg,#9333EA,#3DD68C)' }}>
            👤
          </div>
          <div className={styles.avBig} style={{ background: 'linear-gradient(135deg,#38BDF8,#F5A623)' }}>
            👤
          </div>
          <div className={styles.avCount}>+2.8k</div>
        </div>
        <p style={{ color: 'var(--sub)', fontSize: '14px', marginTop: '4px' }}>
          Membres actifs dans la bêta
        </p>

        <div className={styles.testimonials}>
          <div className={styles.testiCard}>
            <div className={styles.testiStars}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className={styles.testiText}>
              "Circl a changé ma façon de m'entraîner. Savoir que mes coéquipiers voient mon check-in me pousse à ne jamais manquer un jour."
            </p>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAv} style={{ background: 'linear-gradient(135deg,#9333EA,#38BDF8)' }}>T</div>
              <div>
                <div className={styles.testiName}>Théo M.</div>
                <div className={styles.testiHandle}>Fitness · streak 🔥 34 jours</div>
              </div>
            </div>
          </div>
          <div className={styles.testiCard}>
            <div className={styles.testiStars}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className={styles.testiText}>
              "Le coach IA est bluffant. Il se souvient de mes humeurs de la semaine et adapte ses questions. Jamais vu ça dans une app."
            </p>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAv} style={{ background: 'linear-gradient(135deg,#38BDF8,#3DD68C)' }}>C</div>
              <div>
                <div className={styles.testiName}>Camille D.</div>
                <div className={styles.testiHandle}>Productivité · streak 🔥 21 jours</div>
              </div>
            </div>
          </div>
          <div className={styles.testiCard}>
            <div className={styles.testiStars}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className={styles.testiText}>
              "Mon groupe Focus Achievers est ma meilleure décision de l'année. On se tire vers le haut, chaque jour. Circl rend ça possible."
            </p>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAv} style={{ background: 'linear-gradient(135deg,#3DD68C,#F5A623)' }}>M</div>
              <div>
                <div className={styles.testiName}>Marc L.</div>
                <div className={styles.testiHandle}>Deep Work · streak 🔥 14 jours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
