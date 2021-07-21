export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    getToken(state) {
        return state.auth
    },

    loggedInUser(state) {
        return state.auth.user
    }
}