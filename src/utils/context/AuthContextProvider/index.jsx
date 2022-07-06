import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { fakeAuthProvider } from '../../authentication/fakeAuthProvider.js'

export const AuthContext = createContext(null)

/**
 * @param {Object} props - The properties of this
 * component.
 * @param {React.ReactNode} props.children -
 * The child elements of this functional component.
 *
 * @returns {JSX.Element} A AuthContextProvider component
 */
function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)

  /**
   *
   * @param {Object} newUser
   * @param {Number} newUser.id
   * @param {String} newUser.email
   * @param {String} newUser.password
   * @param {CallableFunction} navigateFunction
   *
   * @returns {void}
   */
  const signin = (newUser, navigateFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      navigateFunction()
    })
  }

  /**
   *
   * @param {CallableFunction} navigateFunction
   *
   * @returns {void}
   */
  const signout = (navigateFunction) => {
    return fakeAuthProvider.logout(() => {
      setUser(null)
      navigateFunction()
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AuthContextProvider }
