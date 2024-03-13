import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import "./styles/App.css"
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="179635082335-0ej5f62rubevs3bpr64a2jkm7ecgfi4f.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);