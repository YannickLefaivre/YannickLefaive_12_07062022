import FormatString from './FormatString'

export default class TypeOfActivityData {
  /**
   *
   * @param {Object[]} activities
   * @param {Number} activities.value
   * @param {Number} activities.kind
   *
   * @param {Object} kindOfActivity
   * @param {String} kindOfActivity.1
   * @param {String} kindOfActivity.2
   * @param {String} kindOfActivity.3
   * @param {String} kindOfActivity.4
   * @param {String} kindOfActivity.5
   * @param {String} kindOfActivity.6
   * @param {String} kindOfActivity.7
   */
  constructor(activities, kindOfActivity) {
    this.userPerformance = this.formatKindPropOfAllActivityObject(
      activities,
      kindOfActivity
    )
  }

  /**
   * Change the value of the prop kind of each
   * activity object from a number corresponding to
   * a type of activity to a descriptive string.
   *
   * @param {Object[]} activities
   * @param {Object} kindOfActivity
   * @param {String} kindOfActivity.1
   * @param {String} kindOfActivity.2
   * @param {String} kindOfActivity.3
   * @param {String} kindOfActivity.4
   * @param {String} kindOfActivity.5
   * @param {String} kindOfActivity.6
   * @param {String} kindOfActivity.7
   *
   * @returns {Object[]} A array of activity object
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
