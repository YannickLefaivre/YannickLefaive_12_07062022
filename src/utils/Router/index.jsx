import { Routes, Route } from 'react-router'
import RequireAuth from '../../routes/RequireAuth'
import Login from '../../routes/Login'
import Profile from '../../routes/Profile'
import NotFound from '../../routes/NotFound'

/**
 * Depending on the path name of the URL present
 * in the address bar, the component corresponding
 * to a page of the app is rendered. Otherwise, if
 * the URL does not match any configured path name,
 * the 404 error page component is returned instead.
 *
 * Especially, when the user tries to view a page
 * requiring prior authentication. The user is redirected
 * to the login page and once authenticated, it is
 * sent to the page he wanted to see provided that
 * it is a page to which his user account has access.
 *
 * @returns {JSX.Element} A Router component
 */
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
