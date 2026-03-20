import React, { useState } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import { Plus } from 'lucide-react'

const faqItems = [
  {
    q: 'Como funciona o primeiro atendimento?',
    a: 'O atendimento inicial é dedicado à análise do seu caso, entendendo sua situação e orientando sobre os próximos passos.'
  },
  {
    q: 'Preciso ir até o escritório presencialmente?',
    a: 'Não necessariamente. O atendimento pode ocorrer online, com a mesma qualidade, segurança e discrição.'
  },
  {
    q: 'Quais áreas do direito vocês atendem?',
    a: 'Atuamos em diferentes frentes jurídicas, sempre com foco em soluções estratégicas e personalizadas.'
  },
  {
    q: 'Quanto tempo leva para resolver um caso?',
    a: 'O prazo varia conforme a complexidade, mas o acompanhamento é constante e transparente durante todo o processo.'
  },
  {
    q: 'Como posso iniciar meu atendimento?',
    a: 'Basta utilizar o botão de WhatsApp ou o botão de contato com um especialista disponível no site.'
  }
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <SectionWrapper id="faq" className="max-w-[800px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text-primary mb-6">
          Dúvidas comuns sobre nossa atuação
        </h2>
        <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed max-w-[600px] mx-auto">
          Esclarecemos as principais dúvidas para que você tenha segurança ao iniciar seu atendimento.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqItems.map((item, idx) => {
          const isOpen = openIdx === idx

          return (
            <div 
              key={idx}
              className="bg-bg-elevated border border-border-soft rounded-[24px] overflow-hidden transition-colors duration-300 hover:border-border-strong cursor-pointer"
              onClick={() => handleToggle(idx)}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8">
                <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary pr-8">
                  {item.q}
                </h3>
                <div 
                  className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                    isOpen ? 'bg-accent text-bg-primary rotate-45' : 'bg-transparent border border-border-strong text-text-secondary'
                  }`}
                >
                  <Plus size={20} />
                </div>
              </div>

              {/* Body (Animated Height) */}
              <div 
                className={`grid transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="font-body text-text-secondary leading-relaxed px-6 pb-8 md:px-8 max-w-[650px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
