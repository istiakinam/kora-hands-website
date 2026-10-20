import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Keep placeholder links (href="#") from jumping to the home route under hash routing
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest('a')
  if (a && a.getAttribute('href') === '#') e.preventDefault()
})
