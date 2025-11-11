import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Load shims before App so globals like __reactCodeManager and ReactCode exist
import './shims'

import App from './MinimalApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
