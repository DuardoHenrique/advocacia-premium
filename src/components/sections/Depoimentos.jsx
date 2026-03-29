import React, { useState, useEffect } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import backgroundComentarios from '../../assets/background-comentarios.webp'

const depoimentos = [
  { text: "O atendimento foi extremamente profissional e transparente em todas as etapas.", author: "Carlos Andrade", ctx: "Direito Trabalhista" },
  { text: "Senti segurança e clareza desde o primeiro contato até a conclusão do caso.", author: "Marina Alves", ctx: "Direito Civil" },
  { text: "A postura técnica e o cuidado com os detalhes fizeram diferença na condução do caso.", author: "Rafael Menezes", ctx: "Direito Empresarial" },
  { text: "Uma experiência objetiva, séria e muito bem conduzida.", author: "Fernanda Rocha", ctx: "Direito de Família" },
  { text: "O suporte foi claro, rápido e transmitiu muita confiança.", author: "Paulo Henrique", ctx: "Atendimento jurídico" }
]

export default function Depoimentos() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % depoimentos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div className="relative w-full bg-bg-primary overflow-hidden border-y border-white/[0.03]">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src={backgroundComentarios} 
          alt="Advocacia Premium - Depoimentos de clientes satisfeitos com a atuação jurídica em diversas áreas"
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/0 to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary opacity-60" />
      </div>

      <SectionWrapper id="depoimentos" className="relative z-10 py-[72px] md:py-[120px]">
        <div className="mb-16 md:mb-20 text-center max-w-[700px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="font-mono text-accent uppercase tracking-widest text-sm">Depoimentos</span>
            <div className="w-8 h-[1px] bg-accent"></div>
          </div>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text-primary mb-6 leading-tight">
            A confiança de quem já contou com <span className="text-accent">nossa atuação</span>
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
            Experiências reais de clientes que confiaram em nosso trabalho e obtiveram resultados concretos.
          </p>
        </div>

        <div 
          className="relative w-full h-[320px] sm:h-[280px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {depoimentos.map((dep, idx) => {
            // Normalize indices for center focus logic
            let offset = idx - active
            if (offset < -2) offset += depoimentos.length
            if (offset > 2) offset -= depoimentos.length
            
            const isActive = offset === 0
            
            let translate = `translateX(${offset * 110}%)`
            if (typeof window !== 'undefined') {
              if (window.innerWidth < 768) {
                translate = `translateX(${offset * 105}%) scale(${isActive ? 1 : 0.9})`
              } else {
                translate = `translateX(${offset * 60}%) scale(${isActive ? 1 : 0.85})`
              }
            }

            const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.4 : 0
            const zIndex = isActive ? 30 : Math.abs(offset) === 1 ? 20 : 10
            const pointerEvents = isActive ? 'auto' : 'none'

            return (
              <div 
                key={idx}
                className={`absolute w-[90%] md:w-[60%] lg:w-[45%] max-w-[600px] ${isActive ? 'glass-strong shadow-[0_0_30px_rgba(184,154,90,0.1)] border-accent/30' : 'glass'} p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`}
                style={{
                  transform: translate,
                  opacity,
                  zIndex,
                  pointerEvents
                }}
              >
                <p className="font-display italic text-[20px] md:text-[24px] text-text-primary text-center mb-8 leading-relaxed">
                  "{dep.text}"
                </p>
                <div className="flex flex-col items-center">
                  <span className="font-body font-medium text-[16px] text-accent mb-1">{dep.author}</span>
                  <span className="font-mono text-[12px] text-text-muted uppercase tracking-wider">Cliente · {dep.ctx}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {depoimentos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                active === idx ? 'bg-accent border-accent scale-110' : 'bg-transparent border-border-strong hover:border-accent/50'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
