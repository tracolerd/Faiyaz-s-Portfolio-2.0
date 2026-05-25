import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function GlassCard({
  children,
  className = '',
  style = {},
  hover = true,
  tilt = false,
  delay = 0,
  animate = true,
}) {
  const [tiltStyle, setTiltStyle] = useState({})
  const cardRef = useRef()

  const handleMouseMove = (e) => {
    if (!tilt) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTiltStyle({
      transform: `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(10px)`,
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({ transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)' })
  }

  const baseStyle = {
    background: 'rgba(255,255,255,0.72)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(139,0,50,0.1)',
    boxShadow: '0 8px 32px rgba(139,0,50,0.06), 0 2px 8px rgba(0,0,0,0.03)',
    transition: hover
      ? 'box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease'
      : undefined,
    ...style,
    ...(tilt ? tiltStyle : {}),
  }

  const Wrapper = animate ? motion.div : 'div'
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        whileHover: hover && !tilt ? { y: -4, boxShadow: '0 24px 64px rgba(139,0,50,0.12), 0 4px 16px rgba(0,0,0,0.06)' } : undefined,
      }
    : {}

  return (
    <Wrapper
      ref={cardRef}
      className={`rounded-2xl overflow-hidden ${className}`}
      style={baseStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
    >
      {children}
    </Wrapper>
  )
}
