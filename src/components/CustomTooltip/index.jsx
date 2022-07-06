import PropTypes from 'prop-types'
import './style.css'

/**
 * A callback function that returns the unit of
 * measure of a data in string.
 *
 * @callback ValueUnitCallback
 * @param {String} payloadName - The name of the
 * data used to evaluate the unit of measurement
 * to be returned.
 *
 * @return {String} the unit of the payload value.
 *
 */

/**
 * Displays the contents of a tooltip.
 *
 * The component user can change the style of its
 * various elements by entering a style modifier
 * property representing an object with properties
 * whose values correspond to BEM CSS class modifiers.
 *
 * *example: custom-tooltip--the-name-of-your-modifier*
 *
 * @param {Object} props Properties of the
 * functional component.
 *
 * @param {Array} props.payload Data useful for
 * displaying the content of the tooltip.
 *
 * @param {Boolean} props.active Lets you know if
 * the tooltip appears or not.
 *
 * @param {ValueUnitCallback} [props.valueUnitCallback=() => '']
 * the callback function to be performed to obtain
 * the unit of measurement of a data.
 *
 * @param {Object} [props.styleModifier=null]
 * Allows you to add one or more BEM-type modifier
 * CSS classes to customize the style of the
 * elements making up the component.
 *
 * @param {String} [props.styleModifier.customTooltipContainer=undefined]
 * Allows you to change the style of the tooltip
 * item container.
 *
 * @param {String} [props.styleModifier.customTooltipLabel=undefined]
 * Allows you to change the style of a label.
 *
 *
 * @returns {JSX.Element | null} A CustomTooltip component.
 */
function CustomTooltip({ payload, active, valueUnitCallback, styleModifier }) {
  const whiteSpace = ' '

  if (active && payload && payload.length) {
    return (
      <ul
        className={`custom-tooltip${
          styleModifier && styleModifier.customTooltipContainer
            ? `${whiteSpace}${styleModifier.customTooltipContainer}`
            : ''
        }`}
      >
        {payload.map((entry, index) => (
          <li
            key={`${entry.name}-${index}`}
            className={`custom-tooltip__label${
              styleModifier && styleModifier.customTooltipLabel
                ? `${whiteSpace}${styleModifier.customTooltipLabel}`
                : ''
            }`}
          >{`${entry.value}${valueUnitCallback(entry.name)}`}</li>
        ))}
      </ul>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  payload: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
  valueUnitCallback: PropTypes.PropTypes.func.isRequired,
  styleModifier: PropTypes.object,
}

CustomTooltip.defaultProps = {
  payload: [],
  active: false,
  valueUnitCallback: () => '',
  styleModifier: null,
}

export default CustomTooltip
