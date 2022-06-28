import axios from 'axios'
import HeaderData from './data-formatters/HeaderData.js'
import DailyActivityData from './data-formatters/DailyActivityData.js'
import DurationSessionsData from './data-formatters/DurationSessionsData.js'

/**
 * Display a message in the console to warn that the HTTP call ended with an error.
 *
 * @param {Error} error - The error object returned from a failed call to fetch.
 */
const warnThatHTTPCallFailed = (error) => {
  console.error('detailed information about the HTTP call failure.', error)
}

/**
 *
 * @param {Number} userId
 *
 * @return {Promise<HeaderData | undefined>}
 */
export async function HeaderDataProvider(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`)
    const userInfos = response.data.data.userInfos

    const headerData = new HeaderData(userInfos)

    return headerData
  } catch (error) {
    warnThatHTTPCallFailed(error)
  }
}

/**
 *
 * @param {Number} userId
 *
 * @return {Promise<DailyActivityData | undefined>}
 */
export async function DailyActivityDataProvider(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/activity`
    )
    const userActivitySessions = response.data.data.sessions

    const dailyActivityData = new DailyActivityData(userActivitySessions)

    return dailyActivityData
  } catch (error) {
    warnThatHTTPCallFailed(error)
  }
}

/**
 *
 * @param {Number} userId
 *
 * @return {Promise<DurationSessionsData | undefined>}
 */
export async function durationSessionsDataProvider(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    )
    const userAverageSessions = response.data.data.sessions

    const durationSessionsData = new DurationSessionsData(userAverageSessions)

    return durationSessionsData
  } catch (error) {
    warnThatHTTPCallFailed(error)
  }
}
