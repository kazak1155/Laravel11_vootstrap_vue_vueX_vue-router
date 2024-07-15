import axios from "axios";
import router from "../../router.js";
import apiAxios from "../../apiAxios.js";

export default  {
    state: {
        user: {
            name: null,
            email: null,
        }
    },

    getters: {
        user: state => {
            return state.fruit
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },

    actions: {

    },
}
