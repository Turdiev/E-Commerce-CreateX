import i18n from '@/boot/i18n'

const state = {
    language: false,
}

const mutations = {
    SET_LOCALE(state, { value }) {
        state.language = value
    }
}

const actions = {
    changeLanguage({commit}, language) {
        i18n.locale = language
        commit('SET_LOCALE', { value:language })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
