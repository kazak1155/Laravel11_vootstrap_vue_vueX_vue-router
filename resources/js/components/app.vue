<template>
    <div>
        <router-link :to="{ name: 'fruit.index'}"> All fruit</router-link>
        <router-link :to="{ name: 'fruit.create'}"> | Add fruit</router-link>
        <router-link :to="{ name: 'user.login'}"> | Login</router-link>
        <router-link :to="{ name: 'user.logout'}"> | Logout</router-link>
        <router-link :to="{ name: 'user.personal'}"> | personal</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app",

    data() {
        return {
            id: null
        }
    },

    mounted() {
        this.getData()

    },

    methods: {
        getData() {
            this.id = localStorage.getItem('id')
        },
    },
}
</script>

<style>
</style>
