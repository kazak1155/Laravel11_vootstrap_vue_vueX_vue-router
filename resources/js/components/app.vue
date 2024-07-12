<template>
    <div>
            <router-link :to="{ name: 'fruit.index'}"> All fruit</router-link>
            <router-link :to="{ name: 'fruit.create'}"> | Add fruit</router-link>
            <router-link :to="{ name: 'user.login'}"> | Login </router-link>
            <router-view></router-view>
    </div>
</template>

<script setup>
</script>

<style>
</style>
