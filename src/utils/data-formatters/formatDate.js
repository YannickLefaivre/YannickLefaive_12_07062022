export default class FormatDate {
  static retrieveDayNumber = (dateInString) => {
    const dayNumber = dateInString.slice('-2')
    const isASingleDigitNumber = /^0[0-9]$/.test(dayNumber) === true

    const numberInStringWithoutTheZero = (numberInString) =>
      numberInString.slice(1)

    if (isASingleDigitNumber) {
      return numberInStringWithoutTheZero(dayNumber)
    }

    return dayNumber
  }
}
