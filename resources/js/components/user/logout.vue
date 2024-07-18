<template>
<div>
    <div>
        <div class="d-flex flex-column justify-content-center">
            <h1 class="text-center">logout user</h1>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "logout",

    mounted() {
        this.$store.dispatch('userStore/LogoutUser')
    },
}
</script>

<style scoped>

</style>
