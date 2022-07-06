import PropTypes from 'prop-types'

/**
 * Displays the first letter of the days of the
 * week as a tick with a custom offset.
 *
 * @param {Object} [props] Properties of the
 * functional component.
 *
 * @param {Number} [props.x=undefined] The position of a
 * tick on the x-axis.
 *
 * @param {Number} [props.y=undefined] The position of a
 * tick on the y-axis.
 *
 * @param {Object} [props.payload=undefined] data useful for
 * tick display.
 *
 * @param {Number} [props.payload.coordinate=undefined]
 * @param {Number} [props.payload.index=undefined] tick index
 * in tick list.
 *
 * @param {Boolean} [props.payload.isShow=undefined] Indicates
 * whether the tick is displayed or not.
 *
 * @param {Number} [props.payload.offset=undefined]
 * The amount of tick shift, relative to others.
 *
 * @param {Number} [props.payload.tickCoord=undefined]
 * The coordinate of the tick on the x-axis.
 *
 * @param {Number} [props.payload.value=undefined] The value
 * of the data represented by the tick.
 *
 * @returns {JSX.Element} A CustomAxisTick component.
 */
function CustomAxisTick({ x, y, payload }) {
  let day = ''
  let xOffset = 0

  switch (payload.value) {
    case 1:
      day = 'L'

      xOffset = x + 12

      break

    case 2:
      day = 'M'

      xOffset = x + 7

      break

    case 3:
      day = 'M'

      xOffset = x + 4

      break

    case 4:
      day = 'J'

      xOffset = x

      break
    case 5:
      day = 'V'

      xOffset = x - 7

      break

    case 6:
      day = 'S'

      xOffset = x - 15

      break

    case 7:
      day = 'D'

      xOffset = x - 19

      break

    default:
      day = null
  }

  return (
    <g transform={`translate(${xOffset}, ${y})`}>
      <text x={0} y={0} fontSize={14} fill="rgba(var(--text-light), 0.5)">
        {day}
      </text>
    </g>
  )
}

CustomAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
}

CustomAxisTick.defaultProps = {
  x: undefined,
  y: undefined,
  payload: undefined,
}

export default CustomAxisTick
