export default class DurationSessionsData {
  /**
   *
   * @param {{day: number, sessionLength: number}[]} averageSessions
   */
  constructor(durationOfSessions) {
    this.durationOfUserSessions = durationOfSessions
  }
}
