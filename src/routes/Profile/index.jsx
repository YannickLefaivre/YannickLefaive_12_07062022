import Header from '../../components/Header'
import DailyActivity from '../../components/DailyActivity'
import DurationSessions from '../../components/DurationSessions'
import './style.css'

function Profile() {
  return (
    <main className="main-content dashboard">
      <Header />
      <div className="dashboard-user-statistics">
        <DailyActivity />
        <DurationSessions />
      </div>
    </main>
  )
}

export default Profile
