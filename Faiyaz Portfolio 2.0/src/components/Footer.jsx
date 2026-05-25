import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 px-4" style={{ background: 'rgba(20,3,10,0.97)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            className="font-display text-4xl font-bold mb-3"
            style={{ color: 'rgba(255,255,255,0.95)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's{' '}
            <span style={{ color: '#C0004A' }}>Connect</span>
          </motion.h2>
          <p className="text-gray-400 text-sm">
            Available for freelance work, collaborations, and opportunities.
          </p>
          <a
            href="mailto:scrollfaiyaz@gmail.com"
            className="inline-block mt-5 px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #8B0032, #C0004A)',
              color: 'white',
              boxShadow: '0 8px 24px rgba(139,0,50,0.4)',
            }}
          >
            scrollfaiyaz@gmail.com
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {[
            { icon: Facebook, href: 'https://www.facebook.com/share/1CqmbUekNe/?mibextid=wwXIfr', label: 'Facebook' },
            { icon: Instagram, href: 'https://www.instagram.com/tracolerd?igsh=dmM1M2RoeGswcHp2&utm_source=qr', label: 'Instagram' },
            { icon: Twitter, href: 'https://x.com/faiyaz_explores?s=21', label: 'X' },
            { icon: Linkedin, href: 'http://linkedin.com/in/nurul-faiyaz-6644a6283', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:scrollfaiyaz@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
              }}
              whileHover={{ scale: 1.12, y: -3 }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(139,0,50,0.3)'
                e.currentTarget.style.borderColor = 'rgba(139,0,50,0.5)'
                e.currentTarget.style.color = '#ff6699'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <span>© 2025 Nurul Faiyaz. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={11} fill="currentColor" style={{ color: '#8B0032' }} /> and precision
          </span>
          <span>Cybersecurity · SQA · Cloud Security</span>
        </div>
      </div>
    </footer>
  )
}
