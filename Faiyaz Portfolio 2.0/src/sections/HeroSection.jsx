import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Keyboard, Globe, BookOpen, Mic, PenTool, Users, BarChart2,
  Presentation, Award, Cpu, Shield, Code, Image, Camera,
  GraduationCap, Building, ChevronRight, Star, Trophy, Zap,
  MessageSquare, Brain, Terminal, Server, Smartphone, Database,
  Cloud, Lock, FileText, CheckCircle, Info
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'
import { Accordion, AccordionGroup } from '../components/Accordion'
import Modal from '../components/Modal'
import GlassOrb from '../components/GlassOrb'

const SOFT_SKILLS = [
  { name: 'Creative Writing', icon: PenTool },
  { name: 'English Debate', icon: MessageSquare },
  { name: 'Poem Writing', icon: BookOpen },
  { name: 'Public Speaking', icon: Mic },
  { name: 'Data Analysis', icon: BarChart2 },
  { name: 'Presentations', icon: Presentation },
  { name: 'Leadership', icon: Users },
  { name: 'Data Entry', icon: FileText },
]

const TOOLS = [
  { name: 'Microsoft Office', icon: FileText, cat: 'Productivity' },
  { name: 'Microsoft 365', icon: Cloud, cat: 'Productivity' },
  { name: 'ChatGPT', icon: Brain, cat: 'AI' },
  { name: 'Gemini', icon: Zap, cat: 'AI' },
  { name: 'Perplexity', icon: Brain, cat: 'AI' },
  { name: 'Claude', icon: Brain, cat: 'AI' },
  { name: 'Kimi K2', icon: Brain, cat: 'AI' },
  { name: 'Qwen', icon: Brain, cat: 'AI' },
  { name: 'Z AI', icon: Brain, cat: 'AI' },
  { name: 'Cursor', icon: Code, cat: 'Dev' },
  { name: 'VS Code', icon: Terminal, cat: 'Dev' },
  { name: 'IntelliJ IDEA', icon: Code, cat: 'Dev' },
  { name: 'VMware Workstation', icon: Server, cat: 'Dev' },
  { name: 'Google Firebase', icon: Database, cat: 'Dev' },
  { name: 'Google Cloud APIs', icon: Cloud, cat: 'Dev' },
  { name: 'Expo Go / Expo Dev', icon: Smartphone, cat: 'Dev' },
  { name: 'Railway', icon: Server, cat: 'Dev' },
  { name: 'Twilio', icon: MessageSquare, cat: 'Dev' },
]

const SSC_MARKS = [
  { sub: 'BANGLA', marks: 143, grade: 'A', gpa: '4.00' },
  { sub: 'ENGLISH', marks: 173, grade: 'A+', gpa: '5.00' },
  { sub: 'MATHEMATICS', marks: 87, grade: 'A+', gpa: '5.00' },
  { sub: 'BGS', marks: 82, grade: 'A+', gpa: '5.00' },
  { sub: 'ISLAM', marks: 88, grade: 'A+', gpa: '5.00' },
  { sub: 'PHYSICS', marks: 85, grade: 'A+', gpa: '5.00' },
  { sub: 'CHEMISTRY', marks: 84, grade: 'A+', gpa: '5.00' },
  { sub: 'HIGHER MATH', marks: 90, grade: 'A+', gpa: '5.00' },
  { sub: 'ICT', marks: 46, grade: 'A+', gpa: '5.00' },
  { sub: 'BIOLOGY', marks: 82, grade: 'A+', gpa: '5.00' },
  { sub: 'PHYSICAL EDU', marks: 100, grade: 'A+', gpa: '5.00' },
  { sub: 'CAREER EDU', marks: 50, grade: 'A+', gpa: '5.00' },
]

const HSC_MARKS = [
  { sub: 'BANGLA', marks: 154, grade: 'A', gpa: '4.00' },
  { sub: 'ENGLISH', marks: 168, grade: 'A+', gpa: '5.00' },
  { sub: 'ICT', marks: 92, grade: 'A+', gpa: '5.00' },
  { sub: 'PHYSICS', marks: 159, grade: 'A+', gpa: '5.00' },
  { sub: 'CHEMISTRY', marks: 168, grade: 'A+', gpa: '5.00' },
  { sub: 'HIGHER MATH', marks: 180, grade: 'A+', gpa: '5.00' },
  { sub: 'BIOLOGY', marks: 169, grade: 'A+', gpa: '5.00' },
]

