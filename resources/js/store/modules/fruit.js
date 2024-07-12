import axios from "axios";

import router from "../../router.js";
import store from "../index.js";

export default  {
    state: {
        fruits: null,
        fruit: {
            name: null,
            price: null,
            color: null,
        }
    },

    getters: {
        fruits:  state => {
            return state.fruits
        },
        fruit: state => {
            return state.fruit
        }
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
            axios.get('/api/auth/fruit', {
                    headers:{
                        'authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    commit('setFruits', response.data.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        },

        deleteFruit({dispatch}, id, ) {
            axios.delete(`/api/fruit/${id}`,  {
                    headers:{
                        'authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                }
            )
                .then(response => {
                    dispatch('getAllFruits')
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        getFruit({ commit }, id) {
            axios.get(`/api/fruit/${id}`,  {
                headers:{
                    'authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            })
                .then(response => {
                    console.log(response);
                    commit('setFruit', response.data)
                })
                .catch(error => {
                    console.log(error.message)
                })
        },

        updateFruit({}, data) {
            axios.patch(`/api/fruit/${data.id}`,
                {
                    name: data.name,
                    price: data.price,
                    color: data.color,
                },
                {
                    headers:{
                        'authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
                }
            )
                .then(response => {
                    router.push({ name: 'fruit.show', params: {id: data.id} })
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response)
                });
        },

        addFruit({}, data) {
            axios.post('/api/fruit',
                {
                    name: data.name,
                    price: data.price,
                    color: data.color,
                },
                {
                    headers:{
                        'authorization': 'Bearer ' + localStorage.getItem('access_token')
                    }
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
