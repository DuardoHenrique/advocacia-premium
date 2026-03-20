import React from 'react'
import { useLenis } from './hooks/useLenis'

// Layout & UI
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NoiseOverlay from './components/ui/NoiseOverlay'
import WhatsAppFAB from './components/ui/WhatsAppFAB'

// Sections
import Hero from './components/sections/Hero'
import AreasAtuacao from './components/sections/AreasAtuacao'
import SobreEscritorio from './components/sections/SobreEscritorio'
import Equipe from './components/sections/Equipe'
import CasosResultados from './components/sections/CasosResultados'
import ProcessoTimeline from './components/sections/ProcessoTimeline'
import Depoimentos from './components/sections/Depoimentos'
import CTAFinal from './components/sections/CTAFinal'
import FAQ from './components/sections/FAQ'
import MapaContato from './components/sections/MapaContato'

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
          <CasosResultados />
          <ProcessoTimeline />
          <Depoimentos />
          <CTAFinal />
          <FAQ />
          <MapaContato />
        </main>

        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  )
}

export default App
