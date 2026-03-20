import React, { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Aparecer após passar o primeiro fold (hero)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[9000] flex items-center gap-2 px-4 py-3 rounded-pill glass-strong text-text-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 hover:shadow-[0_0_15px_rgba(184,154,90,0.2)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px] pointer-events-none'
      }`}
    >
      <MessageCircle size={22} className="text-[#25D366]" />
      <span className="hidden md:inline font-body font-medium text-[14px]">
        WhatsApp
      </span>
    </a>
  )
}
