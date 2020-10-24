<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
    <b-navbar-brand><router-link to="/">My-Shop</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
                <template><b-avatar></b-avatar></template>
        <b-nav-item-dropdown right v-if="authenticated">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
           welcome {{user.name}}
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click.prevent="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right v-else>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            SignIn
          </template>
          <b-dropdown-item href="#">Register</b-dropdown-item>
          <b-dropdown-item><router-link to="/signin">SignIn</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <div>
            <b-button variant="dark">
              <router-link to="/cart">
               <b-icon icon="cart-check-fill" font-scale="1" variant="success"></b-icon>
                <b-badge variant="dark">{{ cartCount }}</b-badge>
              </router-link>
            </b-button>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-breadcrumb :items="items"></b-breadcrumb>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Navbar',
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    },
    computed: {
        ...mapGetters(['cartCount']),
        ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user',
        })
    },

    methods: {
      ...mapActions({
        signOutAction: 'auth/signOut'
      }),

      signOut () {
        this.signOutAction().then(() => {
          this.$router.replace({
            name: 'Home'
          })
        })
      }
    }
}
</script>

<style>
a {
  color: rgb(24, 22, 22);
}
a:hover {
   color: #1e2020;
}
</style>