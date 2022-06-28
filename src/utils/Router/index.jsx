import { Routes, Route } from 'react-router'
import Profile from '../../routes/Profile'

function Router() {
  return (
    <Routes>
      <Route path="/:userId" element={<Profile />} />
    </Routes>
  )
}

export default Router
