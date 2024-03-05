import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import "./styles/App.css"
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);