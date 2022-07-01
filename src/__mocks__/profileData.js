import calorieIcon from '../assets/icons/icon-calorie.svg'
import carbohydrateIcon from '../assets/icons/icon-carbohydrate.svg'
import lipidIcon from '../assets/icons/icon-lipid.svg'
import proteinIcon from '../assets/icons/icon-protein.svg'
import * as userMock from '../__mocks__/userMock.js'
import FormatString from '../utils/data-formatters/FormatString'

export const dashboardData = [
  {
    macronutrientIconURL: calorieIcon,
    macronutrientType: 'Calories',
    measuringUnit: 'kCal',
    macronutrientCount: FormatString.putTheNumberInEnglishFormat(
      userMock.user.keyData.calorieCount
    ),
    macronutrientIconContainerCSSClass: 'info-card__icon-container--calorie',
  },
  {
    macronutrientIconURL: proteinIcon,
    macronutrientType: 'Protéines',
    measuringUnit: 'g',
    macronutrientCount: FormatString.putTheNumberInEnglishFormat(
      userMock.user.keyData.proteinCount
    ),
    macronutrientIconContainerCSSClass: 'info-card__icon-container--protein',
  },
  {
    macronutrientIconURL: carbohydrateIcon,
    macronutrientType: 'Glucides',
    measuringUnit: 'g',
    macronutrientCount: FormatString.putTheNumberInEnglishFormat(
      userMock.user.keyData.carbohydrateCount
    ),
    macronutrientIconContainerCSSClass:
      'info-card__icon-container--carbohydrate',
  },
  {
    macronutrientIconURL: lipidIcon,
    macronutrientType: 'Lipides',
    measuringUnit: 'g',
    macronutrientCount: FormatString.putTheNumberInEnglishFormat(
      userMock.user.keyData.lipidCount
    ),
    macronutrientIconContainerCSSClass: 'info-card__icon-container--lipid',
  },
]
