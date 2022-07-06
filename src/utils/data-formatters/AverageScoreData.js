/**
 * A class that formats a user’s average score data
 * so that the AverageScore component can display
 * it as a RadialBarChart in the dashboard.
 * The added data such as the "fill" property is
 * used to color the RadialBar of the
 * RadialBarChart.
 */
class AverageScoreData {
  /**
   * A floating point number.
   *
   * @typedef {Number} Float
   */

  /**
   * @param {Float} completionOfTheDailyObjective
   */
  constructor(completionOfTheDailyObjective) {
    this.name = 'Daily goal'
    this.score = completionOfTheDailyObjective
    this.fill = '#ff0000'
  }
}

export default AverageScoreData
