'use client'

import styles from '@/styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>

      <div className={styles.heroBadge}>
        <div className={styles.badgeDot}></div>
        Bêta ouverte — Rejoins maintenant
      </div>

      <div className={styles.logo3dWrap}>
        <div className={styles.logoGlow}></div>
        <div className={styles.logoOrbit}>
          <div className={styles.orbitDot}></div>
        </div>
        <div className={styles.logoOrbit2}>
          <div className={styles.orbitDot2}></div>
        </div>
        <img className={styles.logoImg} src="/assets/logo1.png" alt="Circl logo" />
      </div>

      <h1 className={styles.heroTitle}>
        <span>Le cercle</span>
        <span className={styles.grad}>qui te fait</span>
        <span>avancer</span>
      </h1>

      <p className={styles.heroSub}>
        Circl connecte des groupes d'<strong>accountability</strong> avec un coach IA personnalisé. 
        Check-in quotidien, streaks partagés, progrès réels.
      </p>

      <div className={styles.heroActions}>
        <button 
          className={styles.btnPrimary}
          onClick={() => {
            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Rejoindre la bêta ✦
        </button>
        <button 
          className={styles.btnSecondary}
          onClick={() => {
            document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Voir l'app →
        </button>
      </div>

      <div className={styles.heroSocial}>
        <div className={styles.socialIcons}>
          <a 
            href="https://www.tiktok.com/@circlapp0?_r=1&_t=ZN-94KKXVJ1Z02" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.tiktok}`}
            title="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l.01-8.42a8.16 8.16 0 0 0 4.77 1.52V4.95a4.85 4.85 0 0 1-1.02-.26z" />
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/circl_app0?igsh=MWNhMTQzYzh6MDYzbQ%3D%3D&utm_source=qr" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.instagram}`}
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>SCROLL</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}
