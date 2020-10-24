import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product_Detail from '../views/Product_Detail.vue'
import Cart from '../views/Cart.vue'
import SignIn from '../views/SignIn.vue'
import Products from '../components/Products.vue'
// import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product_detail/:id',
    name: 'Product_Detail',
    component: Product_Detail,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name:'signin'
    //     })
    //   }
    // }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
