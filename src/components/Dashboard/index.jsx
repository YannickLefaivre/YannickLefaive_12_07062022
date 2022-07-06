import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dashboardDataProvider } from '../../utils/providers.js'
import MainContentHeader from '../../components/MainContentHeader'
import DailyActivity from '../../components/DailyActivity'
import DurationSessions from '../../components/DurationSessions'
import TypeOfActivity from '../../components/TypeOfActivity'
import AverageScore from '../../components/AverageScore'
import InfoCard from '../../components/InfoCard'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import './style.css'

function Dashboard() {
  const [isLoading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState({})
  const [error, setError] = useState(false)

  const { userId } = useParams()

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const data = await dashboardDataProvider(userId)

        setDashboardData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getDashboardData()
  }, [])

  return (
    <main className="app-layout__main-content dashboard">
      <MainContentHeader />
      <div className="dashboard-user-statistics">
        <DailyActivity />
        <DurationSessions />
        <TypeOfActivity />
        <AverageScore />
      </div>
      <div className="dashboard__key-infos">
        {isLoading ? (
          <Loader>
            <p>Chargement des données de la page...</p>
          </Loader>
        ) : error ? (
          <Error />
        ) : (
          dashboardData.infoCardsData.map((infoCardData, index) => (
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

export default Dashboard
