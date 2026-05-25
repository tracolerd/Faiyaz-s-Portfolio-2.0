import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, Cloud, Bug, User } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'hero', label: 'About', icon: User },
  { id: 'sqa', label: 'SQA Engineer', icon: Bug },
  { id: 'cloud', label: 'Cloud Security', icon: Cloud },
  { id: 'cyber', label: 'Cybersecurity', icon: Shield },
]

export default function Navigation({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="glass rounded-2xl px-6 py-3 flex items-center justify-between"
            style={{
              background: scrolled
                ? 'rgba(255,255,255,0.88)'
                : 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(24px) saturate(200%)',
              WebkitBackdropFilter: 'blur(24px) saturate(200%)',
              borderColor: 'rgba(139,0,50,0.12)',
              boxShadow: scrolled
                ? '0 8px 32px rgba(139,0,50,0.12), 0 2px 8px rgba(0,0,0,0.06)'
                : '0 4px 16px rgba(139,0,50,0.06)',
            }}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="font-display font-bold text-lg tracking-tight"
              style={{ color: 'var(--maroon)' }}
            >
              NF
              <span className="font-body font-light text-sm ml-2" style={{ color: '#4a1420', opacity: 0.7 }}>
                Nurul Faiyaz
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === id
                      ? 'text-white shadow-maroon'
                      : 'text-gray-600 hover:text-[var(--maroon)] hover:bg-[rgba(139,0,50,0.06)]'
                  }`}
                  style={
                    activeSection === id
                      ? { background: 'var(--maroon)' }
                      : {}
                  }
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-xl transition-colors"
              style={{ color: 'var(--maroon)' }}
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-0 right-0 z-40 px-6"
          >
            <div
              className="glass rounded-2xl p-4 flex flex-col gap-2"
              style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                border: '1px solid rgba(139,0,50,0.15)',
              }}
            >
              {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                    activeSection === id
                      ? 'text-white'
                      : 'text-gray-700 hover:bg-[rgba(139,0,50,0.06)]'
                  }`}
                  style={activeSection === id ? { background: 'var(--maroon)' } : {}}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
