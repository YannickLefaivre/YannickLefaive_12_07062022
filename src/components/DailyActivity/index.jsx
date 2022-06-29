import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { DailyActivityDataProvider } from '../../utils/providers.js'
import CustomLegend from '../CustomLegend'
import CustomTooltip from '../CustomTooltip'
import Loader from '../Loader'
import Error from '../Error'
import './style.css'

/**
 *
 * Attribution:
 *  I learned how to integrate the chart title by follow
 *  the last solution given on the following
 *  [GitHub issue](https://github.com/recharts/recharts/issues/478)
 *
 * @returns
 */
function DailyActivity() {
  const [isLoading, setLoading] = useState(true)
  const [dailyActivityData, setDailayActivityData] = useState([])
  const [error, setError] = useState(false)

  const { userId } = useParams()

  const customTickMargin = {
    xAxisTickMargin: 15.5,
    yAxisTickMargin: 44.5,
  }

  useEffect(() => {
    const getDailyActivityData = async () => {
      try {
        const data = await DailyActivityDataProvider(userId)

        setDailayActivityData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getDailyActivityData()
  }, [])

  return (
    <div className="daily-activity-chart">
      {isLoading ? (
        <Loader>
          <p>Chargement des données de la page...</p>
        </Loader>
      ) : error ? (
        <Error />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dailyActivityData.userActivitySessions}
            margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
            barCategoryGap={7}
            barGap={8}
            barSize={7}
          >
            <text
              x={0}
              y={0}
              dominantBaseline="hanging"
              className="daily-activity-chart__title"
            >
              <tspan fontSize="15">Activité quotidienne</tspan>
            </text>
            <Legend
              height={65}
              wrapperStyle={{ display: 'flex', justifyContent: 'flex-end' }}
              verticalAlign="top"
              content={
                <CustomLegend>
                  {[...Array(2)].map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="custom-legend__item"
                    >
                      <svg
                        className={
                          index === 0
                            ? 'custom-legend__item__icon'
                            : 'custom-legend__item__icon--calories'
                        }
                        viewBox="0 0 100 100"
                        width={8}
                        height={8}
                        fill="currentColor"
                      >
                        <circle cx={50} cy={50} r={50} />
                      </svg>
                      <span className="custom-legend__item__text">
                        {index === 0 ? 'Poids (kg)' : 'Calories brulées (kCal)'}
                      </span>
                    </li>
                  ))}
                </CustomLegend>
              }
            />
            <CartesianGrid
              vertical={false}
              strokeDasharray={3}
              stroke={'rgba(var(--daily-activity-line-color), 1)'}
            />
            <XAxis
              dataKey="day"
              height={24 + customTickMargin.xAxisTickMargin}
              tick={{
                fontSize: 'var(--desktop-font-size-14px-in-rem)',
                stroke: 'rgb(var(--daily-activity-chart-tick-color))',
                strokeWidth: 0.1,
              }}
              tickLine={false}
              tickMargin={customTickMargin.xAxisTickMargin}
            />
            <YAxis
              orientation="right"
              width={43 + customTickMargin.yAxisTickMargin}
              axisLine={false}
              tick={{
                fontSize: 'var(--desktop-font-size-14px-in-rem)',
                stroke: 'rgba(var(--daily-activity-chart-tick-color))',
                strokeWidth: 0.1,
              }}
              tickLine={false}
              tickMargin={customTickMargin.yAxisTickMargin}
            />
            <Tooltip
              cursor={{
                fill: 'rgba(var(--daily-activity-chart-cursor-background-color)',
              }}
              content={
                <CustomTooltip
                  valueUnitCallback={(payloadName) =>
                    payloadName === 'kilogram' ? 'kg' : 'kCal'
                  }
                />
              }
              filterNull
            />
            <Bar
              dataKey="kilogram"
              fill="rgb(var(--secondary-color))"
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="rgb(var(--primary-color-alternate-light))"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default DailyActivity
