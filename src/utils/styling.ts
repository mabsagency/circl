// Utilitaires pour les animations
export const animationClasses = {
  fadeSlideUp: 'fadeSlideUp',
  fadeSlideDown: 'fadeSlideDown',
  pulse: 'pulse',
}

// Utilitaires pour les couleurs
export const colors = {
  bg: 'var(--bg)',
  bg2: 'var(--bg2)',
  navy: 'var(--navy)',
  purple: 'var(--purple)',
  purpleLight: 'var(--purple-light)',
  blue: 'var(--blue)',
  cyan: 'var(--cyan)',
  green: 'var(--green)',
  text: 'var(--text)',
  sub: 'var(--sub)',
  muted: 'var(--muted)',
}

// Utilitaires pour les breakpoints
export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
}

// Helper pour classNames
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// Format de nombre avec séparateurs
export function formatNumber(num: number): string {
  return num.toLocaleString('fr-FR')
}
