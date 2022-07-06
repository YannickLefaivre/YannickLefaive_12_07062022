/**
 * This class formats the data from the user’s
 * civilian information to only retrieve the user’s
 * first name, to display it on the dashboard page.
 */
class MainContentHeaderData {
  /**
   * @param {Object} userInfos
   * @param {String} userInfos.firstName
   */
  constructor(userInfos) {
    this.userFirstName = userInfos.firstName
  }
}

export default MainContentHeaderData
