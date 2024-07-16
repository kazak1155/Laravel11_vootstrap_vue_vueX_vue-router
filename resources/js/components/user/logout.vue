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
import apiAxios from "../../apiAxios.js";
export default {
    name: "logout",

    mounted() {
        this.LogoutUser()
    },

    methods: {
        LogoutUser() {
            apiAxios.post('/api/auth/logout')
                .then(response => {
                    console.log(1111);
                    // localStorage.removeItem('access_token')
                    // localStorage.removeItem('id')
                    // this.$router.push({ name: 'user.login'})
                })
                .catch(error=>{
                    console.log(error.response)
                });
        }
    }
}
</script>

<style scoped>

</style>
