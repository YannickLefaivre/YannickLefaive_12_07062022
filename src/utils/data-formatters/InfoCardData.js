import FormatString from './FormatString'

export default class InfoCardData {
  /**
   *
   * @param {Object} macronutrientData
   * @param {String} macronutrientData.iconURL
   * @param {String} macronutrientData.type
   * @param {String} macronutrientData.measuringUnit
   * @param {Number} macronutrientData.count
   * @param {String} macronutrientData.iconContainerCSSClass
   */
  constructor({ iconURL, type, measuringUnit, count, iconContainerCSSClass }) {
    this.macronutrientIconURL = iconURL
    this.macronutrientType = type
    this.macronutrientMeasuringUnit = measuringUnit
    this.macronutrientCount = FormatString.putTheNumberInEnglishFormat(count)
    this.macronutrientIconContainerCSSClass = iconContainerCSSClass
  }
}
