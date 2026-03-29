import React from 'react'
import { useLenis } from './hooks/useLenis'

// Layout & UI
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NoiseOverlay from './components/ui/NoiseOverlay'
import WhatsAppFAB from './components/ui/WhatsAppFAB'

// Sections
// Sections (Core)
import Hero from './components/sections/Hero'
import AreasAtuacao from './components/sections/AreasAtuacao'
import SobreEscritorio from './components/sections/SobreEscritorio'
import Equipe from './components/sections/Equipe'

// Sections (Lazy Loaded)
const CasosResultados = React.lazy(() => import('./components/sections/CasosResultados'))
const ProcessoTimeline = React.lazy(() => import('./components/sections/ProcessoTimeline'))
const Depoimentos = React.lazy(() => import('./components/sections/Depoimentos'))
const CTAFinal = React.lazy(() => import('./components/sections/CTAFinal'))
const FAQ = React.lazy(() => import('./components/sections/FAQ'))
const MapaContato = React.lazy(() => import('./components/sections/MapaContato'))

function App() {
  useLenis()

  return (
    <>
      <NoiseOverlay />
      <div className="relative w-full overflow-hidden bg-bg-primary min-h-screen text-text-primary antialiased">
        <Navbar />
        
        <main>
          <Hero />
          <AreasAtuacao />
          <SobreEscritorio />
          <Equipe />
          <React.Suspense fallback={<div className="h-64 bg-bg-primary" />}>
            <CasosResultados />
            <ProcessoTimeline />
            <Depoimentos />
            <CTAFinal />
            <FAQ />
            <MapaContato />
          </React.Suspense>
        </main>

        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  )
}

export default App
