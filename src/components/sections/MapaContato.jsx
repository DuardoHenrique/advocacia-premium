import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import SectionWrapper from '../ui/SectionWrapper'
import Button from '../ui/Button'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

export default function MapaContato() {
  const cardRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%'
          }
        }
      )

      gsap.fromTo(mapRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 80%'
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const mapAddress = encodeURIComponent("Av. Brg. Faria Lima, 1234 - Jardim Paulistano, São Paulo - SP")

  return (
    <section id="mapa" className="relative w-full overflow-hidden bg-bg-primary mt-20 md:mt-32 pt-20 md:pt-32 pb-20 md:pb-32">
      {/* Container do Mapa - Sangria à direita */}
      <div 
        ref={mapRef}
        className="lg:absolute top-20 md:top-32 right-0 w-full lg:w-[60vw] h-[400px] lg:h-[calc(100%-160px)] md:lg:h-[calc(100%-256px)] z-0 opacity-0"
      >
        <div className="w-full h-full relative group">
          {/* Overlay gradiente para fusão com o fundo */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-primary to-transparent z-10 lg:hidden" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 hidden lg:block" />
          
          {/* Iframe do Google Maps com Filtro Dark */}
          <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197477007!2d-46.6853!3d-23.5857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744cb89dc51%3A0x1b0d0d1d1d1d1d1d!2sAv.%20Brig.%20Faria%20Lima%2C%201234%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr`}
            width="100%" 
            height="100%" 
            style={{ 
              border: 0, 
              filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9) grayscale(0.5)',
              opacity: 0.8
            }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-t-[40px] lg:rounded-l-[80px] lg:rounded-tr-none hover:opacity-100 transition-opacity duration-500"
          ></iframe>

          {/* Pin flutuante estilizado para destaque */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
            <div className="w-10 h-10 bg-accent/20 rounded-full animate-ping absolute -inset-0" />
            <div className="w-4 h-4 bg-accent rounded-full border-2 border-white/20 shadow-[0_0_15px_rgba(197,160,89,1)] relative" />
          </div>
        </div>
      </div>

      <SectionWrapper className="relative z-10 py-0 h-full">
        <div className="flex flex-col lg:flex-row lg:items-center h-full">
          
          {/* Card de Contato */}
          <div 
            ref={cardRef}
            className="w-full lg:w-[480px] glass-strong p-8 md:p-12 z-20 opacity-0 relative overflow-hidden"
          >
            {/* Detalhe de luz no card */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/10 blur-3xl rounded-full" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="font-mono text-accent uppercase tracking-widest text-sm">Escritório Central</span>
            </div>

            <h3 className="font-display font-bold text-[32px] md:text-[40px] text-text-primary mb-8 italic leading-tight">
              Onde a excelência <br />
              <span className="text-accent italic">encontra o resultado.</span>
            </h3>
            
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm mb-1 uppercase tracking-wide">Endereço</h4>
                  <p className="font-body text-text-secondary leading-relaxed">
                    Avenida Faria Lima, 1234<br />
                    Cj. 500 — Jardim Paulistano<br />
                    São Paulo, SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm mb-1 uppercase tracking-wide">Telefone</h4>
                  <p className="font-body text-text-secondary">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary text-sm mb-1 uppercase tracking-wide">E-mail</h4>
                  <p className="font-body text-text-secondary">contato@advocaciapremium.com.br</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="primary" className="w-full flex items-center justify-center gap-2 group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Agendar Reunião Estratégica
              </Button>
              <Button variant="secondary" className="w-full" href="https://wa.me/5511999999999">
                WhatsApp Executivo
              </Button>
            </div>
          </div>

          <div className="flex-1 lg:pl-20 mt-12 lg:mt-0 hidden lg:block">
            {/* Espaço vazio para o mapa vazar no desktop */}
          </div>

        </div>
      </SectionWrapper>
    </section>
  )
}
