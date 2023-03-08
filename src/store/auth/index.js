
const state = {
    isOpenModal: {
        form: '',
        value: false
    },
}

const mutations = {
    SET_CHANGE_STATE_MODAL(state, value) {
        state.isOpenModal = value
    }
}

const actions = {
    changeStateModal({commit}, payload) {
        commit('SET_CHANGE_STATE_MODAL', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
