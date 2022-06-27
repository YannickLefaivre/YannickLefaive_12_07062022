import { profileData } from '../../__mocks__/profileData.js'
import Header from '../../components/Header'
import DailyActivity from '../../components/DailyActivity'
import DurationSessions from '../../components/DurationSessions'
import TypeOfActivity from '../../components/TypeOfActivity'
import AverageScore from '../../components/AverageScore'
import InfoCard from '../../components/InfoCard'
import './style.css'

function Profile() {
  return (
    <main className="main-content dashboard">
      <Header />
      <div className="dashboard-user-statistics">
        <DailyActivity />
        <DurationSessions />
        <TypeOfActivity />
        <AverageScore />
      </div>
      <div className="dashboard__key-infos">
        {profileData.map((profile, index) => (
          <InfoCard
            key={`key-data-${index}`}
            macronutrientIconURL={profile.macronutrientIconURL}
            macronutrientIconAltText={profile.macronutrientType}
            macronutrientCount={profile.macronutrientCount}
            macronutrientType={profile.macronutrientType}
            measuringUnit={profile.measuringUnit}
            styleModifier={{
              infoCardIconContainer: profile.macronutrientIconContainerCSSClass,
            }}
          />
        ))}
      </div>
    </main>
  )
}

export default Profile
