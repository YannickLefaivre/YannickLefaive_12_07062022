import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'

/**
 * Get user authentication context.
 *
 * @returns {React.Context}
 */
export function useAuth() {
  return useContext(AuthContext)
}
