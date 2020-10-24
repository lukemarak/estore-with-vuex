<template>
<b-jumbotron bg-variant="secondary">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <router-link to="/about">Fun and prolick</router-link>
                <router-link to="faq">Lorem ipsum dolor sit.</router-link>
                <router-link to="faq">Lorem ipsum dolor sit.</router-link>
                <p>For more information visit website</p>
                <b-button variant="primary" href="#">More Info</b-button>
            </div>
            <div class="col-md-3">
                <router-link to="/about">About-US</router-link>
                <router-link to="/about">Lorem ipsum dolor sit.</router-link>
                <router-link to="/about">Lorem ipsum dolor sit.</router-link>
                <p>For more information visit website</p>
                <b-button variant="primary"><router-link to="/about">More Info</router-link></b-button>
            </div>
            <div class="col-md-3">
                <router-link to="/policy">Privacy-Policy</router-link>
                <router-link to="/policy">Podfgjdfgjlicy</router-link>
                <router-link to="/policy">Policy</router-link>
                <router-link to="/policy">Lorem ipsum dolor sit.</router-link>
                <p>For more information visit website</p>
                <b-button variant="primary" href="#">More Info</b-button>
            </div>
            <div class="col-md-3">
                <router-link to="/policy">Privacy-Policy</router-link>
                <router-link to="/policy">Podfgjdfgjlicy</router-link>
                <router-link to="/policy">Policy</router-link>
                <p>For more information visit website</p>
                <b-button variant="primary" href="#">More Info</b-button>
            </div>
        </div>
  </div>
  </b-jumbotron>
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style>

</style>