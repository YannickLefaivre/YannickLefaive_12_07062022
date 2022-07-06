import SideNavigationMenu from '../../components/SideNavigationMenu'
import TopNavigationMenu from '../../components/TopNavigationMenu'
import Dashboard from '../../components/Dashboard'
import './style.css'

/**
 * Displays a page consisting of two navigation
 * bars (top and side) and a slightly off-centered
 * dashboard.
 *
 * @returns {JSX.Element} A Profile component
 */
function Profile() {
  return (
    <div className="app-layout">
      <TopNavigationMenu />
      <SideNavigationMenu />
      <Dashboard />
    </div>
  )
}

export default Profile
