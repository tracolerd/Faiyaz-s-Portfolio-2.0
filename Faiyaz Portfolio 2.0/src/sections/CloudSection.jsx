import { motion } from 'framer-motion'
import {
  Cloud, Shield, Lock, Eye, Server, Database, Key, Activity,
  AlertTriangle, Users, FileCode, Globe, Cpu, Layers, Container,
  GitBranch, Terminal, ShieldCheck, Network, BarChart2, Zap, Settings
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import { SectionHeader } from '../components/SectionWrapper'
import GlassCard from '../components/GlassCard'

const CORE_SKILLS = [
  { name: 'VPCs & Subnets', icon: Network },
  { name: 'Security Groups & NACLs', icon: Shield },
  { name: 'IAM / PoLP / MFA / RBAC', icon: Key },
  { name: 'Nessus / OpenVAS', icon: Eye },
  { name: 'AWS Inspector', icon: Cloud },
  { name: 'KMS / SSL/TLS', icon: Lock },
  { name: 'HashiCorp Vault', icon: Database },
  { name: 'Splunk', icon: Activity },
  { name: 'ELK Stack', icon: BarChart2 },
  { name: 'CloudWatch / Azure Monitor', icon: Eye },
  { name: 'Vulnerability Management', icon: AlertTriangle },
  { name: 'Data Protection', icon: Lock },
]

const ROLES = [
  { title: 'Cloud Security Administrator', icon: Cloud, color: '#0EA5E9' },
  { title: 'SOC Analyst', icon: Activity, color: '#22C55E' },
  { title: 'Compliance Officer (Technical)', icon: FileCode, color: '#F59E0B' },
  { title: 'DevSecOps Integrator', icon: GitBranch, color: 'var(--maroon)' },
]

const PROVIDERS = [
  { name: 'AWS', icon: Cloud, level: 75 },
  { name: 'Azure', icon: Cloud, level: 65 },
  { name: 'GCP', icon: Cloud, level: 60 },
  { name: 'Terraform / IaC', icon: FileCode, level: 70 },
  { name: 'Docker / K8s', icon: Container, level: 72 },
  { name: 'Burp Suite', icon: Shield, level: 68 },
  { name: 'OWASP Top 10', icon: AlertTriangle, level: 80 },
  { name: 'Linux Hardening', icon: Terminal, level: 74 },
]

const DOMAINS = [
  { name: 'FinTech', desc: 'Securing payment infrastructure, fraud detection systems, and financial APIs.' },
  { name: 'Healthcare', desc: 'HIPAA-compliant cloud architecture and patient data protection.' },
  { name: 'Public Sector / Enterprise', desc: 'Government-grade security frameworks and large-scale enterprise deployments.' },
]

export default function CloudSection() {
  return (
    <SectionWrapper id="cloud" style={{ background: 'rgba(248,244,246,0.5)' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(139,0,50,0.02), transparent)' }} />

      <div
        className="w-full h-px mb-20"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,0,50,0.15), transparent)' }}
      />

      <SectionHeader
        label="Role 02"
        title="Cloud Security Engineering"
        subtitle="Architecting resilient, compliant, and zero-trust cloud environments across AWS, Azure, and GCP."
      />

      {/* Cloud provider bars */}
      <GlassCard delay={0} className="mb-8">
        <div className="p-7">
          <div className="flex items-center gap-2 mb-6">
            <Cpu size={17} style={{ color: 'var(--maroon)' }} />
            <h3 className="font-display font-semibold text-lg" style={{ color: '#1a0a10' }}>Technical Proficiency</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {PROVIDERS.map(({ name, icon: Icon, level }, i) => (
              <div key={name}>
                <div className="flex items-center gap-1.5 mb-2">
                  <Icon size={13} style={{ color: 'var(--maroon)' }} />
                  <span className="text-xs font-medium" style={{ color: '#2a0a14' }}>{name}</span>
                  <span className="ml-auto text-xs" style={{ color: 'var(--maroon)' }}>{level}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Core Skills */}
        <GlassCard delay={0.1}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={16} style={{ color: 'var(--maroon)' }} />
              <h3 className="font-semibold text-sm" style={{ color: '#1a0a10' }}>Core Security Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {CORE_SKILLS.map(({ name, icon: Icon }, i) => (
                <motion.span
                  key={name}
                  className="skill-tag text-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <Icon size={11} />
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Roles + Domains */}
        <div className="flex flex-col gap-4">
          <GlassCard delay={0.15}>
            <div className="p-5">
              <h3 className="font-semibold text-sm mb-4 flex items-center gap-2" style={{ color: '#1a0a10' }}>
                <Users size={15} style={{ color: 'var(--maroon)' }} /> Target Roles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {ROLES.map(({ title, icon: Icon, color }) => (
                  <div
                    key={title}
                    className="p-3 rounded-xl flex items-start gap-2.5 transition-all hover:scale-[1.02]"
                    style={{ background: `${color}10`, border: `1px solid ${color}20` }}
                  >
                    <Icon size={14} style={{ color, marginTop: 1 }} />
                    <span className="text-xs font-medium leading-snug" style={{ color: '#2a0a14' }}>{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard delay={0.2}>
            <div className="p-5">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2" style={{ color: '#1a0a10' }}>
                <Globe size={15} style={{ color: 'var(--maroon)' }} /> Experienced Domains
              </h3>
              <div className="space-y-3">
                {DOMAINS.map(({ name, desc }) => (
                  <div key={name} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--maroon)' }} />
                    <div>
                      <span className="text-xs font-semibold" style={{ color: 'var(--maroon)' }}>{name}</span>
                      <p className="text-xs text-gray-400 leading-snug">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Architecture visualization */}
      <GlassCard delay={0.3}>
        <div className="p-6">
          <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2" style={{ color: '#1a0a10' }}>
            <Layers size={17} style={{ color: 'var(--maroon)' }} /> Cloud Security Layers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { layer: 'Identity Layer', tools: 'IAM · MFA · RBAC · PoLP', icon: Key },
              { layer: 'Network Layer', tools: 'VPC · Subnets · NACLs · SGs', icon: Network },
              { layer: 'Data Layer', tools: 'KMS · TLS/SSL · HashiCorp Vault', icon: Database },
              { layer: 'Monitoring Layer', tools: 'Splunk · ELK · CloudWatch', icon: Activity },
            ].map(({ layer, tools, icon: Icon }, i) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl text-center"
                style={{
                  background: `rgba(139,0,50,${0.04 + i * 0.01})`,
                  border: '1px solid rgba(139,0,50,0.1)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'rgba(139,0,50,0.1)', color: 'var(--maroon)' }}
                >
                  <Icon size={18} />
                </div>
                <p className="font-medium text-xs mb-1" style={{ color: '#1a0a10' }}>{layer}</p>
                <p className="text-xs text-gray-400 leading-snug">{tools}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassCard>
    </SectionWrapper>
  )
}
