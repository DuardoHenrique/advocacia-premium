import React from 'react'

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-body font-medium rounded-pill transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] px-6 py-3 text-[14px] md:text-[15px] cursor-pointer'
  
  const variants = {
    primary: 'bg-accent text-bg-primary hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(184,154,90,0.3)]',
    secondary: 'bg-bg-elevated/50 text-text-primary border border-border-soft hover:bg-bg-elevated hover:border-border-strong hover:scale-[1.02]'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
