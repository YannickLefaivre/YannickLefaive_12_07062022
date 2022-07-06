import { Routes, Route } from 'react-router'
import RequireAuth from '../../routes/RequireAuth'
import Login from '../../routes/Login'
import Profile from '../../routes/Profile'
import NotFound from '../../routes/NotFound'

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
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
