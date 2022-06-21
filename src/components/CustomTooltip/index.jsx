import './style.css'

function CustomTooltip({ payload, active }) {
  if (active && payload && payload.length) {
    return (
      <ul className="custom-tooltip">
        {payload.map((entry, index) => (
          <li
            key={`${entry.name}-${index}`}
            className="custom-tooltip__label"
          >{`${entry.value}${entry.name === 'kilogram' ? 'kg' : 'kCal'}`}</li>
        ))}
      </ul>
    )
  }

  return null
}

export default CustomTooltip
