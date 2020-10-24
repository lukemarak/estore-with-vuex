<template>
<div class="container-fluid">
  <div class="accordion" role="tablist">
      <div class="row">
        <div class="col-md-2">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="light" class="btn-link">Brand</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-form-group>
                  <b-form-checkbox
                        v-for="brand in brandList" 
                        :key="brand"
                        type="checkbox" 
                        :id="brand" 
                        :value="brand" 
                        v-model="selected_items"
                        size="lg">
                        {{ brand }}
                  </b-form-checkbox>
              </b-form-group>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="light" class="btn-link">Price</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
              <b-form-group>
                <b-form-checkbox
                        v-for="price in priceList" 
                        :key="price"
                        type="checkbox" 
                        :id="price" 
                        :value="price" 
                        v-model="selected_items"
                        size="lg">
                        {{ price }}
                  </b-form-checkbox>
              </b-form-group>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="light" class="btn-link">Color</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
               <b-form-group>
                <b-form-checkbox
                        v-for="color in colorList" 
                        :key="color"
                        type="checkbox" 
                        :id="color" 
                        :value="color" 
                        v-model="selected_items"
                        size="lg">
                        {{ color }}
                  </b-form-checkbox>
              </b-form-group>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="light" class="btn-link">Size</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
              <b-form-group>
                <b-form-checkbox
                        v-for="brand in brandList" 
                        :key="brand"
                        type="checkbox" 
                        :id="brand" 
                        :value="brand" 
                        v-model="selected_items"
                        size="lg">
                        {{ brand }}
                  </b-form-checkbox>
              </b-form-group>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div> 
        <div class="col-md-10">
          <div>
            <b-jumbotron lead="Bootstrap v4 Components for Vue.js 2">
              <p>For more information visit website</p>
              <b-button variant="primary" href="#">More Info</b-button>
            </b-jumbotron>
          </div>
          <div class="row" v-if="selected_items < 1">
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
          <div class="row" v-else>
            <div v-for="product in selectedProducts" :key="product.id" class="col-md-3 col-6 my-1">
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
        </div>
      </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';
export default {
  name: 'Home',
  components: {
  },
  data() {
      return {
        brandList: ['adidas', 'forever@21', 'jockey', 'pan-america'],
        priceList: ['250', '450', '550', '650'],
        colorList: ['red', 'yellow', 'green', 'orrange'],
        selected_items: [],
        // products: this.$store.getters.products // either use this or mapGettes(['products']) any one
      };
    },
    methods:{
        ...mapActions(['fetchProducts']),
        ...mapActions(['addProductToCart'])
    },
    computed: {
      ...mapGetters(['products']), //this or products in the data property any one
      selectedProducts: function () {
        return this.products.filter(function (product) {
          const price1 = parseInt(this.priceList.selected_items);
          console.log(price1)
          return this.selected_items.includes(product.brand) || this.selected_items.includes(product.price) || this.selected_items.includes(product.color);
        }, this);
      }
    },
    created(){
        this.fetchProducts();
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
h1 {
  text-align: center;
  margin: 50px 0;
  font-family: sans-serif;
}
.mb-1, .p-1 {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  margin-bottom: 0 !important ;
}
.mb-1 {
  box-shadow: none;
}
.btn-link {
  width: 100%;
  height: 60px !important;
  color: black !important;
  font-weight: bold !important;
  text-align: left !important;
  text-decoration: none !important;
}

.card-body {
  background: #eeeff1;
}

.btn-link:after{
  content: '\2212';
  width: 35px;
  font-size: 25px;
  text-align: center;
  border-radius: 5px;
  right: 15px;
  top: 11px;
  position: absolute;
}

.btn-link.collapsed:after{
  content: '\002B';
}

/* .btn-link::before{
  content: '';
  height: 25px;
  width: 25px;
  position: absolute;
  background: inherit;
  z-index: 1;
  transform: rotate(45deg);
  left: 30px;
  top: 46px;
} */


</style>