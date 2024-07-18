<template>
    <div>
        <div>
            <div class="d-flex flex-column justify-content-center">
                <h1 class="text-center">Registration User</h1>
            </div>
        </div>
        <div>
            <div>
                <form>
                    <div class="mt-3 mb-3 form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input v-model="name" type="text" class="form-control"  placeholder="name">
                    </div>
                    <div class="mb-3 form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="mb-3 form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="password" type="password" class="form-control"  placeholder="Password">
                    </div>
                    <div class="mb-3 form-group">
                        <label for="exampleInputPassword1">confirm password</label>
                        <input v-model="password_confirmation" type="password" class="form-control"  placeholder="confirm password">
                    </div>
                    <button @click.prevent="$store.dispatch('userStore/storeUser', { name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation})" type="submit" class="btn btn-primary">Registration</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "regisration",

    computed: {
        ...mapGetters({
            user: 'userStore/user',
        })
    },
}
</script>

<style scoped>

</style>
