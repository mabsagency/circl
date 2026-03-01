import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Showcase from '@/components/Showcase'
import Community from '@/components/Community'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Canvas from '@/components/Canvas'

export default function Home() {
  return (
    <main>
      <Canvas />
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <Community />
      <CTA />
      <Footer />
      <script src="/scripts/interactions.js" async />
    </main>
  )
}
