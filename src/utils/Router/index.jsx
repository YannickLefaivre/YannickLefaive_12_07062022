import { Routes, Route } from 'react-router'
import Profile from '../../routes/Profile'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  )
}

export default Router
