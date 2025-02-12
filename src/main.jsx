import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import RootLayout from './RootLayout/RootLayout.jsx';
import MainRouter from './Router/MainRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  </StrictMode>,
)
