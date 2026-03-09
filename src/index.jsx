// index.jsx — Entry point of the React application
// This is the first file that runs when the app starts

import { StrictMode } from 'react'
// StrictMode → special React wrapper that highlights potential problems in development
// Does NOT affect production build — only runs extra checks in dev mode

import { createRoot } from 'react-dom/client'
// createRoot → modern React 18 method to render app into the DOM
// Imported from 'react-dom/client' (not 'react-dom' — that's the old React 17 way)

import App from './App.jsx'
// Imports the root App component — this is the top-level component of your entire app
// All other pages and components are nested inside App

createRoot(document.getElementById('root'))
// document.getElementById('root') → finds the <div id="root"> in index.html
// createRoot() → tells React to take control of that div and manage it

.render(
  // .render() → injects the React component tree into the root div

  <StrictMode>
    <App />

  </StrictMode>
  // Closes StrictMode wrapper
)
// Closes .render() call