import React, { useEffect, useRef } from 'react'
import './ParticleBackground.css'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = Math.random() > 0.5
          ? `rgba(139, 92, 246, ${this.opacity})`
          : `rgba(6, 182, 212, ${this.opacity})`
        this.life = 0
        this.maxLife = Math.random() * 200 + 100
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life++
        if (this.life > this.maxLife) this.reset()
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Scale particles based on screen size (35 on mobile, 60 on desktop)
    const particleCount = window.innerWidth < 768 ? 35 : 60
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect nearby particles (reduced threshold for performance)
    const maxDist = window.innerWidth < 768 ? 90 : 110
    const connectParticles = () => {
      const len = particles.length
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    let isVisible = true
    const animate = () => {
      if (!isVisible) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      connectParticles()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false
        cancelAnimationFrame(animationId)
      } else {
        isVisible = true
        animationId = requestAnimationFrame(animate)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}

export default ParticleBackground
