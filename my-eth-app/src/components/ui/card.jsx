import React from 'react'

export const Card = ({ children, className = '', ...rest }) => (
  <div className={`card ${className}`} {...rest}>
    {children}
  </div>
)

export const CardHeader = ({ children, className = '', ...rest }) => (
  <div className={`card-header ${className}`} {...rest}>{children}</div>
)

export const CardTitle = ({ children, className = '', ...rest }) => (
  <h3 className={`card-title ${className}`} {...rest}>{children}</h3>
)

export const CardContent = ({ children, className = '', ...rest }) => (
  <div className={`card-content ${className}`} {...rest}>{children}</div>
)

export default Card
