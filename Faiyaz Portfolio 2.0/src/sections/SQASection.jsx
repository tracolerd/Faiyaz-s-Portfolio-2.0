import { motion } from 'framer-motion'
import {
  Bug, TestTube, FileCode, PlayCircle, Database, GitBranch,
  Settings, Users, Briefcase, Layers, Code, Terminal,
  RefreshCw, AlertTriangle, CheckSquare, Activity, Cpu,
  Globe, ShieldCheck, TrendingUp, Zap, BarChart2
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'
import { Accordion, AccordionGroup } from '../components/Accordion'

const CORE_SKILLS = [
  { name: 'Manual Testing', icon: CheckSquare },
  { name: 'Bug Identification', icon: Bug },
  { name: 'Writing Test Cases', icon: FileCode },
  { name: 'Test Plans', icon: FileCode },
  { name: 'Selenium', icon: Code },
  { name: 'Cypress', icon: Code },
  { name: 'Playwright', icon: PlayCircle },
  { name: 'Java (Testing)', icon: Code },
  { name: 'Python (Testing)', icon: Terminal },
  { name: 'JavaScript', icon: Code },
  { name: 'Kotlin', icon: Code },
  { name: 'API Testing (Postman)', icon: Globe },
  { name: 'Database / SQL', icon: Database },
  { name: 'Automation Testing', icon: RefreshCw },
]

const ROLES = [
  { title: 'QA Manager / Team Lead', icon: Users, desc: 'Leading QA teams and managing test processes end-to-end.' },
  { title: 'Senior SQA Engineer', icon: ShieldCheck, desc: 'Designing and executing comprehensive test strategies.' },
  { title: 'Automation Engineer', icon: RefreshCw, desc: 'Building robust test automation frameworks with Selenium, Cypress, and Playwright.' },
  { title: 'SDET Officer', icon: Terminal, desc: 'Software Development Engineer in Test for emergency service platforms.' },
  { title: 'QA Architect', icon: Settings, desc: 'Creating scalable testing architectures from scratch.' },
]

const DOMAINS = [
  {
    name: 'FinTech',
    icon: TrendingUp,
    items: ['Banking App Testing', 'Payment Gateway Validation', 'Stock Market Software QA'],
    color: 'rgba(22, 93, 255, 0.08)',
    border: 'rgba(22, 93, 255, 0.15)',
    iconColor: '#165DFF',
  },
  {
    name: 'ERP',
    icon: Layers,
    items: ['HR Management Systems', 'Supply Chain Software', 'Learning Management Systems'],
    color: 'rgba(0, 150, 100, 0.06)',
    border: 'rgba(0, 150, 100, 0.15)',
    iconColor: '#009664',
  },
  {
    name: 'Healthcare',
    icon: Activity,
    items: ['Telemedicine Platforms', 'Medical Imaging Software', 'Patient Data Systems'],
    color: 'rgba(139, 0, 50, 0.05)',
    border: 'rgba(139, 0, 50, 0.12)',
    iconColor: 'var(--maroon)',
  },
]

const TRAINING = [
  { name: 'SDLC & STLC', icon: RefreshCw },
  { name: 'Agile / Scrum', icon: Settings },
  { name: 'Jira', icon: Briefcase },
  { name: 'Functional Testing', icon: CheckSquare },
  { name: 'Regression Testing', icon: RefreshCw },
  { name: 'Smoke Testing', icon: Zap },
  { name: 'Security Testing', icon: ShieldCheck },
  { name: 'Bug Life Cycle', icon: Bug },
  { name: 'Git / Version Control', icon: GitBranch },
  { name: 'CI/CD', icon: Settings },
  { name: 'Jenkins', icon: Settings },
  { name: 'GitHub Actions', icon: GitBranch },
]

export default function SQASection() {
  return (
    <SectionWrapper id="sqa">
      {/* Divider */}
      <div
        className="w-full h-px mb-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,0,50,0.15), transparent)' }}
      />

      <SectionHeader
        label="Role 01"
        title="Software Quality Assurance"
        subtitle="Delivering precision-tested, production-ready software through meticulous QA engineering and intelligent automation."
      />

      {/* Core Skills */}
      <GlassCard delay={0} className="mb-8">
        <div className="p-7">
          <div className="flex items-center gap-2 mb-5">
            <Bug size={18} style={{ color: 'var(--maroon)' }} />
            <h3 className="font-display font-semibold text-xl" style={{ color: '#1a0a10' }}>Core Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {CORE_SKILLS.map(({ name, icon: Icon }, i) => (
              <motion.span
                key={name}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.07, y: -2 }}
              >
                <Icon size={12} />
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
        {/* Roles */}
        <div className="lg:col-span-3">
          <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#1a0a10' }}>
            <Briefcase size={17} style={{ color: 'var(--maroon)' }} />
            Industry-Specific Roles
          </h3>
          <div className="flex flex-col gap-3">
            {ROLES.map(({ title, icon: Icon, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl transition-all duration-200 hover:shadow-glass group cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(139,0,50,0.08)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(139,0,50,0.08)', color: 'var(--maroon)' }}
                >
                  <Icon size={16} />
                </span>
                <div>
                  <p className="font-medium text-sm" style={{ color: '#1a0a10' }}>{title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training */}
        <div className="lg:col-span-2">
          <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: '#1a0a10' }}>
            <Cpu size={17} style={{ color: 'var(--maroon)' }} />
            Trained With
          </h3>
          <div className="flex flex-wrap gap-2">
            {TRAINING.map(({ name, icon: Icon }, i) => (
              <motion.span
                key={name}
                className="skill-tag text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon size={11} />
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Domains */}
      <div>
        <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2" style={{ color: '#1a0a10' }}>
          <Globe size={17} style={{ color: 'var(--maroon)' }} />
          Experienced Domains
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DOMAINS.map(({ name, icon: Icon, items, color, border, iconColor }, i) => (
            <GlassCard key={name} delay={i * 0.1} tilt>
              <div className="p-5" style={{ background: color, borderColor: border }}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${iconColor}15`, color: iconColor }}
                  >
                    <Icon size={17} />
                  </span>
                  <h4 className="font-semibold text-sm" style={{ color: '#1a0a10' }}>{name}</h4>
                </div>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: iconColor, opacity: 0.6 }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
