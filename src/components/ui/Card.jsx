import React from 'react'

export default function Card({ children, className = '', glass = false, strongGlass = false }) {
  let baseClasses = 'rounded-default border overflow-hidden relative'
  
  if (glass) {
    baseClasses += ' glass border-border-soft'
  } else if (strongGlass) {
    baseClasses += ' glass-strong border-border-soft'
  } else {
    baseClasses += ' bg-bg-elevated border-border-soft/50'
  }
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  )
}
