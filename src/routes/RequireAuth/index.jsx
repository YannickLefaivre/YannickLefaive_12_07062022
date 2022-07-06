import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../utils/hooks/useAuth'

/**
 * Checks that a user is logged in before giving
 * them access to a private page.
 *
 * @param {Object} [props] - Properties of the
 * functional component.
 *
 * @param {JSX.Element} [props.children=null] -
 * The child elements of the component.
 *
 * @returns {JSX.Element | null} Component child
 * elements or null value, if the user has not
 * authenticated.
 */
function RequireAuth({ children }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired,
}

RequireAuth.defaultProps = {
  children: null,
}

export default RequireAuth
