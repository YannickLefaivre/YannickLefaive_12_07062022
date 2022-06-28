import { BrowserRouter } from 'react-router-dom'
import Router from '../utils/Router'
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
