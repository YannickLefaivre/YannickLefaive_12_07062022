export default class FormatString {
  static firstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
