import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

const SOCIAL = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CqmbUekNe/?mibextid=wwXIfr',
    color: '#1877F2',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/tracolerd?igsh=dmM1M2RoeGswcHp2&utm_source=qr',
    color: '#E1306C',
  },
  {
    icon: Twitter,
    label: 'X / Twitter',
    href: 'https://x.com/faiyaz_explores?s=21',
    color: '#000000',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'http://linkedin.com/in/nurul-faiyaz-6644a6283',
    color: '#0A66C2',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:scrollfaiyaz@gmail.com',
    color: '#EA4335',
  },
]

export default function SocialDock() {
  return (
    <motion.div
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5"
    >
      <div
        className="flex flex-col gap-2 p-2.5 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.82)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(139,0,50,0.12)',
          boxShadow: '0 8px 32px rgba(139,0,50,0.1), 0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        {SOCIAL.map(({ icon: Icon, label, href, color }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.2, x: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200 group"
            style={{
              background: 'rgba(139,0,50,0.04)',
              border: '1px solid rgba(139,0,50,0.1)',
              color: 'var(--maroon)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = color + '15'
              e.currentTarget.style.borderColor = color + '40'
              e.currentTarget.querySelector('svg').style.color = color
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(139,0,50,0.04)'
              e.currentTarget.style.borderColor = 'rgba(139,0,50,0.1)'
              e.currentTarget.querySelector('svg').style.color = 'var(--maroon)'
            }}
          >
            <Icon size={16} style={{ transition: 'color 0.2s' }} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
