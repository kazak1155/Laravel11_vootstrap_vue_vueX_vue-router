<template>
    <div>
        <div class="d-flex flex-column justify-content-center">
            <h1 class="text-center">Add fruit</h1>
        </div>
        <div  class="ms-3">
            <form>
                <div class="mb-3">
                    <label for="nameFruit" class="form-label">name fruit</label>
                    <input v-model="fruit.name" type="text" class="form-control" id="nameFruit" aria-describedby="nameFruit" placeholder="name">
                    <div  class="form-text">enter name fruit</div>
                </div>
                <div class="mb-3">
                    <label for="priceFruit" class="form-label">price fruit</label>
                    <input v-model="fruit.price" type="number" class="form-control" id="priceFruit" aria-describedby="priceFruit" placeholder="price">
                    <div  class="form-text">enter price fruit from 0 to 999 </div>
                </div>
                <div class="mb-3">
                    <label for="colorFruit" class="form-label">color fruit</label>
                    <input v-model="fruit.color" type="text" class="form-control" id="colorFruit" aria-describedby="colorFruit" placeholder="color">
                    <div  class="form-text">enter color fruit</div>
                </div>
                <button @click.prevent="$store.dispatch('fruit/addFruit', { name: fruit.name, price: fruit.price, color: fruit.color})" type="submit" class="btn btn-primary">Add fruit</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "createFruit",

    mounted() {
        this.$store.commit('fruit/setFruit', { name: null, price: null, color: null})
    },

    computed: {
        ...mapGetters({
            fruit: 'fruit/fruit'
        })
    }
}
</script>

<style scoped>

</style>
