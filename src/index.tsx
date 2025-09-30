import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Select default App or the CCTP variant via env var
// REACT_APP_VARIANT=cctp will load App.cctp
const App = process.env.REACT_APP_VARIANT === 'cctp'
  ? require('./App.cctp').default
  : require('./App').default;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

