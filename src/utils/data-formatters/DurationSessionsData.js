/**
 * A class that formats session time data so that
 * it can be used by the DurationSessions component
 * and displayed by it as a LineChart.
 */
class DurationSessionsData {
  /**
   * The length of a session on a given day.
   *
   * @typedef {Object} DurationOfUserSession
   * @property {Number} day The day of the session.
   * @property {Number} sessionLength The length
   * (duration) of the session.
   */

  /**
   *
   * @param {DurationOfUserSession[]} durationOfSessions
   * A list of data on the length of sessions per day.
   */
  constructor(durationOfSessions) {
    this.durationOfUserSessions = durationOfSessions
  }
}

export default DurationSessionsData
