import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { profileDataProvider } from '../../utils/providers.js'
import Header from '../../components/Header'
import DailyActivity from '../../components/DailyActivity'
import DurationSessions from '../../components/DurationSessions'
import TypeOfActivity from '../../components/TypeOfActivity'
import AverageScore from '../../components/AverageScore'
import InfoCard from '../../components/InfoCard'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import './style.css'

function Profile() {
  const [isLoading, setLoading] = useState(true)
  const [profileData, setProfileData] = useState({})
  const [error, setError] = useState(false)

  const { userId } = useParams()

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const data = await profileDataProvider(userId)

        setProfileData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getProfileData()
  }, [])

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
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          profileData.infoCardsData.map((infoCardData, index) => (
            <InfoCard
              key={`key-data-${index}`}
              macronutrientIconURL={infoCardData.macronutrientIconURL}
              macronutrientIconAltText={infoCardData.macronutrientType}
              macronutrientCount={infoCardData.macronutrientCount}
              macronutrientType={infoCardData.macronutrientType}
              measuringUnit={infoCardData.macronutrientMeasuringUnit}
              styleModifier={{
                infoCardIconContainer:
                  infoCardData.macronutrientIconContainerCSSClass,
              }}
            />
          ))
        )}
      </div>
    </main>
  )
}

export default Profile
