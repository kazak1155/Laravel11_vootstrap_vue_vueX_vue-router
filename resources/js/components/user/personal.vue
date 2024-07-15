<template>

        <div>
            <div class="d-flex justify-content-center fs-2">
                Personal
            </div>
            <div>
                <section class="w-100 px-4 py-5" style="background-color: #9de2ff; border-radius: .5rem .5rem 0 0;">
                    <div class="row d-flex justify-content-center">
                        <div class="col col-md-9 col-lg-7 col-xl-6">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-4">
                                    <div class="d-flex">
                                        <div class="flex-grow-1 ms-3">
<!--                                            <h5 class="mb-1">name - <b>{{ user.name }}</b></h5>-->
<!--                                            <h5 class="mb-2 pb-1">email - <b>{{ user.email }}</b></h5>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
</template>

<script>
export default {
    name: "personal",

    data() {
        return {
            name: null,
            email: null,
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            apiAxios.get(`/api/auth/user/${this.$route.params.id}`)
                .then(response => {
                    console.log(response);
                    this.name = response.data.data.name
                    this.email = response.data.data.email
                })
        }
    }
}
</script>

<style scoped>

</style>
