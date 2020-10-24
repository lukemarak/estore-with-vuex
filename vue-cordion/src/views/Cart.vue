<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <h1>Order Summery</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Laudantium?</p>
            <p>Shipping Charge: $50</p>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-6 text-center">
            <h1>Item Summery</h1>
            <table class="table">
                    <tbody>
                        <tr v-for="(product, index) in cartProducts" :key="index">
                        <th scope="row"><img v-bind:src="product.image" width="50"></th>
                        <td>{{ product.title }}</td>
                        <td>{{ product.price }}</td>
                        <td><button @click="incrementQuantity(product)">+</button></td>
                        <td>{{ product.quantity }}</td>
                        <td><button @click="decrementQuantity(product)">-</button></td>
                        <td><button @click="removeProductFromCart(product)">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            <p>Shipping Charge:<del>$50</del> Free Shipping</p>
                <hr>
            <h1>Total:{{ cartTotal }}</h1>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Cart",
    methods:{
        ...mapActions(['fetchProducts']),
        ...mapActions(['incrementQuantity']),
        ...mapActions(['decrementQuantity']),
        ...mapActions(['removeProductFromCart'])
    },
    computed: {
        ...mapGetters(['cartProducts']),
        ...mapGetters([ 'cartTotal']),
        ...mapGetters(['products']),
    },
    created(){
        this.fetchProducts()
    }
}
</script>

<style>

</style>