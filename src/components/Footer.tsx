'use client'

import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img 
          src="/assets/logo1.png" 
          alt="Circl"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        Circl
      </div>
      <div className={styles.footerCopy}>© 2026 Circl. Tous droits réservés.</div>
      <div className={styles.footerLinks}>
        <a 
          href="https://www.tiktok.com/@circlapp0?_r=1&_t=ZN-94KKXVJ1Z02" 
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a 
          href="https://www.instagram.com/circl_app0?igsh=MWNhMTQzYzh6MDYzbQ%3D%3D&utm_source=qr" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="#">Confidentialité</a>
      </div>
    </footer>
  )
}
