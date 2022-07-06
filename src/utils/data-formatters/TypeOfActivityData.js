import FormatString from './FormatString'

/**
 * This class formats user activity information to
 * allow the TypeOfActivity component to display
 * text indicating the type of activity performed
 * at the polar angles of a RadarChart.
 */
class TypeOfActivityData {
  /**
   * Information about the type of an activity and
   * the number of times it has been performed.
   *
   * @typedef {Object} Activity
   * @property {Number} activity.value The number
   * of times this activity has been performed.
   *
   * @property {Number | String} activity.kind
   * A number or text that corresponds to the type
   * of activity performed.
   */

  /**
   * A array of string designating a type of activity.
   *
   * @typedef {Object[]} KindOfActivity
   * @property {String} kindOfActivity.1
   * Activity Type #1
   *
   * @property {String} kindOfActivity.2
   * Activity Type #2
   *
   * @property {String} kindOfActivity.3
   * Activity Type #3
   *
   * @property {String} kindOfActivity.4
   * Activity Type #4
   *
   * @property {String} kindOfActivity.5
   * Activity Type #5
   *
   * @property {String} kindOfActivity.6
   * Activity Type #6
   *
   * @property {String} kindOfActivity.7
   * Activity Type #7
   */

  /**
   * @param {Activity[]} activities
   *
   * @param {KindOfActivity} kindOfActivity
   */
  constructor(activities, kindOfActivity) {
    this.userPerformance = this.formatKindPropOfAllActivityObject(
      activities,
      kindOfActivity
    )
  }

  /**
   * Replace the value of the `kind` property of
   * each Activity object with a string. The
   * starting value of the prop `kind` is a number
   * that corresponds to the property name of the
   * KindOfActivity object.
   *
   * @param {Activity[]} activities
   *
   * @param {KindOfActivity} kindOfActivity
   *
   * @returns {Activity[]}
   */
  formatKindPropOfAllActivityObject = (activities, kindOfActivity) => {
    return activities.map((activity) => {
      for (const property in kindOfActivity) {
        if (property === activity.kind.toString()) {
          switch (kindOfActivity[property]) {
            case 'energy':
              activity.kind = 'Energie'

              break

            case 'intensity':
              activity.kind = 'Intensité'

              break

            case 'strength':
              activity.kind = 'Force'

              break

            case 'speed':
              activity.kind = 'Vitesse'

              break

            default:
              activity.kind = FormatString.firstLetterToUpperCase(
                kindOfActivity[property]
              )
          }
        }
      }

      return activity
    })
  }
}

export default TypeOfActivityData
