import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const GlobalStyles = () => (
  <style>
    {`
      .MuiAppBar-root {
        background-color: #FFFFFF !important;
      }
    `}
  </style>
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </StrictMode>,
)
