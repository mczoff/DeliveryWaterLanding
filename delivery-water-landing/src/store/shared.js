export default {
    state: {
        loading: false,
        warning: false,
        warningText: ''
    },
    getters: {
        loading: state => state.loading,
        warning: state => state.warning,
        warningText: state => state.warningText
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setWarning(state, payload) {
            state.warning = payload
        },
        setWarningText(state, payload) {
            state.warningText = payload
        }
    },
    actions: {
        enableLoading({commit}) {
            commit('setLoading', true);
        },
        disableLoading({commit}) {
            commit('setLoading', false);
        },
        changeWarning({commit}, status) {
            commit('setWarning', status);
        },
        setWarningMessage({commit}, message) {
            commit('setWarningText', message);
        },
    }
}
