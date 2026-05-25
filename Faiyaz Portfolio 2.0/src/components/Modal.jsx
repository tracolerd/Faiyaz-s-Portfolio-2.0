import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(20, 0, 8, 0.45)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(40px) saturate(200%)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%)',
              border: '1px solid rgba(139,0,50,0.18)',
              boxShadow: '0 40px 80px rgba(139,0,50,0.2), 0 8px 32px rgba(0,0,0,0.1)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between px-7 py-5 rounded-t-3xl" style={{ background: 'rgba(255,255,255,0.95)', borderBottom: '1px solid rgba(139,0,50,0.08)', backdropFilter: 'blur(20px)' }}>
              <h3 className="font-display font-semibold text-xl" style={{ color: 'var(--maroon)' }}>
                {title}
              </h3>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(139,0,50,0.08)', color: 'var(--maroon)' }}
              >
                <X size={16} />
              </button>
            </div>
            <div className="px-7 py-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
