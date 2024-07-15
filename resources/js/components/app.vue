<template>
    <div>
        <router-link :to="{ name: 'fruit.index'}"> All fruit</router-link>
        <router-link :to="{ name: 'fruit.create'}"> | Add fruit</router-link>
        <router-link :to="{ name: 'user.login'}"> | Login</router-link>
<!--        <router-link :to="{ name: 'user.personal', params: { id: this.id }}"> | personal</router-link>-->
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

    updated() {
        this.getData()
    },

    methods: {
        getData() {
            // this.accessToken = localStorage.getItem('access_token')
            this.id = localStorage.getItem('id')
        },
    },
}
</script>

<style>
</style>
