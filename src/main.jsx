import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import RootLayout from './RootLayout/RootLayout.jsx';
import MainRouter from './Router/MainRouter';
import { Provider } from 'react-redux';
import store from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
