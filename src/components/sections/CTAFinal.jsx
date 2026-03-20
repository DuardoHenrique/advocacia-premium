import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionWrapper from '../ui/SectionWrapper'
import Button from '../ui/Button'

export default function CTAFinal() {
  const visualRef = useRef(null)

  useEffect(() => {
    gsap.to(visualRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: visualRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, [])

  return (
    <SectionWrapper id="cta-final">
      <div className="rounded-[48px] overflow-hidden glass-strong bg-[rgba(15,15,20,0.95)] border-border-soft relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Esquerda: Copy */}
          <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center z-20">
            <h2 className="font-display font-bold italic text-[40px] md:text-[56px] text-text-primary leading-[1.1] mb-6">
              Pronto para resolver seu caso?
            </h2>
            <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-10 max-w-[440px]">
              Entre em contato e receba uma análise inicial com total confidencialidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary">Falar com um especialista</Button>
              <Button variant="secondary" href="https://wa.me/5500000000000">WhatsApp</Button>
            </div>

            <div className="font-mono text-[12px] md:text-[13px] text-text-muted flex items-center gap-2">
              <span>Atendimento rápido</span>
              <span className="w-1 h-1 rounded-full bg-accent/50" />
              <span>Total confidencialidade</span>
            </div>
          </div>

          {/* Direita: Visual Setup */}
          <div className="relative h-[300px] lg:h-auto overflow-hidden bg-[#0a0a0e] rounded-b-[48px] lg:rounded-none lg:rounded-r-[48px]">
            <div 
              ref={visualRef}
              className="absolute inset-[-20%] w-[140%] h-[140%] opacity-40 mix-blend-screen"
              style={{
                backgroundImage: 'radial-gradient(ellipse at center, rgba(184,154,90,0.2) 0%, transparent 70%)'
              }}
            >
              {/* Elementos arquitetônicos de luz e sombra */}
              <div className="absolute top-1/4 right-1/4 w-1/3 h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 transform origin-top-right blur-xl" />
              <div className="absolute top-1/2 left-1/4 w-full h-[1px] bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
