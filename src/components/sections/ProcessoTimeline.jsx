import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionWrapper from '../ui/SectionWrapper'

const passos = [
  { num: '01', titulo: 'Análise inicial', desc: 'Entendimento detalhado da situação e coleta de informações relevantes.' },
  { num: '02', titulo: 'Definição de estratégia', desc: 'Estruturação da melhor abordagem jurídica com base no objetivo do cliente.' },
  { num: '03', titulo: 'Execução técnica', desc: 'Atuação precisa com acompanhamento de todas as fases do caso.' },
  { num: '04', titulo: 'Acompanhamento contínuo', desc: 'Atualizações frequentes e comunicação clara durante o processo.' },
  { num: '05', titulo: 'Conclusão e resultado', desc: 'Finalização com foco no melhor desfecho possível.' }
]

export default function ProcessoTimeline() {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    // Apenas aplica scroll horizontal em Desktop (lg)
    let ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024
      
      if (isDesktop && wrapperRef.current && containerRef.current) {
        const sections = gsap.utils.toArray('.timeline-step')
        
        // 1. Horizontal Scroll Tween
        const scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + wrapperRef.current.offsetWidth
          }
        })

        // 2. Progress Bar Animation (Sync with scrollTween)
        gsap.to('.progress-bar-active', {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: () => "+=" + wrapperRef.current.offsetWidth,
            scrub: 1
          }
        })

        // 3. Node Activation (Using containerAnimation for perfect sync)
        sections.forEach((section, i) => {
          const node = section.querySelector('.timeline-node')
          
          // Initial state for node 0
          if (i === 0) {
            gsap.set(node, {
              backgroundColor: '#C5A059',
              borderColor: '#C5A059',
              color: '#07070A'
            })
          }

          // Animation for nodes (except 0 which is already active)
          if (i > 0) {
            gsap.to(node, {
              backgroundColor: '#C5A059',
              borderColor: '#C5A059',
              color: '#07070A',
              duration: 0.2,
              scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left 60%", // Activate when reaching near center/progress bar tip
                toggleActions: "play reverse play reverse"
              }
            })
          }
        })
      } else {
        // Fallback Mobile Fade Up setup (opcional, pode ser state simples CSS)
        const sections = gsap.utils.toArray('.timeline-step-mobile')
        gsap.fromTo(sections, 
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.15, duration: 0.8,
            scrollTrigger: { trigger: containerRef.current, start: "top 70%" }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="bg-bg-primary overflow-hidden w-full relative">
      <SectionWrapper id="processo" className="pb-8 md:pb-16">
        <div className="max-w-[700px]">
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text-primary mb-6">
            Como conduzimos seu caso
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
            Um fluxo claro, objetivo e transparente para que você entenda cada etapa do atendimento jurídico.
          </p>
        </div>
      </SectionWrapper>

      {/* DESKTOP HORIZONTAL SCROLL (Somente visivel em >= lg) */}
      <div className="hidden lg:flex w-full h-[60vh] items-center" ref={wrapperRef}>
        <div className="flex w-[200vw]">
          {passos.map((passo, idx) => (
            <div key={idx} className="timeline-step w-[40vw] px-16 relative flex flex-col justify-center">
              
              {/* Conector e Progress Bar */}
              {idx === 0 && (
                <div className="absolute top-[34px] left-1/2 w-[160vw] h-[2px] bg-border-soft -z-10">
                  <div className="progress-bar-active h-full bg-accent w-0" />
                </div>
              )}
              
              <div className={`timeline-node node-${idx} w-16 h-16 rounded-full bg-bg-elevated border flex items-center justify-center font-mono text-xl text-border-strong border-border-strong mb-12 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors duration-300`}>
                {passo.num}
              </div>

              <h3 className="font-heading font-bold text-2xl text-text-primary mb-4 w-min whitespace-nowrap">
                {passo.titulo}
              </h3>
              <p className="font-body text-text-secondary text-base leading-relaxed max-w-[320px]">
                {passo.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VERTICAL SCROLL (Somente visivel em < lg) */}
      <div className="lg:hidden flex flex-col px-5 py-4 pb-20 relative gap-12 max-w-container mx-auto">
        <div className="absolute left-[39px] top-6 bottom-20 w-[1px] bg-border-soft -z-10" />
        
        {passos.map((passo, idx) => (
          <div key={idx} className="timeline-step-mobile flex gap-8 items-start opacity-0">
            <div className="w-10 h-10 shrink-0 rounded-full bg-bg-elevated border flex items-center justify-center font-mono text-sm text-accent border-accent/50 shadow-[0_0_10px_rgba(184,154,90,0.1)]">
              {passo.num}
            </div>
            <div className="pt-1">
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                {passo.titulo}
              </h3>
              <p className="font-body text-text-secondary text-sm md:text-base leading-relaxed">
                {passo.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
