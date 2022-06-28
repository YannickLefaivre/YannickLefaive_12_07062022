export default class AverageScoreData {
  /**
   * @typedef {Number} Float
   */

  /**
   *
   * @param {Float} completionOfTheDailyObjective
   */
  constructor(completionOfTheDailyObjective) {
    this.name = 'Daily goal'
    this.score = completionOfTheDailyObjective
    this.fill = '#ff0000'
  }
}
