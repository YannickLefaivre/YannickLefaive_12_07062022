import PropTypes from 'prop-types'
import './style.css'

function CustomTooltip({ payload, active, styleModifier, valueUnitCallback }) {
  const whiteSpace = ' '

  if (active && payload && payload.length) {
    return (
      <ul
        className={`custom-tooltip${
          styleModifier !== null
            ? `${whiteSpace}${styleModifier.customTooltipContainer}`
            : ''
        }`}
      >
        {payload.map((entry, index) => (
          <li
            key={`${entry.name}-${index}`}
            className={`custom-tooltip__label${
              styleModifier !== null
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
  styleModifier: PropTypes.object,
  valueUnitCallback: PropTypes.PropTypes.func.isRequired,
}

CustomTooltip.defaultProps = {
  payload: [],
  active: false,
  styleModifier: null,
  valueUnitCallback: () => '',
}

export default CustomTooltip
