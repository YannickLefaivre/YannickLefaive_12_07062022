import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { fakeAuthProvider } from '../../authentication/fakeAuthProvider.js'

export const AuthContext = createContext(null)

/**
 * Provides methods to connect and disconnect a
 * user from his account and a state saving his
 * authentication information (id, email and password).
 *
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
   * @param {Object} newUser The data of a newly
   * logged in user.
   *
   * @param {Number} newUser.id
   * @param {String} newUser.email
   * @param {String} newUser.password
   * @param {CallableFunction} callback A callback
   * function that must use the navigate function
   * of React Router DOM to send the user to a
   * private page.
   *
   * @returns {void}
   */
  const signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  /**
   * Log out the user and reset the `user` state to null.
   *
   * @param {CallableFunction} callback A callback
   * function that must use React Router DOM's
   * navigate function to send the user to the login
   * page.
   *
   * @returns {void}
   */
  const signout = (callback) => {
    return fakeAuthProvider.logout(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AuthContextProvider }
