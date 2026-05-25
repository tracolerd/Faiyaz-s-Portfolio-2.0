import { Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import SocialDock from './components/SocialDock'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import SQASection from './sections/SQASection'
import CloudSection from './sections/CloudSection'
import CyberSection from './sections/CyberSection'
import useActiveSection from './hooks/useActiveSection'

const SECTIONS = ['hero', 'sqa', 'cloud', 'cyber']

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#FDFBFC' }}>
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-12 h-12 rounded-2xl animate-pulse"
          style={{ background: 'var(--maroon)' }}
        />
        <p className="text-sm" style={{ color: 'var(--maroon)', opacity: 0.6 }}>Loading portfolio…</p>
      </div>
    </div>
  )
}

export default function App() {
  const activeSection = useActiveSection(SECTIONS)

  return (
    <div className="relative min-h-screen" style={{ background: '#FDFBFC' }}>
      {/* Ambient background blobs */}
      <div className="blob-1" />
      <div className="blob-2" />
      <div className="blob-3" />

      {/* Subtle grid texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,0,50,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,0,50,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          zIndex: 0,
        }}
      />

      {/* Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Social Dock */}
      <SocialDock />

      {/* Main content */}
      <main className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
          <SQASection />
          <CloudSection />
          <CyberSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
