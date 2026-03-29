import React from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import Card from '../ui/Card'
import backgroundCasos from '../../assets/background-casos-reais.webp'

const casos = [
  {
    id: 1,
    categoria: 'Direito Trabalhista',
    titulo: 'Reversão de demissão por justa causa',
    resumo: 'Atuação estratégica que garantiu a reversão da decisão e a preservação dos direitos do cliente.',
    resultados: ['Direitos restabelecidos', 'Indenização concedida']
  },
  {
    id: 2,
    categoria: 'Direito Empresarial',
    titulo: 'Organização contratual e mitigação de risco',
    resumo: 'Revisão estratégica de contratos para reduzir exposição jurídica e aumentar segurança operacional.',
    resultados: ['Risco reduzido', 'Contratos ajustados']
  },
  {
    id: 3,
    categoria: 'Direito Civil',
    titulo: 'Resolução de conflito com acordo favorável',
    resumo: 'Condução precisa do caso até a construção de solução equilibrada e segura para o cliente.',
    resultados: ['Acordo favorável', 'Conflito encerrado']
  }
]

export default function CasosResultados() {
  return (
    <div className="relative w-full bg-bg-primary overflow-hidden border-y border-white/[0.03]">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src={backgroundCasos} 
          alt="Casos Reais Background"
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/0 to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary opacity-60" />
      </div>

      <SectionWrapper id="casos" className="relative z-10 py-[72px] md:py-[120px]">
        <div className="mb-16 md:mb-20 max-w-[700px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="font-mono text-accent uppercase tracking-widest text-sm">Prática Jurídica</span>
          </div>
          <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-text-primary mb-6 leading-tight">
            Casos reais. <br className="hidden md:block" />
            <span className="text-accent">Resultados concretos.</span>
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
            Cada caso é conduzido com estratégia e precisão, sempre buscando o melhor desfecho para nossos clientes com ética e rigor técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {casos.map((caso) => (
            <Card 
              key={caso.id} 
              className="p-8 group cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(184,154,90,0.15)] hover:border-accent/40 bg-bg-surface/60 backdrop-blur-sm"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-accent mb-5">
                / {caso.categoria}
              </div>
              
              <h3 className="font-heading font-bold text-xl md:text-2xl text-text-primary mb-4 leading-snug">
                {caso.titulo}
              </h3>
              
              <p className="font-body text-text-secondary leading-relaxed mb-8">
                {caso.resumo}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {caso.resultados.map((resultado, idx) => (
                  <span 
                    key={idx}
                    className="font-mono text-[11px] uppercase tracking-wider text-text-primary bg-bg-surface border border-accent/20 px-3 py-1.5 rounded-pill"
                  >
                    {resultado}
                  </span>
                ))}
              </div>

              <div className="mt-8 font-body text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                Ver caso completo <span className="text-lg leading-none">→</span>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
