import { motion } from 'framer-motion'
import {
  Shield, Terminal, Code, Globe, Eye, Zap, Lock, Database,
  Network, AlertTriangle, Brain, Users, Mic, PenTool, Presentation,
  BarChart2, Activity, Server, Cpu, FileCode, BookOpen, ShieldCheck,
  Monitor, Radio, Search, MessageSquare, FileText, Image, Settings,
  CheckCircle, Star, Target
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'
import { Accordion, AccordionGroup } from '../components/Accordion'

const MEGA_SKILLS = [
  { name: 'Cloud Security', icon: Shield, cat: 'security' },
  { name: 'Incident Response & Digital Forensics', icon: AlertTriangle, cat: 'security' },
  { name: 'VAPT', icon: Target, cat: 'security' },
  { name: 'Programming & Scripting', icon: Code, cat: 'tech' },
  { name: 'Network Security', icon: Network, cat: 'security' },
  { name: 'Data Protection & Encryption', icon: Lock, cat: 'security' },
  { name: 'Risk Management', icon: BarChart2, cat: 'strategy' },
  { name: 'Creative Writing', icon: PenTool, cat: 'soft' },
  { name: 'Poem Writing', icon: BookOpen, cat: 'soft' },
  { name: 'Public Speaking', icon: Mic, cat: 'soft' },
  { name: 'Cyber Defense', icon: ShieldCheck, cat: 'security' },
  { name: 'Presentations', icon: Presentation, cat: 'soft' },
  { name: 'Software Development', icon: FileCode, cat: 'tech' },
  { name: 'Artificial Intelligence (AI)', icon: Brain, cat: 'tech' },
  { name: 'Leadership', icon: Users, cat: 'soft' },
  { name: 'SIEM', icon: Activity, cat: 'security' },
  { name: 'Operating Systems & Sysadmin', icon: Monitor, cat: 'tech' },
]

const SERVICES = [
  { name: 'AI & Automation', icon: Brain },
  { name: 'Prompt Engineering', icon: MessageSquare },
  { name: 'Kali Linux Tools', icon: Terminal },
  { name: 'Cybersecurity & PenTesting', icon: Shield },
  { name: 'Defensive Security', icon: ShieldCheck },
  { name: 'Programming', icon: Code },
  { name: 'Security Tools & Frameworks', icon: Settings },
  { name: 'Social Media Management', icon: Radio },
  { name: 'Data Entry', icon: FileText },
  { name: 'Content Writing', icon: PenTool },
  { name: 'Article Analysis', icon: Search },
  { name: 'Collecting Information', icon: Globe },
  { name: 'Presentation Making', icon: Presentation },
  { name: 'Research Papers', icon: BookOpen },
  { name: 'Soft Skills Coaching', icon: Users },
]

const CAT_COLORS = {
  security: { bg: 'rgba(139,0,50,0.07)', border: 'rgba(139,0,50,0.18)', text: 'var(--maroon)' },
  tech: { bg: 'rgba(22,93,255,0.06)', border: 'rgba(22,93,255,0.18)', text: '#165DFF' },
  soft: { bg: 'rgba(0,150,100,0.06)', border: 'rgba(0,150,100,0.18)', text: '#009664' },
  strategy: { bg: 'rgba(245,158,11,0.07)', border: 'rgba(245,158,11,0.2)', text: '#B45309' },
}

const TOOLS_LIST = [
  'Kali Linux', 'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'Splunk',
  'Python', 'Bash', 'Java', 'JavaScript',
]

export default function CyberSection() {
  return (
    <SectionWrapper id="cyber">
      <div
        className="w-full h-px mb-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,0,50,0.15), transparent)' }}
      />

      <SectionHeader
        label="Role 03"
        title="Cybersecurity Expert"
        subtitle="Penetration testing, defensive security, and AI-powered security automation for the modern threat landscape."
      />

      {/* Bio card */}
      <GlassCard delay={0} className="mb-8">
        <div className="p-7">
          <div className="flex items-start gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--maroon)', boxShadow: '0 8px 24px rgba(139,0,50,0.3)' }}
            >
              <Shield size={26} color="white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl mb-3" style={{ color: '#1a0a10' }}>
                Hey there, I'm{' '}
                <span className="text-gradient">Nurul Faiyaz</span>
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm max-w-3xl">
                A passionate Cybersecurity enthusiast specializing in penetration testing, defensive security, and AI for security automation. Skilled in <strong style={{ color: 'var(--maroon)' }}>Python, Bash, Java,</strong> and <strong style={{ color: 'var(--maroon)' }}>JavaScript</strong>, I work with tools like Kali Linux, Burp Suite, Metasploit, Wireshark, Nmap, and Splunk. Currently studying CSE at East West University, with a strong focus on cybersecurity and software development. Passionate about ethical hacking, CTFs, and building real-world projects combining security and automation.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {TOOLS_LIST.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(139,0,50,0.07)', color: 'var(--maroon)', border: '1px solid rgba(139,0,50,0.15)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Mega Skills */}
      <GlassCard delay={0.1} className="mb-8">
        <div className="p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Zap size={17} style={{ color: 'var(--maroon)' }} />
              <h3 className="font-display font-semibold text-lg" style={{ color: '#1a0a10' }}>Mega Skills</h3>
            </div>
            <div className="flex gap-2 text-xs">
              {Object.entries(CAT_COLORS).map(([cat, { bg, text }]) => (
                <span key={cat} className="px-2 py-1 rounded-full capitalize" style={{ background: bg, color: text, border: `1px solid ${bg}` }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {MEGA_SKILLS.map(({ name, icon: Icon, cat }, i) => {
              const colors = CAT_COLORS[cat]
              return (
                <motion.span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default"
                  style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ scale: 1.07, y: -2 }}
                >
                  <Icon size={12} />
                  {name}
                </motion.span>
              )
            })}
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Services */}
        <GlassCard delay={0.15}>
          <div className="p-6">
            <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2" style={{ color: '#1a0a10' }}>
              <Settings size={17} style={{ color: 'var(--maroon)' }} /> Services Offered
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {SERVICES.map(({ name, icon: Icon }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl transition-all hover:scale-[1.02]"
                  style={{ background: 'rgba(139,0,50,0.03)', border: '1px solid rgba(139,0,50,0.07)' }}
                >
                  <Icon size={14} style={{ color: 'var(--maroon)', flexShrink: 0 }} />
                  <span className="text-xs font-medium leading-snug" style={{ color: '#2a0a14' }}>{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Why choose me + goal */}
        <div className="flex flex-col gap-5">
          <GlassCard delay={0.2}>
            <div className="p-6" style={{ background: 'linear-gradient(135deg, rgba(139,0,50,0.04), rgba(139,0,50,0.08))' }}>
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#1a0a10' }}>
                <Star size={17} style={{ color: 'var(--maroon)' }} /> Why Choose Me
              </h3>
              <div className="space-y-3">
                {[
                  { title: 'Best Quality Work', icon: CheckCircle, desc: 'Meticulous attention to detail in every deliverable.' },
                  { title: 'Fast Turnaround', icon: Zap, desc: 'Efficient workflows and prompt communication.' },
                  { title: 'Multi-Domain Expert', icon: Brain, desc: 'Cybersecurity, SQA, Cloud — complete coverage.' },
                  { title: 'AI-Augmented', icon: Brain, desc: 'Leveraging cutting-edge AI tools for superior results.' },
                ].map(({ title, icon: Icon, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'var(--maroon)', color: 'white' }}
                    >
                      <Icon size={13} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#1a0a10' }}>{title}</p>
                      <p className="text-xs text-gray-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.25}>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(139,0,50,0.1)', color: 'var(--maroon)' }}
                >
                  <Target size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1a0a10' }}>Career Goal</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    To become a <strong style={{ color: 'var(--maroon)' }}>global cybersecurity specialist</strong> — bridging offensive and defensive security while building AI-driven automated security solutions that protect digital infrastructure worldwide.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  )
}
