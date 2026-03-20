import React from 'react'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section 
      id={id} 
      className={`py-[72px] md:py-[96px] px-[20px] md:px-[32px] max-w-container mx-auto w-full relative ${className}`}
    >
      {children}
    </section>
  )
}
