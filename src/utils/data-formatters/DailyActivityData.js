import FormatDate from './FormatDate.js'

export default class DailyActivityData {
  /**
   *
   * @param { {day: number, kilogram: number, calories: number}[] } sessions
   */
  constructor(sessions) {
    this.userActivitySessions = this.removeMonthAndYearNumberFrom(sessions)
  }

  removeMonthAndYearNumberFrom = (sessions) => {
    const sessionsWithoutYearAndMonthNumberInDayProp = sessions.map(
      (session) => {
        session.day = FormatDate.retrieveDayNumber(session.day)

        return session
      }
    )

    return sessionsWithoutYearAndMonthNumberInDayProp
  }
}
