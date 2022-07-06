export default class FormatString {
  static firstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  /**
   * Retrieves the day number from a date formatted
   * as follows: YYYY-MM-DD (ISO 8601 format).
   *
   * @param {String} dateInString The string date
   * in which the month and year will be removed.
   *
   * @returns {String} A string with only the day’s number.
   */
  static retrieveDayNumber(dateInString) {
    const dayNumber = dateInString.slice('-2')
    const isASingleDigitNumber = /^0[0-9]$/.test(dayNumber) === true

    const numberInStringWithoutTheZero = (numberInString) =>
      numberInString.slice(1)

    if (isASingleDigitNumber) {
      return numberInStringWithoutTheZero(dayNumber)
    }

    return dayNumber
  }

  static toLocaleStringSupportsOptions() {
    return !!(
      typeof Intl == 'object' &&
      Intl &&
      typeof Intl.NumberFormat == 'function'
    )
  }

  static putTheNumberInEnglishFormat = (number) => {
    if (FormatString.toLocaleStringSupportsOptions()) {
      return number.toLocaleString('en-US')
    }

    return new Error(
      'Number.toLocalString() is not supported by the browser currently used to run the web application.'
    )
  }
}
