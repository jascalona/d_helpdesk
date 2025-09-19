import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/CSS/index.css'
import './assets/CSS/App.css'
import './assets/CSS/notification.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
