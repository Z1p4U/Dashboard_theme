import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
      <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        breakpoints: {
          xs: '30em',
          sm: '48em',
          md: '64em',
          lg: '74em',
          xl: '90em',
        },
      }}>
      <App />
      </MantineProvider>
      </BrowserRouter>
    </Provider>
,
)
