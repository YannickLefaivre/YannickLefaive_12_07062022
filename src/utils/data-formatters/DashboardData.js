import InfoCardData from './InfoCardData.js'
import calorieIcon from '../../assets/icons/calorie.svg'
import proteinIcon from '../../assets/icons/protein.svg'
import carbohydrateIcon from '../../assets/icons/carbohydrate.svg'
import lipidIcon from '../../assets/icons/lipid.svg'

/**
 * A class that can format key user information,
 * such as the amount of macronutrient *(calories,
 * lipid, carbohydrates, protein)* of the user and add
 * new data such as the URL of a macronutrient icon
 * to display the InfoCard component list in the
 * dashboard.
 */
class DashboardData {
  /**
   * The macronutrients of a user’s day.
   *
   * @typedef {Object} KeyData
   * @property {Number} KeyData.caloriesCount
   * the count of calories.
   *
   * @property {Number} KeyData.proteinCount
   * the count of protein.
   *
   * @property {Number} KeyData.carbohydrateCount
   * the count of carbohydrate.
   *
   * @property {Number} KeyData.lipidCount the count of lipid.
   */

  /**
   * @param {KeyData} keyData
   */
  constructor(keyData) {
    this.infoCardsData = this.createInfoCardsData(keyData)
  }

  /**
   * Builds the data needed to display information
   * cards from a user’s list of macronutrients of
   * the day.
   *
   * @credits this article :
   * (https://www.javatpoint.com/convert-object-to-array-in-javascript)
   *  – helped me figure out how to create a list
   * from an object.
   *
   * @param {KeyData} keyData the macronutrients of
   * a user’s day.
   *
   * @returns {InfoCardData[] | null}
   */
  createInfoCardsData = (keyData) => {
    const infoCardsData = Object.entries(keyData).map((macronutrientCount) => {
      switch (macronutrientCount[0]) {
        case 'calorieCount':
          return new InfoCardData({
            iconURL: calorieIcon,
            type: 'Calories',
            count: macronutrientCount[1],
            measuringUnit: 'kCal',
            iconContainerCSSClass: 'info-card__icon-container--calorie',
          })

        case 'proteinCount':
          return new InfoCardData({
            iconURL: proteinIcon,
            type: 'Protéines',
            count: macronutrientCount[1],
            measuringUnit: 'g',
            iconContainerCSSClass: 'info-card__icon-container--protein',
          })

        case 'carbohydrateCount':
          return new InfoCardData({
            iconURL: carbohydrateIcon,
            type: 'Glucides',
            count: macronutrientCount[1],
            measuringUnit: 'g',
            iconContainerCSSClass: 'info-card__icon-container--carbohydrate',
          })

        case 'lipidCount':
          return new InfoCardData({
            iconURL: lipidIcon,
            type: 'Lipides',
            count: macronutrientCount[1],
            measuringUnit: 'g',
            iconContainerCSSClass: 'info-card__icon-container--lipid',
          })

        default:
          return null
      }
    })

    return infoCardsData[0] !== null ? infoCardsData : null
  }
}

export default DashboardData
