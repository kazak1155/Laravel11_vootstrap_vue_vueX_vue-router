import router from "../../router.js";
import apiAxios from "../../apiAxios.js";

export default  {
    namespaced: true,

    state: {
        fruits: null,
        fruit: {
            name: null,
            price: null,
            color: null,
        },
    },

    getters: {
        fruits:  state => {
            return state.fruits
        },
        fruit: state => {
            return state.fruit
        },
    },

    mutations: {
        setFruits(state, fruits) {
            state.fruits = fruits
        },

        setFruit(state, fruit) {
            state.fruit = fruit
        }
    },

    actions: {
        getAllFruits({ commit }) {
            apiAxios.get('/api/auth/fruit')
                .then(response => {
                    commit('setFruits', response.data.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        },

        getFruit({ commit }, id) {
            apiAxios.get(`/api/auth/fruit/${id}`)
                .then(response => {
                    commit('setFruit', response.data.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        },

        deleteFruit({dispatch}, id, ) {
            apiAxios.delete(`/api/auth/fruit/${id}`,
            )
                .then(response => {
                    dispatch('getAllFruits')
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        updateFruit({}, data) {
            apiAxios.patch(`/api/auth/fruit/${data.id}`,
                {
                    name: data.name,
                    price: data.price,
                    color: data.color,
                },
            )
                .then(response => {
                    router.push({ name: 'fruit.show', params: {id: data.id} })
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        addFruit({}, data) {
            apiAxios.post('/api/auth/fruit',
                {
                    name: data.name,
                    price: data.price,
                    color: data.color,
                })
                .then(response => {
                    router.push({ name: 'fruit.show', params: {id: response.data.id} })
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    },
}
