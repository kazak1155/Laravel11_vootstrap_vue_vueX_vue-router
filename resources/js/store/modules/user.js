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
        }
    },

    getters: {
        user: state => {
            return state.user
        },

        error: state => {
            return state.error
        },
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },

    actions: {
        getAuthUser({ commit }) {
            apiAxios.post(`/api/auth/me`)
                .then(response => {
                    commit('setUser', response.data)
                })
        },

        login({}, data) {
            apiAxios.post('/api/auth/login', {
                    email: data.email,
                    password: data.password,
                }
            )
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    router.push({ name: 'user.personal' })
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        LogoutUser() {
            apiAxios.post('/api/auth/logout')
                .then(response => {
                    localStorage.removeItem('access_token')
                    router.push({ name: 'user.login' })
                })
                .catch(error=>{
                    console.log(error.response)
                });
        },

        storeUser({}, data) {
            axios.post('/api/user', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                }
            )
                .then(response => {
                    localStorage.setItem('access_token', response.data.token)
                    router.push({ name: 'user.personal'})
                })
                .catch(error=>{
                    console.log(error.response)
                });
        }
    },
}
