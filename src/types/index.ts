// Types pour les composants Circl

export interface FeatureCardProps {
  icon: string
  title: string
  description: string
  tag?: {
    text: string
    style: 'ftNew' | 'ftAi' | 'ftLive'
  }
  delay: number
  glowColor: string
}

export interface StatItemProps {
  target: number
  label: string
  suffix?: string
}

export interface TestimonialCardProps {
  author: string
  handle: string
  text: string
  image: string
  rating: number
}

export interface SocialLink {
  name: 'TikTok' | 'Instagram'
  url: string
  icon: 'tiktok' | 'instagram'
}

export interface NavItem {
  label: string
  href: string
}
