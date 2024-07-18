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
import {mapGetters} from "vuex";

export default {
    name: "app",

    computed: {
        ...mapGetters({
            accessToken: 'userStore/accessToken',
        })
    },
}
</script>

<style>
</style>
