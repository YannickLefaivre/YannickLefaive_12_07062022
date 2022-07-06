/**
 * Simulates the behavior of a service providing
 * methods to manage authentication.
 */
export const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100)
  },
  logout(callback) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  },
}
