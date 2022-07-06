import FormatString from './FormatString'

/**
 * This class is used to create a data structure
 * with all the information needed to display the
 * information maps from the data formatted by the
 * DashboardData class.
 */
class InfoCardData {
  /**
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

export default InfoCardData
