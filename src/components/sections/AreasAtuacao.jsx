import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionWrapper from '../ui/SectionWrapper'

const areas = [
  {
    id: 1,
    title: 'Direito Civil',
    desc: 'Soluções jurídicas em conflitos, responsabilidades e relações civis com orientação segura.',
    bg: 'linear-gradient(to bottom, transparent, rgba(7,7,10,0.92))',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Direito Trabalhista',
    desc: 'Atuação estratégica em demandas trabalhistas, defesa de direitos e análise de riscos.',
    bg: 'linear-gradient(to bottom, transparent, rgba(7,7,10,0.92))',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Direito Empresarial',
    desc: 'Consultoria e suporte para empresas com foco em contratos, estrutura e prevenção de litígios.',
    bg: 'linear-gradient(to bottom, transparent, rgba(7,7,10,0.92))',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Direito de Família',
    desc: 'Condução sensível e técnica em demandas familiares com foco em proteção e equilíbrio.',
    bg: 'linear-gradient(to bottom, transparent, rgba(7,7,10,0.92))',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800'
  }
]

export default function AreasAtuacao() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Reveal Stagger Animation
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
    <SectionWrapper id="areas">
      <div ref={sectionRef}>
        <div className="mb-16 md:mb-20 max-w-[600px]">
          <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] text-text-primary mb-6">
            Áreas de atuação
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
            Atuação estratégica em frentes jurídicas selecionadas, com foco em precisão, clareza e solução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <div
              key={area.id}
              ref={el => cardsRef.current[idx] = el}
              className="group relative w-full min-h-[380px] rounded-default overflow-hidden cursor-pointer opacity-0"
            >
              {/* Imagem de Fundo Real */}
              <img 
                src={area.img}
                alt={area.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] grayscale-[0.3] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:brightness-[0.7] group-hover:saturate-150"
              />
              
              {/* Overlay Escuro */}
              <div 
                className="absolute inset-0 z-10"
                style={{ background: area.bg }}
              />

              {/* Borda Glow no Hover */}
              <div className="absolute inset-0 z-20 rounded-default border border-border-soft transition-all duration-400 group-hover:border-accent/30 group-hover:shadow-[0_0_20px_rgba(184,154,90,0.25)] pointer-events-none" />

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
                <div className="flex flex-col h-full min-h-[140px] justify-end">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {area.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
