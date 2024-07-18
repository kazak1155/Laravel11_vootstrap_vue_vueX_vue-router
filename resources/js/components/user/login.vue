<template>
    <div>
        <form>
            <div class="mt-3 mb-3 form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="user.email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">enter e-mail</small>
            </div>
            <div class="mb-3 form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="user.password" type="password" class="form-control"  placeholder="Password">
                <small id="passwordHelp" class="form-text text-muted">enter password</small>
            </div>
            <button @click.prevent="$store.dispatch('userStore/login', { email: user.email, password: user.password})" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "loginUser",

    mounted() {
        this.$store.commit('userStore/setUser', { email: null, password: null})
    },

    computed: {
        ...mapGetters({
            user: 'userStore/user',
        })
    },
}
</script>

<style scoped>

</style>
