<template>
  <div>
      <main class="container">

      <!-- Left Column / Headphones Image -->
      <div class="left-column">
        <ul class="thumb">
            <li><a href="img1.jpg" target="imgBox"><img v-bind:src="product.img1" alt="img1"></a></li>
            <li><a href="img2.jpg" target="imgBox"><img v-bind:src="product.img2" alt="img2"></a></li>
            <!-- <li><a href="img3.jpg" target="imgBox"><img src="thumb3.jpg" alt="thumb3"></a></li>
            <li><a href="img4.jpg" target="imgBox"><img src="thumb4.jpg" alt="thumb4"></a></li> -->
        </ul>
        <div class="imgBox"><img v-bind:src="product.img1"></div>
        <!-- <img v-bind:src="product.img1" alt="img1"> -->
      </div>


      <!-- Right Column -->
      <div class="right-column">

        <!-- Product Description -->
        <div class="product-description">
          <span>Headphones</span>
          <h1>{{product.name}}</h1>
          <p>{{ product.description }}</p>
        </div>

        <!-- Product Configuration -->
        <div class="product-configuration">

          <!-- Product Color -->
          <div class="product-color">
            <span>Color</span>

            <div class="color-choose">
              <div>
                <input data-image="red" type="radio" id="red" name="color" value="red" checked>
                <label for="red"><span></span></label>
              </div>
              <div>
                <input data-image="blue" type="radio" id="blue" name="color" value="blue">
                <label for="blue"><span></span></label>
              </div>
              <div>
                <input data-image="black" type="radio" id="black" name="color" value="black">
                <label for="black"><span></span></label>
              </div>
            </div>

          </div>

          <!-- Cable Configuration -->
          <div class="cable-config">
            <span>Quantity</span>
            <div class="quantity-choose">
              <select v-model="selected">
                <option v-for="option in options" :key="option.id">
                  {{ option.value }}
                </option>
              </select>
            </div>

            <a href="#">How to configurate your headphones</a>
          </div>
        </div>

        <!-- Product Pricing -->
        <div class="product-price">
          <span>&#8377;</span><h1>{{ product.price }}</h1> <span></span>
          <button @click="addProductToCart(product)" class="cart-btn">Add to Cart</button>
          <!-- <a href="#" class="cart-btn">Add to cart</a> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
    name: "Detail",
    data() {
      return {
        product: this.$store.getters.product(this.$route.params.id),
        selected: 1,
          options: [
            { value: 1},
            { value: 2},
            { value: 3},
            { value: 4},
            { value: 5},
            { value: 6},
            { value: 7},
            { value: 8},
            { value: 9},
            { value: 10},
            { value: 11},
          ]
      }

  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    }
  }
}
</script>

<style>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 5px;
  display: flex;
}

/* Columns */
.left-column {
  width: 50%;
  position: relative;
  margin-top: 70px;
}


ul.thumb{
margin: 0 auto;
    padding: 0;
    float: left;
}

ul.thumb li{
    list-style: none;
    margin: 5px;
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0,0,0,.2);
    overflow: hidden;
}

ul.thumb li img{
    width: 100%;
}

.imgBox{
    float: left;
    width: 500px;
    height: 500px;
    margin: 5px;
    border: 1px solid rgba(0,0,0,.2);
    overflow: hidden;
}

.imgBox img{
    width: 100%;
}

.right-column {
  width: 50%;
  margin-top: 140px;
}


/* Left Column */
.left-column img {
  display: flex;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  opacity: 1;
  transition: all 0.3s ease;
}

.left-column img.active {
  opacity: 1;
}


/* Right Column */

/* Product Description */
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  /* value-transform: uppercase;
  value-decoration: none;
} */
/* .product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
} */
/* .product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
} */

/* Product Configuration */
/* .product-color span,
.cable-config span {
  font-size: 14px;
  font-weight: 400;
  color: #86939E;
  margin-bottom: 20px;
  display: inline-block;
} */

/* Product Color */
/* .product-color {
  margin-bottom: 30px;
}

.color-choose div {
  display: inline-block;
}

.color-choose input[type="radio"] {
  display: none;
}

.color-choose input[type="radio"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
}

.color-choose input[type="radio"] + label span {
  border: 2px solid #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.33);
}

.color-choose input[type="radio"]#red + label span {
  background-color: #C91524;
}
.color-choose input[type="radio"]#blue + label span {
  background-color: #314780;
}
.color-choose input[type="radio"]#black + label span {
  background-color: #323232;
}

.color-choose input[type="radio"]:checked + label span {
  /* background-image: url(images/check-icn.svg); */
  /* background-repeat: no-repeat;
  background-position: center;
} */ 

/* Cable Configuration */
/* .quantity-choose {
  margin-bottom: 20px;
}

.cable-choose button {
  border: 2px solid #E1E8EE;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #5E6977;
  background-color: #fff;
  cursor: pointer;
  transition: all .5s;
}

.cable-choose button:hover,
.cable-choose button:active,
.cable-choose button:focus {
  border: 2px solid #86939E;
  outline: none;
}

.cable-config {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.cable-config a {
  color: #358ED7;
  value-decoration: none;
  font-size: 12px;
  position: relative;
  margin: 10px 0;
  display: inline-block;
}
.cable-config a:before {
  content: "?";
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid rgba(53, 142, 215, 0.5);
  display: inline-block;
  value-align: center;
  line-height: 16px;
  opacity: 0.5;
  margin-right: 5px;
} */

/* Product Price */
/* .product-price {
  display: flex;
  align-items: center;
}

.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}

.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  value-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}

/* Responsive */
/* @media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}

@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
} */ 
}
</style>