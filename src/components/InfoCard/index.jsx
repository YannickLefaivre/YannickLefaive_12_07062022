import PropTypes from 'prop-types'
import './style.css'

/**
 * Displays information about calories, proteins,
 * carbohydrates and fats of the day.
 *
 * @param {Object} props - The function component props.
 * @param {String} props.macronutrientIconURL - The
 * URL of a macronutrient icon.
 *
 * @param {String} props.macronutrientIconAltText -
 * The alternative text of a macronutrient icon.
 *
 * @param {String} props.macronutrimentCount - The
 * number of a type of macronutrient.
 *
 * @param {String} props.macronutrimentType - The
 * type of macronutrient.
 *
 * @param {String} props.measuringUnit - The unit
 * of measure of the macronutriment.
 *
 * @param {Object} [props.styleModifier=null] - Allows
 * you to change the style of the elements of the
 * information card.
 *
 * @param {String} [props.styleModifier.infoCardContainer=undefined] -
 * Allows you to change the style of the
 * information card container.
 *
 * @param {String} [props.styleModifier.infoCardIconContainer=undefined] -
 * Allows you to change the style of the
 * macronutrient icon container.
 *
 * @param {String} [props.styleModifier.infoCardIcon=undefined] -
 * Allows you to change the style of the
 * macronutrient icon.
 *
 * @param {String} [props.styleModifier.macronutrientDataContainer=undefined] -
 * Allows you to change the style of the container
 * of data regarding the number and type of
 * macronutrient of the information card.
 *
 * @param {String} [props.styleModifier.macronutrientCount=undefined] -
 * Alows you to change the style of the text
 * indicating the number of daily macronutrients.
 *
 * @param {String} [props.styleModifier.macronutrientType=undefined] -
 * Allows you to change the style of the text
 * indicating the type of macronutrient the
 * information card corresponds to.
 *
 * @return {JSX.Element} A InfoCard component.
 */
function InfoCard({
  macronutrientIconURL,
  macronutrientIconAltText,
  macronutrientCount,
  macronutrientType,
  measuringUnit,
  styleModifier,
}) {
  return (
    <div
      className={`info-card${
        styleModifier && styleModifier.infoCardContainer
          ? ` ${styleModifier.infoCardContainer}`
          : ''
      }`}
    >
      <div
        className={`info-card__icon-container${
          styleModifier && styleModifier.infoCardIconContainer
            ? ` ${styleModifier.infoCardIconContainer}`
            : ''
        }`}
      >
        <img
          className={`info-card__icon-container__shape${
            styleModifier && styleModifier.infoCardIcon
              ? ` ${styleModifier.infoCardIcon}`
              : ''
          }`}
          src={macronutrientIconURL}
          alt={macronutrientIconAltText}
        />
      </div>
      <p
        className={`info-card__macronutrient-data${
          styleModifier && styleModifier.macronutrientDataContainer
            ? ` ${styleModifier.macronutrientDataContainer}`
            : ''
        }`}
      >
        <span
          className={`info-card__macronutrient-data__count${
            styleModifier && styleModifier.macronutrientCount
              ? ` ${styleModifier.macronutrientCount}`
              : ''
          }`}
        >
          {macronutrientCount + measuringUnit}
        </span>
        <span
          className={`info-card__macronutrient-data__type${
            styleModifier && styleModifier.macronutrientType
              ? ` ${styleModifier.macronutrientType}`
              : ''
          }`}
        >
          {macronutrientType}
        </span>
      </p>
    </div>
  )
}

InfoCard.propTypes = {
  macronutrientIconURL: PropTypes.string.isRequired,
  macronutrientIconAltText: PropTypes.string.isRequired,
  macronutrientCount: PropTypes.string.isRequired,
  macronutrientType: PropTypes.string.isRequired,
  measuringUnit: PropTypes.string.isRequired,
  styleModifier: PropTypes.object,
}

InfoCard.defaultProps = {
  styleModifier: null,
}

export default InfoCard
