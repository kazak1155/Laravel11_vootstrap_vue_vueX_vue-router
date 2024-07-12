<template>
    <div>
        <div class="d-flex flex-column justify-content-center">
            <h1 class="text-center">Show fruit</h1>
        </div>
        <div>
            <section class="w-100 px-4 py-5" style="background-color: #9de2ff; border-radius: .5rem .5rem 0 0;">
                <div class="row d-flex justify-content-center">
                    <div class="col col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="flex-grow-1 ms-3">
                                        <h5  class="mb-1"> name fruit: {{ fruit.name }}</h5>
                                        <h5  class="mb-1"> price fruit: {{ fruit.price }}</h5>
                                        <h5  class="mb-1"> color fruit: {{ fruit.color }}</h5>
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
import store from "../../store/index.js";
import {mapGetters} from "vuex";

export default {
    name: "show",

    mounted() {
        store.dispatch('getFruit', this.$route.params.id)
    },

    computed: {
        ...mapGetters([
            'fruit'
        ])
    }
}
</script>

<style scoped>

</style>
