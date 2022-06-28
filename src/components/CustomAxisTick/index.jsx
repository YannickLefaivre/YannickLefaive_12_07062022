function CustomAxisTick({ x, y, payload }) {
  let day = ''

  switch (payload.value) {
    case 1:
      day = 'L'

      break

    case 2:
      day = 'M'

      break

    case 3:
      day = 'M'

      break

    case 4:
      day = 'J'

      break
    case 5:
      day = 'V'

      break

    case 6:
      day = 'S'

      break

    case 7:
      day = 'D'

      break

    default:
      day = null
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <text x={0} y={0} fontSize={14} fill="rgba(var(--text-light), 0.5)">
        {day}
      </text>
    </g>
  )
}

export default CustomAxisTick
