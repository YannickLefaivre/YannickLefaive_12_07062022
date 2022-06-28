import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HeaderDataProvider } from '../../utils/providers.js'
import Loader from '../Loader'
import Error from '../Error'
import './style.css'

function Header() {
  const [isLoading, setLoading] = useState(true)
  const [headerData, setHeaderData] = useState({})
  const [error, setError] = useState(false)

  const { userId } = useParams()

  useEffect(() => {
    const getHeaderData = async () => {
      try {
        const data = await HeaderDataProvider(userId)

        setHeaderData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getHeaderData()
  }, [])

  return (
    <header className="header">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <h1 className="header__heading">
            Bonjour{' '}
            <span className="header__heading__highlight">
              {headerData.userFirstName}
            </span>
          </h1>
          <p className="header__subtitle">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
      )}
    </header>
  )
}

export default Header
