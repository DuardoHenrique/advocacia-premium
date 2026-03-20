import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Atuação', href: '#areas' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Resultados', href: '#casos' },
    { label: 'Contato', href: '#mapa' },
  ]

  const navClasses = `fixed top-5 left-1/2 -translate-x-1/2 z-[8000] flex items-center justify-between w-[calc(100%-40px)] md:w-max px-6 py-3 rounded-pill transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
    scrolled 
      ? 'glass border-border-strong bg-[rgba(12,12,15,0.95)]' 
      : 'bg-transparent border-transparent'
  }`

  return (
    <>
      <nav className={navClasses}>
        <a href="#hero" className="font-display font-bold text-xl text-text-primary italic tracking-wide mr-8">
          Advocacia
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 mr-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="font-body text-[14px] text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" href="#cta-final" className="py-2.5 px-5 text-[13px]">
            Falar com um especialista
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary p-1"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[9000] glass-strong flex flex-col pt-24 px-6 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-8 right-8 text-text-primary p-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={28} />
        </button>

        <div className="flex flex-col gap-8 text-center mt-12">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display italic text-3xl text-text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto mb-12 flex flex-col gap-4">
          <Button variant="primary" href="#cta-final" onClick={() => setMobileMenuOpen(false)}>
            Falar com um especialista
          </Button>
          <Button variant="secondary" href="https://wa.me/5500000000000" onClick={() => setMobileMenuOpen(false)}>
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  )
}
