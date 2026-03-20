import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionWrapper from '../ui/SectionWrapper'
import sobreImg from '../../assets/sobre-escritorio.png'

export default function SobreEscritorio() {
  const sectionRef = useRef(null)
  const parallaxRight = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    // Parallax
    gsap.to(parallaxRight.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

    // Counters
    statsRef.current.forEach(stat => {
      const targetStr = stat.innerText.replace('+', '')
      const target = parseInt(targetStr)
      if (isNaN(target)) return
      
      const obj = { val: 0 }
      
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stat,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        onUpdate: () => {
          stat.innerText = `+${Math.floor(obj.val)}`
        }
      })
    })
  }, [])

  return (
    <SectionWrapper id="sobre">
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Esquerda: Conteúdo */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="font-mono text-accent uppercase tracking-widest text-sm">Nossa Trajetória</span>
          </div>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text-primary mb-6">
            Compromisso com a <span className="text-accent italic font-display">excelência jurídica.</span>
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-8">
            Atuamos com foco em soluções jurídicas eficazes, combinando conhecimento técnico
            e visão estratégica para proteger os interesses de nossos clientes.
          </p>
          
          <ul className="flex flex-col gap-4 font-body text-[15px] md:text-[16px] text-text-secondary mb-10">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Atendimento personalizado e criterioso.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Estratégia orientada a resultados.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Atuação ética, transparente e precisa.
            </li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border-soft">
            <div>
              <span 
                ref={el => statsRef.current[0] = el}
                className="block font-display text-[32px] md:text-[40px] text-accent mb-1"
              >
                +10
              </span>
              <span className="font-mono text-[10px] md:text-[11px] text-text-muted uppercase tracking-widest">Anos de<br/>Experiência</span>
            </div>
            <div>
              <span 
                ref={el => statsRef.current[1] = el}
                className="block font-display text-[32px] md:text-[40px] text-accent mb-1"
              >
                +500
              </span>
              <span className="font-mono text-[10px] md:text-[11px] text-text-muted uppercase tracking-widest">Casos<br/>Atendidos</span>
            </div>
            <div>
              <span className="block font-display text-[20px] md:text-[24px] text-accent mt-2 mb-3">Alta precisão</span>
              <span className="font-mono text-[10px] md:text-[11px] text-text-muted uppercase tracking-widest">Compromisso</span>
            </div>
          </div>
        </div>

        {/* Direita: Imagem / Visual */}
        <div className="relative h-[400px] lg:h-auto min-h-[500px] rounded-[32px] overflow-hidden order-1 lg:order-2">
          <div 
            className="absolute inset-[-10%] w-[120%] h-[120%]" 
            ref={parallaxRight}
          >
            <img 
              src={sobreImg} 
              alt="Detalhe de biblioteca jurídica Premium"
              className="w-full h-full object-cover filter brightness-[0.7] sepia-[0.2] hue-rotate-[10deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-80" />
          </div>
          
          {/* Decoração sobre a imagem */}
          <div className="absolute bottom-8 left-8 right-8 glass p-6 backdrop-blur-md bg-bg-primary/80 border-accent/20">
            <p className="font-display italic text-lg text-text-primary text-center">
              “A solidez de uma defesa construída nos menores detalhes.”
            </p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}
