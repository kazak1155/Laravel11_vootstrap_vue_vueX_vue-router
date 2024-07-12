<template>
    <div>
        <div class="d-flex flex-column justify-content-center">
            <h1 class="text-center">All fruits</h1>
        </div>
        <table class="table table-striped ms-3">
            <thead>
            <tr>
                <th scope="col">name</th>
                <th scope="col">price</th>
                <th scope="col">color</th>
                <th scope="col">edit</th>
                <th scope="col">delete</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <td>
                    <router-link v-if="fruit && fruit.id" :to="{ name: 'fruit.show', params: { id: fruit.id }}">
                        {{ fruit.name }}
                    </router-link>
                </td>
                <td>{{ fruit.price }}</td>
                <td>{{ fruit.color }}</td>
                <td>
                    <router-link class="btn btn-success" :to="{ name: 'fruit.edit', params: {id: fruit.id}}"> Edit
                        fruit
                    </router-link>
                </td>
                <td><a href="#" @click.prevent="$store.dispatch('deleteFruit', fruit.id)"
                       class="btn btn-danger">Delete</a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import store from "../../store/index.js";
import {mapGetters} from 'vuex'

export default {
    name: "indexFruit",

    mounted() {
        store.dispatch('getAllFruits')
    },

    computed: {
        ...mapGetters([
            'fruits'
        ])
    }
}
</script>

<style scoped>

</style>
