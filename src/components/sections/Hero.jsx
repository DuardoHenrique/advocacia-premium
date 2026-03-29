import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import Button from '../ui/Button'
import heroVideo from '../../assets/hero advocacia.mp4'
import heroVideoMobile from '../../assets/background-hero-mobile.mp4'
import heroPoster from '../../assets/hero-poster.jpg'

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subheadRef = useRef(null)
  const ctaRef = useRef(null)
  const bgRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [mobileVideoLoaded, setMobileVideoLoaded] = useState(false)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0 })
        .fromTo(subheadRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .fromTo(ctaRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'linear' }, 0)

      // Parallax
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="relative w-full h-[100dvh] flex flex-col md:flex-row items-start md:items-center overflow-hidden pt-[100px] md:pt-0"
    >
      {/* Background Cinematográfico */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-bg-primary"
      >
        {/* Poster Inicial */}
        <img 
          src={heroPoster} 
          alt="Poster Advocacia"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${(videoLoaded || mobileVideoLoaded) ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Vídeo Desktop */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Vídeo Mobile */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          onLoadedData={() => setMobileVideoLoaded(true)}
          className={`block md:hidden absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${mobileVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={heroVideoMobile} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 via-transparent to-transparent" />
      </div>

      {/* Overlays de legibilidade */}
      {/* Overlay sutil para legibilidade removido/suavizado */}
      <div className="absolute inset-0 z-10 bg-transparent h-full" />

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-container mx-auto px-[20px] md:px-[32px]">
        <div className="max-w-[700px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="font-mono text-accent uppercase tracking-widest text-sm">Advocacia Premium</span>
          </div>
          <h1 
            ref={headlineRef} 
            className="font-display font-bold italic text-[34px] leading-[1.15] md:text-[64px] lg:text-[72px] text-text-primary mb-6 opacity-0"
          >
            Defesa jurídica com <span className="text-accent">rigor e excelência.</span>
          </h1>
          
          <p 
            ref={subheadRef}
            className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed mb-10 max-w-[500px] opacity-0"
          >
            Atuação jurídica precisa, com foco em resultado e segurança em cada decisão.
          </p>

          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 opacity-0"
          >
            <Button variant="primary" href="#cta-final" className="w-full sm:w-auto">
              Fale com um especialista
            </Button>
            <Button variant="secondary" href="https://wa.me/5500000000000" className="w-full sm:w-auto">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
