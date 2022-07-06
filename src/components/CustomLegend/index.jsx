import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

/**
 * Displays a custom legend whose content consists
 * of items passed to the prop children.
 *
 * Note:
 *  Apart from the container of child elements,
 *  child elements can have their own style.
 *
 * @param {Object} props Properties of the
 * functional component.
 *
 * @param {React.ReactNode[]} [props.children=<ul><li>Insérer le contenu de la légende en tant qu'enfant du Composant CustomLegend.</li></ul>]
 * The contents of the legend represent by an unordered list.
 *
 * @returns {JSX.Element} A CustomLegend component.
 */
function CustomLegend({ children }) {
  return <ul className="custom-legend">{children}</ul>
}

CustomLegend.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

CustomLegend.defaultProps = {
  children: (
    <ul>
      <li>
        Insérer le contenu de la légende en tant qu'enfant du Composant
        CustomLegend.
      </li>
    </ul>
  ),
}

export default CustomLegend
