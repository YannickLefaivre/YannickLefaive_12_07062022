function RectangleWithRoundedTopCorner({ fill, x, y, width, height }) {
  return (
    <path
      d={`M${x},${y + 4.5} 
        C${x + 0.5},${y} ${x + width - 0.5},${y} ${x + width},${y + 4.5}
        V${y + height}
        H${x}
        Z`}
      stroke="none"
      fill={fill}
    />
  )
}

export default RectangleWithRoundedTopCorner
