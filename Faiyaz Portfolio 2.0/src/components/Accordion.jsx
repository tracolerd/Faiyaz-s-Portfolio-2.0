import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Accordion({ title, children, icon: Icon, defaultOpen = false, accent = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open
          ? accent ? 'rgba(139,0,50,0.04)' : 'rgba(255,255,255,0.85)'
          : 'rgba(255,255,255,0.6)',
        border: `1px solid ${open ? 'rgba(139,0,50,0.18)' : 'rgba(139,0,50,0.08)'}`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: open ? '0 8px 32px rgba(139,0,50,0.08)' : 'none',
      }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <span
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: open ? 'var(--maroon)' : 'rgba(139,0,50,0.08)',
                color: open ? 'white' : 'var(--maroon)',
                transition: 'all 0.3s',
              }}
            >
              <Icon size={15} />
            </span>
          )}
          <span
            className="font-medium text-sm"
            style={{ color: open ? 'var(--maroon)' : '#2a0a14' }}
          >
            {title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: 'var(--maroon)' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5">
              <div className="pt-2 border-t" style={{ borderColor: 'rgba(139,0,50,0.08)' }}>
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function AccordionGroup({ children }) {
  return <div className="flex flex-col gap-3">{children}</div>
}
