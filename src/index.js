import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FactorProvider } from './contexts/factor/factor-context';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FactorProvider>
      <App />
    </FactorProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();