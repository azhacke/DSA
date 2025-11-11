import React from 'react'

export const CitationLink = ({ id, citations = window.citations || {}, children }) => {
  const c = citations && citations[id]
  if (!c) return children ? children : null
  return (
    <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      {children || c.title}
    </a>
  )
}

export default CitationLink
