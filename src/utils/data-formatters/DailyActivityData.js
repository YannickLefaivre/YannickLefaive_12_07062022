import FormatString from './FormatString.js'

/**
 * A class that formats a user’s daily activity
 * data to be displayed as a BarChart via the
 * DailyActivity component. The class essentially
 * removes the information concerning the month and
 * year of the realization of an activity session,
 * to keep only the day which is displayed as tick
 * on the x-axis.
 */
class DailyActivityData {
  /**
   * Information about an activity session,
   * including the date of the session, the user’s
   * weight and calories burned.
   *
   * @typedef {Object} Sessions
   * @property {String} Sessions.day The day of a session.
   * @property {Number} Sessions.kilogram The weight of the user.
   * @property {Number} Sessions.calories The burnt calories.
   */

  /**
   * @param {Sessions[]} sessions The list of user activity sessions.
   */
  constructor(sessions) {
    this.userActivitySessions = this.removeMonthAndYearNumberFrom(sessions)
  }

  /**
   * Removes references to the month and year of a
   * session in the value of the day property of
   * the session parameter.
   *
   * @param {Sessions[]} sessions The list of user
   * activity sessions to be formatted.
   *
   * @returns {Sessions[]}
   */
  removeMonthAndYearNumberFrom = (sessions) => {
    const sessionsWithoutYearAndMonthNumberInDayProp = sessions.map(
      (session) => {
        session.day = FormatString.retrieveDayNumber(session.day)

        return session
      }
    )

    return sessionsWithoutYearAndMonthNumberInDayProp
  }
}

export default DailyActivityData
