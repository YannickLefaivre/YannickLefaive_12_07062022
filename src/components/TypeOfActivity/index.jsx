import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts'
import { typeOfActivityDataProvider } from '../../utils/providers.js'
import Loader from '../Loader'
import Error from '../Error'
import './style.css'

/**
 * @credits the accepted answer of the linked
 * url lead me to learn, with MDN Docs, how to
 * better detect and iterate on object properties
 * and therefore succeed to format the kind prop of the
 * objects of the typeOfActivityData array.
 *
 * @see https://stackoverflow.com/questions/46059200/compare-two-objects-properties-in-js
 *
 * @returns {JSX.Element} A TypeOfActivity component.
 */
function TypeOfActivity() {
  const [isLoading, setLoading] = useState(true)
  const [typeOfActivityData, setTypeOfActivityData] = useState([])
  const [error, setError] = useState(false)

  const { userId } = useParams()

  useEffect(() => {
    const getTypeOfActivityData = async () => {
      try {
        const data = await typeOfActivityDataProvider(userId)

        setTypeOfActivityData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getTypeOfActivityData()
  }, [])

  return (
    <div className="type-of-activity-chart">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <ResponsiveContainer>
          <RadarChart
            width={180}
            height={180}
            outerRadius={70}
            data={typeOfActivityData.userPerformance}
            margin={{ top: 0, left: 0, bottom: 0, right: 0 }}
          >
            <PolarGrid stroke="rgb(var(--text-light))" radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tickLine={false}
              tick={{
                dy: 4,
                fill: 'rgb(var(--text-light))',
                fontSize: 12,
              }}
            />
            <Radar
              name="performance"
              dataKey="value"
              fill="#FF0101"
              fillOpacity="0.7"
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default TypeOfActivity
