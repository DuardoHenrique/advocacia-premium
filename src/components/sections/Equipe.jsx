import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionWrapper from '../ui/SectionWrapper'

const equipe = [
  { id: 1, nome: 'Dr. Roberto Almeida', cargo: 'Sócio Fundador · Estratégia Corporativa', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' },
  { id: 2, nome: 'Dra. Carolina Mendes', cargo: 'Sócia · Direito Tributário', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
  { id: 3, nome: 'Dr. Marcos Silva', cargo: 'Advogado Sênior · Direito Civil', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600' },
  { id: 4, nome: 'Dra. Fernanda Rocha', cargo: 'Advogada Sênior · Compliance', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600' }
]

export default function Equipe() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(cardsRef.current, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      }
    )
  }, [])

  return (
    <SectionWrapper id="equipe" className="bg-bg-surface">
      <div ref={sectionRef}>
        <div className="mb-16 md:mb-20 text-center max-w-[700px] mx-auto">
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text-primary mb-6">
            Especialistas comprometidos com o seu caso.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
            Uma equipe preparada para atuar com precisão técnica e visão estratégica em cada situação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipe.map((membro, idx) => (
            <div 
              key={membro.id}
              ref={el => cardsRef.current[idx] = el}
              className="group relative w-full aspect-[3/4] rounded-default overflow-hidden bg-bg-elevated cursor-pointer opacity-0"
            >
              {/* Foto Real */}
              <img 
                src={membro.img} 
                alt={`${membro.nome} - ${membro.cargo} na Advocacia Premium`}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110" 
              />
              
              {/* Overlay Escuro Inferior Suavizado */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07070A]/90 via-[#07070A]/40 to-transparent z-10 opacity-70 transition-opacity duration-400 group-hover:opacity-50" />

              {/* Informações */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="font-heading font-bold text-xl text-text-primary mb-1">
                  {membro.nome}
                </h3>
                <p className="font-mono text-sm text-accent">
                  {membro.cargo}
                </p>
                
                {/* Expand Hint */}
                <div className="overflow-hidden mt-3 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="font-body text-xs text-text-primary uppercase tracking-wider pb-1 border-b border-accent/50">
                    Ver Perfil
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
