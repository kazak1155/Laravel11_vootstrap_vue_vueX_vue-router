import axios from "axios";
import router from "../../router.js";
import apiAxios from "../../apiAxios.js";

export default  {
    namespaced: true,

    state: {
        user: {
            name: null,
            email: null,
        }
    },

    getters: {
        user: state => {
            return state.user
        }
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
                    console.log(response.data);
                    commit('setUser', response.data)
                })
        },

        getFruit({ commit }, id) {
            apiAxios.get(`/api/auth/fruit/${id}`)
                .then(response => {
                    commit('setFruit', response.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        },
    },
}
