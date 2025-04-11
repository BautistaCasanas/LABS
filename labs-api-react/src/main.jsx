import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //Aca renderiza los componentes 
  <StrictMode>
    <App />
  </StrictMode>,
)
