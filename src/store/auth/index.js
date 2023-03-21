import {apolloClient} from "@/modules/apolloClient";
import USER_LOGIN from "@/components/queries/auth/sigIn.graphql";

const state = {
    isOpenModal: {
        form: '',
        value: false
    },
    user: localStorage.getItem('user') || null,
    accessToken: localStorage.getItem('apollo-token') || null,
    isAuthStatus: false,
    refreshToken: ''
}

const getters = {
    user: () => state.user
}

const mutations = {
    SET_CHANGE_STATE_MODAL(state, value) {
        state.isOpenModal = value
    },

    USER_LOGIN(state, payload) {
        state.user = payload
        state.isAuthStatus = true
    },
    SET_TOKEN(state, payload) {
        state.accessToken = payload.accessToken
        state.refreshToken = payload.refreshToken
    }
}

const actions = {
    changeStateModal({commit}, payload) {
        commit('SET_CHANGE_STATE_MODAL', payload)
    },
    async loginUser({commit}, payload) {
        let result = null
        await apolloClient.query({
            query: USER_LOGIN,
            variables: {
                input: payload
            }
        })
            .then(({ data: { signIn } }) => {
                commit('USER_LOGIN', payload.userName)
                commit('SET_TOKEN', signIn)
                localStorage.setItem('apollo-token', signIn.accessToken)
                localStorage.setItem('user', payload.userName)
                result = {
                    token: signIn.accessToken,
                    message: 'Success'
                }
            })
            .catch(error => {
                console.log('ERROR:', error)
                result = {
                    message: 'Error'
                }
            })

        return result
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
