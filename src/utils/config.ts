// Configuration et constantes

export const SITE_CONFIG = {
  name: 'Circl',
  title: 'Circl — The Accountability Circle',
  description:
    'Circl connecte des groupes d\'accountability avec un coach IA personnalisé. Check-in quotidien, streaks partagés, progrès réels.',
  url: 'https://circl.app',
  ogImage: '/assets/logo1.png',
  author: 'Circl Team',
  year: 2026,
}

export const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'App', href: '#showcase' },
  { label: 'Communauté', href: '#community' },
]

export const SOCIAL_LINKS = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@circlapp0?_r=1&_t=ZN-94KKXVJ1Z02',
    icon: 'tiktok',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/circl_app0?igsh=MWNhMTQzYzh6MDYzbQ%3D%3D&utm_source=qr',
    icon: 'instagram',
  },
]

export const STATS = [
  { target: 2840, label: 'Membres actifs' },
  { target: 14, label: 'Streak record (jours)' },
  { target: 96, label: 'Taux de rétention', suffix: '%' },
  { target: 5, label: 'Membres par groupe' },
]

export const FEATURES = [
  {
    icon: '✦',
    title: 'Circl Coach IA',
    description:
      'Un coach IA qui te connaît vraiment. Questions personnalisées, contexte mémorisé, feedback humain basé sur tes vraies données.',
    tag: { text: 'IA Powered', style: 'ftAi' as const },
    delay: 0.05,
    glowColor: 'rgba(147,51,234,.7)',
  },
  {
    icon: '💬',
    title: 'Chat en temps réel',
    description:
      'Ton groupe, une conversation live. Partage tes victoires, célébrez ensemble, restez connectés quand ça compte le plus.',
    tag: { text: 'Live', style: 'ftLive' as const },
    delay: 0.1,
    glowColor: 'rgba(56,189,248,.7)',
  },
  {
    icon: '🔥',
    title: 'Streaks collectifs',
    description:
      'Le streak n\'est plus solitaire. Quand ton groupe tient, tout le monde gagne. La pression positive qui crée de vraies habitudes.',
    tag: { text: 'Nouveau', style: 'ftNew' as const },
    delay: 0.15,
    glowColor: 'rgba(61,214,140,.7)',
  },
  {
    icon: '📊',
    title: 'Check-in quotidien',
    description:
      '3 étapes, 2 minutes. Humeur, énergie, note. Ton historique devient une carte de ta progression. Visible, réel, motivant.',
    delay: 0.2,
    glowColor: 'rgba(245,166,35,.7)',
  },
  {
    icon: '🏆',
    title: 'Circl Score',
    description:
      'Un score qui reflète ton engagement réel. XP, streaks, régularité — tout compte. Grimpe dans le classement de ton groupe.',
    delay: 0.25,
    glowColor: 'rgba(244,114,182,.7)',
  },
  {
    icon: '👥',
    title: 'Groupes thématiques',
    description:
      'Fitness, productivité, mindfulness, apprentissage — trouve ton crew ou crée le tien en 30 secondes.',
    delay: 0.3,
    glowColor: 'rgba(129,140,248,.7)',
  },
]

export const TESTIMONIALS = [
  {
    author: 'Théo M.',
    handle: 'Fitness · streak 🔥 34 jours',
    text: 'Circl a changé ma façon de m\'entraîner. Savoir que mes coéquipiers voient mon check-in me pousse à ne jamais manquer un jour.',
    image: '/assets/lo.avif',
    rating: 5,
  },
  {
    author: 'Camille D.',
    handle: 'Productivité · streak 🔥 21 jours',
    text: 'Le coach IA est bluffant. Il se souvient de mes humeurs de la semaine et adapte ses questions. Jamais vu ça dans une app.',
    image: '/assets/f1.jpg',
    rating: 5,
  },
  {
    author: 'Marc L.',
    handle: 'Deep Work · streak 🔥 14 jours',
    text: 'Mon groupe Focus Achievers est ma meilleure décision de l\'année. On se tire vers le haut, chaque jour. Circl rend ça possible.',
    image: '/assets/h1.jpg',
    rating: 5,
  },
]
