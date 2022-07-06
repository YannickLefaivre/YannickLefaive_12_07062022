import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { fakeAuthProvider } from '../../authentication/fakeAuthProvider.js'

export const AuthContext = createContext(null)

/**
 * @param {Object} props - The properties of this
 * component.
 *
 * @param {React.ReactNode} props.children -
 * The components that will use the provider's data.
 *
 * @returns {JSX.Element} A AuthContextProvider component.
 */
function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)

  /**
   * Allows you to authenticate a user and save
   * their data in the state `user` in order to use
   * it to remember that they are logged in.
   *
   * @param {Object} newUser The data of a newly logged in user.
   * @param {Number} newUser.id
   * @param {String} newUser.email
   * @param {String} newUser.password
   * @param {import('react-router-dom').NavigateFunction} navigateFunction
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
   * @param {import('react-router-dom').NavigateFunction} navigateFunction
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
