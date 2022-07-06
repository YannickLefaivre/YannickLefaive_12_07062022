import { Routes, Route } from 'react-router'
import RequireAuth from '../../routes/RequireAuth'
import Login from '../../routes/Login'
import Profile from '../../routes/Profile'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/:userId/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export default Router
