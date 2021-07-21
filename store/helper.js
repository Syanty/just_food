export const state = () => ({
    success: null,
    error:null
})

export const getters = {
    getSuccessMsg(state) {
        return state.success
    },
    getErrorMsg(state){
        return state.error
    }
}

export const mutations = {
    setSuccess(state, payload) {
        state.success = payload
    },
    setError(state,payload){
        state.error = payload
    }
}
