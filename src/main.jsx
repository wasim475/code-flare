import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import RootLayout from './RootLayout/RootLayout.jsx';
import MainRouter from './Router/MainRouter';
import { Provider } from 'react-redux';
import store from './store/store.js';
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <MainRouter/>
      <Toaster/>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
