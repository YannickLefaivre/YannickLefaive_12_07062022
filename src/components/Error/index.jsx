import PropTypes from 'prop-types'
import './style.css'

/**
 * Display an error message.
 *
 * @param {Object} [props] - The function component Props.
 * @param {String} [props.type="Erreur"] - The type of error.
 * @param {String} [props.message="Une erreur est survenue lorsque nous avons tenté d'afficher les informations que vous voulez consulter. Recharger la page pourrait vous permettre de voir de nouveau ces informations."] - Error message displayed.
 *
 * @returns {JSX.Element} The Error component.
 */
function Error({ type, message }) {
  return (
    <div className="Error">
      <h1>{type}</h1>
      <p className="Error__explanation">{message}</p>
    </div>
  )
}

Error.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

Error.defaultProps = {
  type: 'Erreur',
  message:
    "Une erreur est survenue lorsque nous avons tenté d'afficher les informations que vous voulez consulter. Recharger la page pourrait vous permettre de voir de nouveau ces informations.",
}

export default Error
