import InfoCardData from './InfoCardData.js'
import calorieIcon from '../../assets/icons/icon-calorie.svg'
import proteinIcon from '../../assets/icons/icon-protein.svg'
import carbohydrateIcon from '../../assets/icons/icon-carbohydrate.svg'
import lipidIcon from '../../assets/icons/icon-lipid.svg'

export default class ProfileData {
  /**
   * @typedef {{
   *  caloriesCount: number,
   *  proteinCount: number,
   *  carbohydrateCount: number,
   *  lipidCount: number
   * }} KeyData
   */

  /**
   *
   * @param {KeyData} keyData
   * @param {Number} keyData.caloriesCount
   * @param {Number} keyData.proteinCount
   * @param {Number} keyData.carbohydrateCount
   * @param {Number} keyData.lipidCount
   */
  constructor(keyData) {
    this.infoCardsData = this.createInfoCardsData(keyData)
  }

  /**
   * @credits this article :
   * (https://www.javatpoint.com/convert-object-to-array-in-javascript)
   *  – helped me figure out how to create a list
   * from an object.
   *
   *
   * @param {KeyData} keyData
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
