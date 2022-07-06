import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { durationSessionsDataProvider } from '../../utils/providers.js'
import CustomAxisTick from '../CustomAxisTick/index.jsx'
import CustomTooltip from '../CustomTooltip'
import Loader from '../Loader'
import Error from '../Error'
import './style.css'

/**
 * Displays the average session time of a auhtenticate
 * user. A tooltip appears when hovering over.
 *
 * @credits I was able to reproduce the visual
 * effect that appears when hovering over the line
 * chart when the tooltip is active by understanding
 * and following a tip that was shared by another
 * student on OpenClassrooms Workplace.
 *
 *
 * @returns {JSX.Element} A DurationSessions component
 */
function DurationSessions() {
  const [isLoading, setLoading] = useState(true)
  const [durationSessionsData, setDurationSessionsData] = useState([])
  const [error, setError] = useState(false)

  const { userId } = useParams()

  const customXAxisMargin = 19.52

  const displayTheVisualEffect = (e) => {
    const durationSessionsChart = document.querySelector(
      '.duration-sessions-chart'
    )

    if (e.isTooltipActive === true) {
      const lineChart = document.querySelector(
        '.duration-sessions-chart__line-chart'
      )
      const lineChartWidth = lineChart.clientWidth

      const colorStopPourcentage = (e.activeCoordinate.x / lineChartWidth) * 100

      durationSessionsChart.style.backgroundImage = `linear-gradient(90deg, rgba(var(--primary-color), 1) ${colorStopPourcentage}%, rgba(var(--primary-color-alternate-dark), 1.5) ${colorStopPourcentage}%, rgba(var(--primary-color-alternate-dark), 1.5) 100%)`
    } else {
      durationSessionsChart.style.backgroundImage = null
    }
  }

  useEffect(() => {
    const getDurationSessionsData = async () => {
      try {
        const data = await durationSessionsDataProvider(userId)

        setDurationSessionsData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getDurationSessionsData()
  }, [])

  return (
    <div className="duration-sessions-chart">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <ResponsiveContainer>
          <LineChart
            className="duration-sessions-chart__line-chart"
            onMouseMove={(e) => displayTheVisualEffect(e)}
            data={durationSessionsData.durationOfUserSessions}
            margin={{ top: 77.52, left: 0, bottom: 16, right: 0 }}
          >
            <defs>
              <linearGradient
                id="sessionLengthColor"
                x1="1"
                y1="0"
                x2="0"
                y2="0"
              >
                <stop offset="1.19%" stopColor="rgb(var(--text-light))" />
                <stop
                  offset="81.79"
                  stopColor="rgb(var(--text-light))"
                  stopOpacity="0.403191"
                />
              </linearGradient>
            </defs>
            <text
              x={34}
              y={29}
              dominantBaseline="hanging"
              className="duration-sessions-chart__title"
            >
              Durée moyenne des
              <tspan x={34} y={29 + 24}>
                sessions
              </tspan>
            </text>
            <XAxis
              axisLine={false}
              dataKey="day"
              height={15 + customXAxisMargin}
              interval="preserveStartEnd"
              tick={<CustomAxisTick />}
              tickLine={false}
              tickMargin={customXAxisMargin}
            />
            <Tooltip
              content={
                <CustomTooltip
                  styleModifier={{
                    customTooltipContainer: 'custom-tooltip--line-chart',
                    customTooltipLabel: 'custom-tooltip__label--line-chart',
                  }}
                  valueUnitCallback={() => ' min'}
                />
              }
            />
            <Line
              activeDot={{
                fill: 'rgb(var(--text-light))',
                strokeWidth: 10,
                stroke: 'rgba(var(--text-light))',
                strokeOpacity: '0.198345',
              }}
              dot={false}
              dataKey="sessionLength"
              fill="url(#sessionLengthColor)"
              legendType="none"
              stroke="url(#sessionLengthColor)"
              strokeWidth={1.8}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default DurationSessions
