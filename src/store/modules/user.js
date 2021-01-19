
// import api from '@/api'
import { user } from './types'
import { getToken, setToken, removeToken } from '@/utils/token'

const state = {
    token: getToken(),
}

const mutations = {
    [user.SET_TOKEN](state, token) {
        state.token = token
    }
}

const actions = {
    async login({ commit }, ) {
        // const res = await api.login(userInfo)
        const res = {token:"有token"}
        setToken(res.token)
        commit(user.SET_TOKEN, res.token)
        return res.token ? true : false
    },
    async resetToken({ commit }) {
        commit(user.SET_TOKEN, '')
        removeToken()
        return true
    }
}

export default {
    state,
    mutations,
    actions
}