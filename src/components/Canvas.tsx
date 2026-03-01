'use client'

import { useEffect } from 'react'

interface ParticleType {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  life: number
  dlife: number
  col: string
  reset: () => void
  update: () => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export default function Canvas() {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    const particles: ParticleType[] = []

    class Particle implements ParticleType {
      x: number = 0
      y: number = 0
      vx: number = 0
      vy: number = 0
      r: number = 0
      life: number = 0
      dlife: number = 0
      col: string = ''

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.r = Math.random() * 1.5 + 0.3
        this.life = Math.random()
        this.dlife = Math.random() * 0.005 + 0.001
        const hues = ['147,51,234', '56,189,248', '61,214,140', '245,166,35']
        this.col = hues[Math.floor(Math.random() * hues.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life += this.dlife
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H || this.life > 1) {
          this.reset()
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const a = Math.sin(this.life * Math.PI) * 0.6
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.col},${a})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 120; i++) {
      particles.push(new Particle())
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            const a = (1 - d / 100) * 0.08
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(147,51,234,${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      drawConnections()
      particles.forEach((p) => {
        p.update()
        p.draw(ctx)
      })
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas id="canvas" style={{ display: 'block' }} />
}
