import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './assets/CSS/index.css'
import './assets/CSS/App.css'
import './assets/CSS/btn_setting.css'
import './assets/CSS/modal.css'
import './assets/CSS/list_task.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </StrictMode>
)
