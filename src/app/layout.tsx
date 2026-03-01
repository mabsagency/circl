import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Circl — The Accountability Circle',
  description: 'Circl connecte des groupes d\'accountability avec un coach IA personnalisé. Check-in quotidien, streaks partagés, progrès réels.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/assets/logo1.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
