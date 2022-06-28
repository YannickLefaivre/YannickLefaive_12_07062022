export default class DurationSessionsData {
  /**
   *
   * @param {{day: number, sessionLength: number}[]} averageSessions
   */
  constructor(averageSessions) {
    this.userAverageSessions = averageSessions
  }
}
