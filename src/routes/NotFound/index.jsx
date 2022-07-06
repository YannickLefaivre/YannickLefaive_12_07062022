import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../utils/hooks/useAuth'
import TopNavigationMenu from '../../components/TopNavigationMenu'
import SideNavigationMenu from '../../components/SideNavigationMenu'
import Error from '../../components/Error'
import './style.css'

/**
 * Displays a 404 error page with a link to return
 * to the login page, or profile page, if the user
 * had already logged in before arriving at that
 * page.
 *
 * @returns {JSX.Element} A NotFound component
 */
function NotFound() {
  const auth = useAuth()
  const location = useLocation()
  const pathname = location.state?.from?.pathname || '/'

  let redirectionText = 'retourner à la page de connexion'

  if (auth.user) {
    redirectionText = 'retourner à la page de profil'
  }

  return (
    <div className="app-layout">
      <TopNavigationMenu />
      <SideNavigationMenu
        styleModifier={{ logoutForm: 'navigation-bar__logout-form--not-found' }}
      />
      <Error
        type="Erreur 404"
        message="Oups ! Il n'y a rien ici"
        styleModifier={{
          errorContainer: 'app-layout__main-content error--not-found',
          typeOfError: 'error__type--not-found',
          errorMessage: 'error__message--not-found',
        }}
      >
        <Link
          className="not-found__back-link"
          to={
            redirectionText.includes('profil') &&
            pathname.includes('/12/profile')
              ? '/12/profile'
              : pathname.includes('/18/profile')
              ? '/18/profile'
              : '/login'
          }
        >
          {redirectionText}
        </Link>
      </Error>
    </div>
  )
}

export default NotFound
