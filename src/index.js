import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './components/Context';
import { BrowserRouter as Router } from 'react-router-dom';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <Router>
      <App/>
    </Router>
    </AppProvider>
  </React.StrictMode>,
);

