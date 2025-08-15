import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRoutes from './router/AppRoutes'
import { LayoutProvider } from './context/LayoutContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LayoutProvider>
        <AppRoutes />
      </LayoutProvider>
    </BrowserRouter>
  </StrictMode>,
)
