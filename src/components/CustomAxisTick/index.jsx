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

export default CustomAxisTick
