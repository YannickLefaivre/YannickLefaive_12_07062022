import SideNavigationBar from '../../components/SideNavigationBar'
import TopNavigationbar from '../../components/TopNavigationBar'
import Dashboard from '../../components/Dashboard'
import './style.css'

function Profile() {
  return (
    <div className="app-layout">
      <TopNavigationbar />
      <SideNavigationBar />
      <Dashboard />
    </div>
  )
}

export default Profile
