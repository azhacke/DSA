import React from 'react'

export const Alert = ({ children, className = '', ...rest }) => (
  <div className={`alert ${className}`} role="alert" {...rest}>{children}</div>
)

export const AlertTitle = ({ children, className = '', ...rest }) => (
  <div className={`alert-title ${className}`} {...rest}>{children}</div>
)

export const AlertDescription = ({ children, className = '', ...rest }) => (
  <div className={`alert-desc ${className}`} {...rest}>{children}</div>
)

export default Alert
