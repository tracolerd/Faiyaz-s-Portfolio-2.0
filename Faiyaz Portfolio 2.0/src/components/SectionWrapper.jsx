import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase mb-4"
          style={{
            background: 'rgba(139,0,50,0.08)',
            color: 'var(--maroon)',
            border: '1px solid rgba(139,0,50,0.15)',
          }}
        >
          {label}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1a0a10' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="h-px w-16 rounded" style={{ background: 'rgba(139,0,50,0.2)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--maroon)' }} />
        <div className="h-px w-16 rounded" style={{ background: 'rgba(139,0,50,0.2)' }} />
      </div>
    </motion.div>
  )
}
