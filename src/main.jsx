import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import App from './App';
import './index.css'

const fetcher = url => fetch(url).then(res => res.json());

ReactDOM.createRoot(document.getElementById('root')).render(
  <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>
)