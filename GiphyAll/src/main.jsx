import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import { GifContextProvider } from './context/GifContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <GifContextProvider>
        <App />
      </GifContextProvider>
    </AuthContextProvider>
  </StrictMode>
)
