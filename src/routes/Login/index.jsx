import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../utils/hooks/useAuth/index.jsx'
import './style.css'

/**
 * Displays the login page. When the user fills in
 * the field "Adresse e-mail" (using one of the
 * following two e-mail addresses: cecilia@test.fr
 * or karl@test.fr) and "Mot de passe" then it is sent
 * to his dashboard page.
 *
 * @returns {JSX.Element} A Login component
 */
function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const emailEntered = formData.get('email')

    const userOne = { id: 18, email: 'cecilia@test.fr' }
    const userTwo = { id: 12, email: 'karl@test.fr' }

    const currentUserId =
      userOne.email === emailEntered ? userOne.id : userTwo.id

    const pathname = location.state?.from?.pathname || '/'

    const doesThePathnameContainTheIdOf = (userEmail) => {
      return pathname.includes(userEmail) !== false
    }

    const getPreviousLocation = () => {
      return doesThePathnameContainTheIdOf(userOne)
        ? pathname
        : doesThePathnameContainTheIdOf(userTwo)
        ? pathname
        : `/${currentUserId}/profile`
    }

    const from = getPreviousLocation()

    if (!userOne.email && !userTwo.email) {
      console.info(
        'You must enter one of the following two email addresses: cecilia@test.fr or karl@test.fr. They are linked to the two simulated user IDs in the application API, 12 and 18, respectively.'
      )

      return
    }

    const response = await axios.get(
      `http://localhost:3000/user/${currentUserId}`
    )

    if (response.status === 404 || response.data === null) {
      console.error('The simulated call to GET User failed.')

      return
    }

    const currentUser = {
      id: currentUserId,
      email: formData.get('email'),
      password: formData.get('password'),
    }

    if (!currentUser.id) {
      navigate('/login', location)

      return
    }

    auth.signin(currentUser, () => navigate(from, { replace: true }))
  }

  return (
    <div className="login">
      <header className="login__header">
        <h1 className="login__header__heading">Connexion</h1>
        <p className="login__header__greetings">
          Bon retour parmi nous ! Es-tu prêt(e) à surmonter de nouveaux défis ?
        </p>
      </header>

      <form
        className="login__form"
        id="login-form"
        method="GET"
        onSubmit={handleSubmit}
      >
        <div className="login__form__data">
          <label className="login__form__data__label" htmlFor="email-address">
            Adresse e-mail *
          </label>
          <input
            className="login__form__data__field"
            type="email"
            name="email"
            id="email"
            required
            placeholder="jean.dupont@gmail.com"
          />
        </div>

        <div className="login__form__data">
          <label className="login__form__data__label" htmlFor="password">
            Mot de passe *
          </label>
          <input
            className="login__form__data__field"
            type="password"
            name="password"
            id="password"
            required
            autoComplete="currentPassword"
          />
        </div>

        <button className="login__form__button" type="submit">
          Se connecter
        </button>
      </form>

      <footer className="login__footer">
        <p className="login__footer__copyright">Copyright, SportSee 2020</p>
      </footer>
    </div>
  )
}

export default Login
