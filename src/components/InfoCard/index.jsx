import PropTypes from 'prop-types'
import './style.css'

/**
 * Displays the key information of the user in the
 * form of a card, the data of which depends on the
 * props passed as parameter by the user of the
 * component: type of macronutrient, number of
 * macronutrient, icon of the macronutrient
 * represented by the card.
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
 * macronutrient spend.
 *
 * @param {String} [props.styleModifier.macronutrientCount=undefined] -
 * Allows you to change the style of the text
 * indicating the number of macronutrients the user
 * spends.
 *
 * @param {String} [props.styleModifier.macronutrientType=undefined] -
 * Allows you to change the style of the text
 * indicating the type of macronutrient to which
 * the information card corresponds.
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
        <br />
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
