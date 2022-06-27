export default class FormatString {
  static firstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
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
