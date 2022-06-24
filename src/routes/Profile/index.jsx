import Header from '../../components/Header'
import DailyActivity from '../../components/DailyActivity'
import DurationSessions from '../../components/DurationSessions'
import TypeOfActivity from '../../components/TypeOfActivity'
import './style.css'

function Profile() {
  return (
    <main className="main-content dashboard">
      <Header />
      <div className="dashboard-user-statistics">
        <DailyActivity />
        <DurationSessions />
        <TypeOfActivity />
      </div>
    </main>
  )
}

export default Profile
