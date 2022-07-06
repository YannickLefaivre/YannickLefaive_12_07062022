import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../utils/context/AuthContextProvider'
import Router from '../utils/Router'
import './style.css'

/**
 * Representing the SportSee application, the App
 * component enables its functionality: routing,
 * providing the authentication context and giving
 * a basis for the width taken by the app on the
 * screen.
 *
 * @returns {JSX.Element} A App component
 */
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="app">
          <Router />
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
