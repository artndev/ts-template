import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/css/index.css'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
