import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainContentHeaderDataProvider } from '../../utils/providers.js'
import Loader from '../Loader'
import Error from '../Error'
import './style.css'

function MainContentHeader() {
  const [isLoading, setLoading] = useState(true)
  const [mainContentHeader, setMainContentHeaderData] = useState({})
  const [error, setError] = useState(false)

  const { userId } = useParams()

  useEffect(() => {
    const getMainContentHeaderData = async () => {
      try {
        const data = await mainContentHeaderDataProvider(userId)

        setMainContentHeaderData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getMainContentHeaderData()
  }, [])

  return (
    <header className="main-content-header">
      {isLoading ? (
        <Loader>
          <p>Chargement des données de la page...</p>
        </Loader>
      ) : error ? (
        <Error />
      ) : (
        <div>
          <h1 className="main-content-header__heading">
            Bonjour{' '}
            <span className="main-content-header__heading__highlight">
              {mainContentHeader.userFirstName}
            </span>
          </h1>
          <p className="main-content-header__subtitle">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
      )}
    </header>
  )
}

export default MainContentHeader
