<template>
    <div>
        <form>
            <div class="mt-3 mb-3 form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">enter e-mail</small>
            </div>
            <div class="mb-3 form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="password" type="password" class="form-control"  placeholder="Password">
            </div>
            <button @click.prevent="login" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    <div v-if="error" class="text-bg-danger">{{this.error}} </div>
</template>

<script>
import apiAxios from './../../apiAxios.js'
import router from "../../router.js";

export default {
    name: "loginUser",

    data() {
        return {
            email: null,
            password: null,
            error: null,
        }
    },

    methods: {
        login() {
            apiAxios.post('/api/auth/login', {
                    email: this.email,
                    password: this.password,
                }
            )
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    localStorage.setItem('id', response.data.id)
                    router.push({ name: 'user.personal', params: { id: response.data.id }})
                })
                .catch(error => {
                    // console.log(error.response)
                    this.error = error.response.data.error
                });
        }
    },

}
</script>

<style scoped>

</style>
