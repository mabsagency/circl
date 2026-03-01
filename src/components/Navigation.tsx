'use client'

import { useEffect, useRef } from 'react'
import styles from '@/styles/Navigation.module.css'

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="nav" ref={navRef} className={styles.nav}>
      <div className={styles.navLogo}>
        <img 
          src="/assets/logo1.png" 
          alt="Circl"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        Circl
      </div>
      <div className={styles.navLinks}>
        <a href="#features">Features</a>
        <a href="#showcase">App</a>
        <a href="#community">Communauté</a>
      </div>
      <button
        className={styles.navCta}
        onClick={() => {
          const ctaElement = document.getElementById('cta')
          ctaElement?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Rejoindre →
      </button>
    </nav>
  )
}



























}  )    </nav>      </button>        Rejoindre →      >        }}          document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })        onClick={() => {        className={styles.navCta}      <button      </div>        <a href="#community">Communauté</a>        <a href="#showcase">App</a>        <a href="#features">Features</a>      <div className={styles.navLinks}>      </div>        Circl        <img src="/assets/logo1.png" alt="Circl" />      <div className={styles.navLogo}>    <nav id="nav" className={styles.nav}>  return (export default function Navigation() {import styles from '@/styles/Navigation.module.css'
import { useEffect, useRef } from 'react'
import styles from '@/styles/Navigation.module.css'

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="nav" ref={navRef} className={styles.nav}>
      <div className={styles.navLogo}>
        <img src="/assets/logo1.png" alt="Circl" />
        Circl
      </div>
      <div className={styles.navLinks}>
        <a href="#features">Features</a>
        <a href="#showcase">App</a>
        <a href="#community">Communauté</a>
      </div>
      <button
        className={styles.navCta}
        onClick={() => {
          const ctaElement = document.getElementById('cta')
          ctaElement?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Rejoindre →
      </button>
    </nav>
  )
}
