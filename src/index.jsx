import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

/**
 * React app entry point to render App component of
 * SportSee application
 *
 * @see https://reactjs.org/docs/react-dom.html#render
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
