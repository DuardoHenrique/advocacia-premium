import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#07070A] pt-20 pb-10 px-6 md:px-12 rounded-t-[40px] mt-12 border-t border-border-soft">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

        {/* Bloco Marca */}
        <div className="md:col-span-1">
          <h2 className="font-display text-2xl italic font-bold mb-4">Advocacia Premium</h2>
          <p className="font-body text-text-secondary text-sm leading-relaxed max-w-[250px]">
            Defesa jurídica com rigor e excelência.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Navegação</h3>
          <ul className="flex flex-col gap-3">
            {['Atuação', 'Equipe', 'Resultados', 'FAQ', 'Mapa'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="font-body text-text-secondary text-sm hover:text-text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Legais */}
        <div>
          <h3 className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Legal</h3>
          <ul className="flex flex-col gap-3">
            {['Privacidade', 'Termos de uso', 'Aviso legal'].map((item) => (
              <li key={item}>
                <a href="#" className="font-body text-text-secondary text-sm hover:text-text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Status System */}
        <div>
          <h3 className="font-mono text-accent text-xs uppercase tracking-widest mb-6">Sistemas</h3>
          <div className="flex items-center gap-3 bg-bg-surface border border-border-soft rounded-pill px-4 py-3 w-max">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-mono text-text-primary text-xs">
              Agende sua consulta
            </span>
          </div>
        </div>

      </div>

      <div className="max-w-container mx-auto pt-8 border-t border-border-soft flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-text-muted text-xs text-center md:text-left">
          © {new Date().getFullYear()} Advocacia Paul Goodman. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
