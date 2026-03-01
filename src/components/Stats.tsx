'use client'

import styles from '@/styles/Stats.module.css'
import { useEffect, useRef } from 'react'

interface StatItemProps {
  target: number
  label: string
  suffix?: string
}

function StatItem({ target, label, suffix = '' }: StatItemProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    let current = 0
    const duration = 1800
    const step = target / (duration / 16)
    
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      if (elementRef.current) {
        elementRef.current.textContent = Math.floor(current).toLocaleString('fr') + suffix
      }
      if (current >= target) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [target, suffix])

  return (
    <div className={styles.statItem}>
      <div className={styles.statNum} ref={elementRef}>
        0{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div id="stats" className={styles.stats}>
      <div className={styles.statsInner}>
        <StatItem target={2840} label="Membres actifs" />
        <StatItem target={14} label="Streak record (jours)" />
        <StatItem target={96} label="Taux de rétention" suffix="%" />
        <StatItem target={5} label="Membres par groupe" />
      </div>
    </div>
  )
}
