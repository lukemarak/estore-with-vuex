<template>
  <div class="row">
    <div v-for="product in products" :key="product.id" class="col-md-3 col-6 my-1">
        <div class="card h-100">
          <router-link :to="{ name: 'Product_Detail', params: { id: product.id}}">
          <div class="card-title" style="color:#000;">{{ product.brand }}</div>
            <img :src="product.img1" class="card-img-top">
              <div class="card-body">
                  <div class="card-title">{{ product.name }}</div>
                    <div>
                        <span class="badge badge-pill badge-info">${{ product.price }}</span>
                        <span class="badge badge-pill badge-info">{{ product.available }} in stock</span>
                        <span class="badge badge-pill badge-info">{{ product.title }} </span>
                    </div>
              </div>
              </router-link>
            <button @click="addProductToCart(product)" class="cart-btn">Add to Cart</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Products",
    methods:{
        ...mapActions(['fetchProducts']),
        ...mapActions(['addProductToCart'])
    },
    computed: mapGetters(['products']),
    created(){
        this.fetchProducts();
    }
}
</script>

<style scoped>

</style>