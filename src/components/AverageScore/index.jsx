import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import { averageScoreDataProvider } from '../../utils/providers.js'
import Error from '../Error'
import Loader from '../Loader'
import './style.css'

/**
 * Displays a radial bar type chart indicating the
 * user’s completion level in achieving their daily goal.
 *
 * @return {JSX.Element} A AverageScore component.
 */
function AverageScore() {
  const [isLoading, setLoading] = useState(true)
  const [averageScoreData, setAverageScoreData] = useState([])
  const [error, setError] = useState(false)

  const { userId } = useParams()

  useEffect(() => {
    const getAverageScoreData = async () => {
      try {
        const data = await averageScoreDataProvider(userId)

        setAverageScoreData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getAverageScoreData()
  }, [])

  return (
    <div className="average-score-chart">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <ResponsiveContainer>
          <RadialBarChart
            width={159.38}
            height={159.38}
            startAngle={0}
            endAngle={averageScoreData[0].score}
            innerRadius={87}
            outerRadius={87}
            barSize={10}
            data={averageScoreData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <text
              x={0}
              y="2.5%"
              dominantBaseline="hanging"
              fontSize={14}
              fontWeight={500}
            >
              Score
            </text>
            <text textAnchor="middle" fontSize={16} fontWeight={500}>
              <tspan x="50%" y="50%" fontSize={26} fontWeight="bold">
                {`${averageScoreData[0].score}%`}
              </tspan>
              <tspan x="50%" y="62.5%">
                de votre
              </tspan>
              <tspan x="50%" y="74%">
                objectif
              </tspan>
            </text>
            <RadialBar
              dataKey="score"
              label={false}
              name="Daily goal"
              cornerRadius={5}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default AverageScore
