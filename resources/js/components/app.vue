<template>
    <div>
        <router-link :to="{ name: 'main'}"> Main page</router-link>
        <router-link v-if="accessToken" :to="{ name: 'fruit.index'}"> | All fruit</router-link>
        <router-link v-if="accessToken" :to="{ name: 'fruit.create'}"> | Add fruit</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.login'}"> | Login</router-link>
        <router-link v-if="accessToken" :to="{ name: 'user.logout'}"> | Logout</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.registration'}"> | Registration user</router-link>
        <router-link v-if="accessToken" :to="{ name: 'user.personal'}"> | Personal auth user</router-link>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: "app",

    data() {
        return {
            accessToken: null
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },
    },
}
</script>

<style>
</style>