function MarksTable({ marks }) {
  return (
    <div className="mt-3 overflow-hidden rounded-xl" style={{ border: '1px solid rgba(139,0,50,0.1)' }}>
      <table className="w-full text-xs">
        <thead>
          <tr style={{ background: 'var(--maroon)', color: 'white' }}>
            <th className="py-2.5 px-3 text-left font-medium">Subject</th>
            <th className="py-2.5 px-3 text-center font-medium">Marks</th>
            <th className="py-2.5 px-3 text-center font-medium">Grade</th>
            <th className="py-2.5 px-3 text-center font-medium">GPA</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((row, i) => (
            <tr
              key={row.sub}
              className="transition-colors"
              style={{
                background: i % 2 === 0 ? 'rgba(139,0,50,0.02)' : 'white',
              }}
            >
              <td className="py-2 px-3 font-medium text-xs" style={{ color: '#2a0a14' }}>{row.sub}</td>
              <td className="py-2 px-3 text-center font-mono" style={{ color: '#4a1020' }}>{row.marks}</td>
              <td className="py-2 px-3 text-center">
                <span
                  className="px-2 py-0.5 rounded-md text-xs font-semibold"
                  style={{
                    background: row.grade === 'A+' ? 'rgba(139,0,50,0.1)' : 'rgba(180,120,0,0.1)',
                    color: row.grade === 'A+' ? 'var(--maroon)' : '#7a5500',
                  }}
                >
                  {row.grade}
                </span>
              </td>
              <td className="py-2 px-3 text-center font-mono text-xs" style={{ color: 'var(--maroon)' }}>{row.gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PhotoPlaceholder({ label, size = 'md' }) {
  const sizes = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-44 h-56',
    xl: 'w-full aspect-[4/5]',
  }
  return (
    <div className={`photo-placeholder ${sizes[size]} rounded-2xl`}>
      <Camera size={size === 'xl' ? 32 : 20} style={{ color: 'var(--maroon)', opacity: 0.5 }} />
      <span className="mt-2 text-xs text-center px-2" style={{ color: 'var(--maroon)', opacity: 0.6 }}>
        {label}
      </span>
    </div>
  )
}

function LogoPlaceholder({ label, size = 48 }) {
  return (
    <div
      className="logo-placeholder rounded-xl flex flex-col items-center justify-center gap-1 p-2"
      style={{ width: size, height: size, flexShrink: 0 }}
    >
      <Image size={16} style={{ color: 'var(--maroon)', opacity: 0.5 }} />
      <span className="text-center leading-tight" style={{ fontSize: '0.6rem', color: 'var(--maroon)', opacity: 0.6 }}>
        {label}
      </span>
    </div>
  )
}

function CertPlaceholder({ label }) {
  return (
    <div
      className="photo-placeholder rounded-xl flex flex-col items-center justify-center gap-2 p-4"
      style={{ width: '100%', aspectRatio: '1.41', minHeight: 80 }}
    >
      <Award size={20} style={{ color: 'var(--maroon)', opacity: 0.5 }} />
      <span className="text-xs text-center" style={{ color: 'var(--maroon)', opacity: 0.6 }}>
        {label}
      </span>
    </div>
  )
}

export default function HeroSection() {
  const [sscModalOpen, setSscModalOpen] = useState(false)
  const [hscModalOpen, setHscModalOpen] = useState(false)

  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center pt-28">
      {/* Ambient orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlassOrb className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-60" />
      </div>

      <div className="w-full">
        {/* Hero top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Left: Identity */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-6"
                style={{ background: 'rgba(139,0,50,0.08)', color: 'var(--maroon)', border: '1px solid rgba(139,0,50,0.18)' }}
              >
                <Shield size={12} />
                Cybersecurity · SQA · Cloud
              </span>

              <h1 className="font-display text-6xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ color: '#1a0a10' }}>
                Nurul
                <br />
                <span className="text-gradient italic">Faiyaz</span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
                BSc CSE student at East West University, passionate cybersecurity enthusiast, SQA engineer, and cloud security specialist building secure digital futures.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="mailto:scrollfaiyaz@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'var(--maroon)', boxShadow: '0 8px 24px rgba(139,0,50,0.3)' }}
                >
                  <MessageSquare size={15} /> Get in Touch
                </a>
                <button
                  onClick={() => document.getElementById('cyber')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(139,0,50,0.07)', color: 'var(--maroon)', border: '1px solid rgba(139,0,50,0.18)' }}
                >
                  View Services <ChevronRight size={15} />
                </button>
              </div>

              {/* Quick stats */}
              <div className="flex gap-4 flex-wrap">
                {[
                  { val: '3.67', label: 'CGPA / 4.00', icon: GraduationCap },
                  { val: '65', label: 'WPM Typing', icon: Keyboard },
                  { val: '5.00', label: 'SSC & HSC GPA', icon: Trophy },
                ].map(({ val, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(139,0,50,0.1)', backdropFilter: 'blur(12px)' }}
                  >
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(139,0,50,0.1)' }}>
                      <Icon size={14} style={{ color: 'var(--maroon)' }} />
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm" style={{ color: 'var(--maroon)' }}>{val}</div>
                      <div className="text-xs text-gray-400">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Photo + University card */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4"
            >
              <img src="/photos/Nurul Faiyaz.jpg" alt="Nurul Faiyaz" className="w-full aspect-[4/5] rounded-2xl object-cover" />
              <div className="flex flex-col gap-4 flex-1">
               <img src="/photos/Formal_Photo.JPG" alt="Formal Photo" className="w-full rounded-2xl object-cover" style={{height:'10rem'}} />
                <img src="/photos/Faiyaz.jpg" alt="Faiyaz" className="w-full rounded-2xl object-cover" style={{height:'10rem'}} />
              </div>
            </motion.div>

            {/* University card */}
            <GlassCard delay={0.3} tilt>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/logos/ewu.png" className="w-12 h-12 rounded-xl object-contain" alt="EWU" />
                  <div>
                    <h3 className="font-medium text-sm" style={{ color: '#1a0a10' }}>East West University</h3>
                    <p className="text-xs text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(139,0,50,0.1)', color: 'var(--maroon)' }}>
                      Current
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3" style={{ borderTop: '1px solid rgba(139,0,50,0.08)' }}>
                  <span className="flex items-center gap-1"><GraduationCap size={12} /> BSc in CSE</span>
                  <span className="flex items-center gap-1" style={{ color: 'var(--maroon)' }}><Star size={12} /> CGPA 3.67/4.00</span>
                  <div className="flex items-center gap-1.5">
                    <img src="/logos/ewucsc.jpg" className="w-5 h-5 rounded object-contain" alt="EWUCSC" />
                    <span>Sub-Exec · EWUCSC</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Language Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <GlassCard delay={0.1}>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={16} style={{ color: 'var(--maroon)' }} />
                <h3 className="font-medium text-sm" style={{ color: '#1a0a10' }}>Communication</h3>
              </div>
              {[
                { skill: 'Typing Speed', val: '65 WPM', pct: 65 },
                { skill: 'English Reading', val: 'Fluent', pct: 95 },
                { skill: 'English Writing', val: 'Conversational', pct: 80 },
                { skill: 'English Speaking', val: 'Better', pct: 75 },
                { skill: 'Listening', val: 'Good', pct: 85 },
              ].map(({ skill, val, pct }) => (
                <div key={skill} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">{skill}</span>
                    <span className="font-medium" style={{ color: 'var(--maroon)' }}>{val}</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard delay={0.15}>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={16} style={{ color: 'var(--maroon)' }} />
                <h3 className="font-medium text-sm" style={{ color: '#1a0a10' }}>Languages</h3>
              </div>
              {[
                { lang: 'Bengali', level: 'Native', pct: 100 },
                { lang: 'English', level: 'Fluent', pct: 88 },
                { lang: 'Hindi', level: 'Understand', pct: 55 },
                { lang: 'Urdu', level: 'Understand', pct: 45 },
              ].map(({ lang, level, pct }) => (
                <div key={lang} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">{lang}</span>
                    <span className="font-medium" style={{ color: 'var(--maroon)' }}>{level}</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard delay={0.2}>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={16} style={{ color: 'var(--maroon)' }} />
                <h3 className="font-medium text-sm" style={{ color: '#1a0a10' }}>Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map(({ name, icon: Icon }) => (
                  <span key={name} className="skill-tag">
                    <Icon size={11} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Tools Grid */}
        <GlassCard delay={0.25} className="mb-10">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <Cpu size={16} style={{ color: 'var(--maroon)' }} />
              <h3 className="font-medium" style={{ color: '#1a0a10' }}>Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map(({ name, icon: Icon, cat }) => (
                <motion.span
                  key={name}
                  className="skill-tag"
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    background: cat === 'AI'
                      ? 'rgba(139,0,50,0.07)'
                      : cat === 'Dev'
                      ? 'rgba(139,0,50,0.04)'
                      : 'rgba(139,0,50,0.05)',
                  }}
                >
                  <Icon size={11} />
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Academic Qualifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} style={{ color: 'var(--maroon)' }} />
            <h2 className="font-display text-2xl font-semibold" style={{ color: '#1a0a10' }}>
              Academic Qualifications
            </h2>
          </div>

          <AccordionGroup>
            {/* SSC */}
            <Accordion
              title="SSC 2020 — Shamsul Hoque Khan School & College, Demra, Dhaka (GPA 5.00/5.00)"
              icon={Trophy}
              defaultOpen={false}
            >
              <div className="pt-3">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/logos/shksc.jpg" className="w-13 h-13 rounded-xl object-contain" alt="SHKSC" />
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#1a0a10' }}>Shamsul Hoque Khan School & College</p>
                    <p className="text-xs text-gray-400">Demra, Dhaka · SSC 2020</p>
                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold" style={{ color: 'var(--maroon)' }}>
                      <Star size={11} /> GPA 5.00 / 5.00
                    </span>
                  </div>
                  <button
                    onClick={() => setSscModalOpen(true)}
                    className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all hover:-translate-y-0.5"
                    style={{ background: 'var(--maroon)', color: 'white' }}
                  >
                    <BarChart2 size={12} /> View Full Marksheet
                  </button>
                </div>

                {/* Club affiliations */}
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">Club Affiliations</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'SHKSCDC', certLabel: 'Certificate of Excellence' },
                      { name: 'SHKSC-ELC', certLabel: 'Certificate of Completion' },
                    ].map(({ name, certLabel }) => (
                      <div
                        key={name}
                        className="p-3 rounded-xl"
                        style={{ background: 'rgba(139,0,50,0.03)', border: '1px solid rgba(139,0,50,0.08)' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <LogoPlaceholder label={`${name} Logo`} size={36} />
                          <span className="font-medium text-xs" style={{ color: '#1a0a10' }}>{name}</span>
                        </div>
                        <img
  src={name === 'SHKSCDC' ? '/certs/debate.JPG' : '/certs/elc.JPG'}
  alt={certLabel}
  className="w-full rounded-xl object-contain"
/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Accordion>

            {/* HSC */}
            <Accordion
              title="HSC 2022 — Dhaka City College (GPA 5.00/5.00)"
              icon={Trophy}
              defaultOpen={false}
            >
              <div className="pt-3">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/logos/dcc.png" className="w-13 h-13 rounded-xl object-contain" alt="DCC" />
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#1a0a10' }}>Dhaka City College</p>
                    <p className="text-xs text-gray-400">Dhaka · HSC 2022</p>
                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold" style={{ color: 'var(--maroon)' }}>
                      <Star size={11} /> GPA 5.00 / 5.00
                    </span>
                  </div>
                  <button
                    onClick={() => setHscModalOpen(true)}
                    className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all hover:-translate-y-0.5"
                    style={{ background: 'var(--maroon)', color: 'white' }}
                  >
                    <BarChart2 size={12} /> View Full Marksheet
                  </button>
                </div>
              </div>
            </Accordion>

            {/* University */}
            <Accordion title="BSc CSE (Current) — East West University, Dhaka (CGPA 3.67/4.00)" icon={GraduationCap} defaultOpen>
              <div className="pt-3 flex items-center gap-3">
                <LogoPlaceholder label="EWU Logo" size={52} />
                <div>
                  <p className="font-medium text-sm" style={{ color: '#1a0a10' }}>East West University</p>
                  <p className="text-xs text-gray-400">Dhaka, Bangladesh · BSc in Computer Science & Engineering</p>
                  <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold" style={{ color: 'var(--maroon)' }}>
                    <Star size={11} /> CGPA 3.67 / 4.00 (Ongoing)
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <img src="/logos/ewucsc.jpg" className="w-10 h-10 rounded-xl object-contain" alt="EWUCSC" />
                  <div className="text-xs text-gray-500">
                    <div className="font-medium" style={{ color: '#1a0a10' }}>EWUCSC</div>
                    <div>Sub Executive</div>
                  </div>
                </div>
              </div>
            </Accordion>
          </AccordionGroup>
        </div>
      </div>

      {/* SSC Modal */}
      <Modal open={sscModalOpen} onClose={() => setSscModalOpen(false)} title="SSC 2020 — Full Marksheet (GPA 5.00/5.00)">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={16} style={{ color: 'var(--maroon)' }} />
          <span className="text-sm text-gray-500">Shamsul Hoque Khan School & College · Demra, Dhaka</span>
        </div>
        <MarksTable marks={SSC_MARKS} />
      </Modal>

      {/* HSC Modal */}
      <Modal open={hscModalOpen} onClose={() => setHscModalOpen(false)} title="HSC 2022 — Full Marksheet (GPA 5.00/5.00)">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={16} style={{ color: 'var(--maroon)' }} />
          <span className="text-sm text-gray-500">Dhaka City College · Dhaka</span>
        </div>
        <MarksTable marks={HSC_MARKS} />
      </Modal>
    </SectionWrapper>
  )
}
