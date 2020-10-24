import Axios from "axios";

const state = {
    products: [],
    cart: [],
    cartCount: []
};

const getters = {
    products: (state) => state.products,
    product: (state) => (id) => {
        return state.products.filter(p => p.id === Number(id))[0]
      },
    cartProducts(state) {
        return state.cart.map(cartItem => {
            const product = state.products.find(product => product.id === cartItem.id)
            return {
                id: product.id,
                image: product.img1,
                brand: product.brand,
                title: product.title,
                price: product.price,
                quantity: cartItem.quantity
            }
        })
    },
    cartCount: (state) => state.cart.length,
    cartTotal(state, getters){
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },
    featuredProducts: (state) => {
      return state.products.filter(p => p.featured)
    },
    availableProducts (state) {
      return state.products.filter(product => product.available > 0)
    }
};

const actions = {
    async fetchProducts({ commit }){
        const response = await Axios.get('http://localhost:3000/products');
        commit('setProducts', response.data);
    },
    async filterProducts({ commit }, e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await Axios.get(`http://localhost:3000/products?_limit=${limit}`);
        commit('setProducts', response.data);
    },
    addProductToCart (context, product) {
      if(product.available > 0){
        const cartItem = context.state.cart.find(item => item.id === product.id)
          if(!cartItem) {
            context.commit('pushProductCart', product.id)
          } else {
            context.commit('incrementItemQuantity', cartItem)
          }
          context.commit('decrementProductInventory', product)
      }else{
        alert(`${product.available} quantity available now.`)
      }
    },
    removeProductFromCart(context, product){
      if(product.quantity >0){
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if(cartItem){
          context.commit('removeFromCart', product)
        }
      }
    },
    incrementQuantity(context, product){
      if(product.quantity > 0){
        // console.log(product.id)
        //later on put limit according to product availability 
        const limit = parseInt(20)
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if(cartItem.quantity < limit){
          context.commit('incrementItemQuantity', cartItem)
        }else{
          const message="Sorry! product is not available";
          alert(message);
        }
        context.commit('decrementProductInventory', product)
      }
    },
    decrementQuantity(context, product){
      if(product.quantity > 0){
        const cartItem = context.state.cart.find(item => item.id === product.id);
        if(cartItem.quantity >0){
          context.commit('decrementItemQuantity', cartItem)
        }if(cartItem.quantity <= 0){
          context.commit("removeFromCart", product)
          const message = "Item has been removed from your cart!"
          alert(message)
        }else{
          console.log(cartItem.quantity)
        }
        context.commit('incrementProductInventory', product)
      }
  }
};

const mutations = {
      setProducts: (state, products) => (state.products = products),
      pushProductCart(state, productId) {
        state.cart.push({
          id: productId,
          quantity:1
        })
      },
      incrementItemQuantity(state, cartItem) {
        cartItem.quantity++  
      },
      decrementItemQuantity(state, cartItem) {
        cartItem.quantity--  
      },

      decrementProductInventory(state, product) {
        product.available--
      },
      incrementProductInventory(state, product) {
        product.available++
      },
      removeFromCart(state, product) {
        let indexToDelete = state.cart.indexOf(Number(product));
        state.cart.splice(indexToDelete, 1)
      },

};

export default {
    state,
    getters,
    actions,
    mutations
};