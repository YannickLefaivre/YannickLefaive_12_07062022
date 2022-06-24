import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import * as userMock from '../../__mocks__/userMock.js'
import CustomAxisTick from '../CustomAxisTick/index.jsx'
import CustomTooltip from '../CustomTooltip'
import './style.css'

function DurationSessions() {
  const customXAxisMargin = 19.52

  return (
    <div className="duration-sessions-chart">
      <ResponsiveContainer>
        <AreaChart
          data={userMock.averageSession.sessions}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="sessionLengthColor" x1="1" y1="0" x2="0" y2="0">
              <stop offset="1.19%" stopColor="rgb(var(--text-light))" />
              <stop
                offset="81.79"
                stopColor="rgb(var(--text-light))"
                stopOpacity="0.403191"
              />
            </linearGradient>
          </defs>
          <text
            x={0}
            y={0}
            dominantBaseline="hanging"
            className="duration-sessions-chart__title"
          >
            Durée moyenne des
            <tspan x={0} y={24}>
              sessions
            </tspan>
          </text>
          <XAxis
            axisLine={false}
            dataKey="day"
            height={24 + customXAxisMargin}
            padding={{ left: 14, right: 16 }}
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
          <Area
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
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DurationSessions
