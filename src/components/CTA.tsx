'use client'

import styles from '@/styles/CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaGlow}></div>
        <h2 className={styles.ctaTitle}>
          Prêt à rejoindre
          <br />
          <span style={{
            background: 'linear-gradient(135deg,var(--purple-light),var(--cyan))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            ton cercle ?
          </span>
        </h2>
        <p className={styles.ctaSub}>
          Télécharge Circl, crée ton groupe ou rejoins-en un, et commence ton premier check-in aujourd'hui.
        </p>
        <div className={styles.ctaActions}>
          <a href="#" className={styles.storeBtn} title="Bientôt disponible">
            <div className={styles.storeIcon}>
              🍎
            </div>
            <div className={styles.storeLabel}>
              <span className={styles.sub}>Télécharger sur</span>
              <span className={styles.name}>App Store</span>
            </div>
          </a>
          <a href="#" className={styles.storeBtn} title="Bientôt disponible">
            <div className={styles.storeIcon}>
              ▶️
            </div>
            <div className={styles.storeLabel}>
              <span className={styles.sub}>Disponible sur</span>
              <span className={styles.name}>Google Play</span>
            </div>
          </a>
        </div>
        <div className={styles.ctaSocial}>
          <a 
            href="https://www.tiktok.com/@circlapp0?_r=1&_t=ZN-94KKXVJ1Z02" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaSocialLink}
          >
            <div className={styles.ctaSocialIcon}>
              <svg viewBox="0 0 24 24" fill="white" height="18">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l.01-8.42a8.16 8.16 0 0 0 4.77 1.52V4.95a4.85 4.85 0 0 1-1.02-.26z" />
              </svg>
            </div>
            @circlapp0
          </a>
          <div style={{ width: '1px', height: '24px', background: 'var(--muted)' }}></div>
          <a 
            href="https://www.instagram.com/circl_app0?igsh=MWNhMTQzYzh6MDYzbQ%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaSocialLink}
          >
            <div className={styles.ctaSocialIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" height="18" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            @circl_app0
          </a>
        </div>
      </div>
    </section>
  )
}
