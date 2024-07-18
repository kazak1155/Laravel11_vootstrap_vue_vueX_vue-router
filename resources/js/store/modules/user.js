import axios from "axios";
import router from "../../router.js";
import apiAxios from "../../apiAxios.js";

export default  {
    namespaced: true,

    state: {
        user: {
            name: null,
            email: null,
            error: null,
        },
        accessToken: localStorage.getItem('access_token')
    },

    getters: {
        user: state => {
            return state.user
        },

        error: state => {
            return state.error
        },

        accessToken: state => {
            return state.accessToken
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        },

        setAccessToken(state, accessToken) {
            state.accessToken = accessToken
        }
    },

    actions: {
        getAuthUser({ commit }) {
            apiAxios.post(`/api/auth/me`)
                .then(response => {
                    commit('setUser', response.data)
                })
        },

        login({ commit }, data) {
            apiAxios.post('/api/auth/login', {
                    email: data.email,
                    password: data.password,
                }
            )
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    commit('setAccessToken', response.data.access_token)
                    console.log(response.data.access_token);
                    router.push({ name: 'user.personal' })
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        LogoutUser({ commit }) {
            apiAxios.post('/api/auth/logout')
                .then(response => {
                    commit('setAccessToken', null)
                    localStorage.removeItem('access_token')
                    router.push({ name: 'user.login' })
                })
                .catch(error=>{
                    console.log(error.response)
                });
        },

        storeUser({ commit }, data) {
            axios.post('/api/user', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                }
            )
                .then(response => {
                    localStorage.setItem('access_token', response.data.token)
                    // router.push({ name: 'user.personal'})
                    commit('setAccessToken', response.data.token)
                    console.log(response.data.token);
                })
                .catch(error=>{
                    console.log(error.response)
                });
        },

    },
}
