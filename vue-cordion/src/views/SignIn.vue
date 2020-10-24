<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <h1>Left</h1>
        </div>
        <div class="col-md-6 text-center">
            <form @submit.prevent="submit">   
                <div>
                    <label for="email">
                        Email
                    </label>
                    <input type="text" name="email" id="email" v-model="form.email">
                </div>
                <div>
                    <label for="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" v-model="form.password">
                </div>
                <div>
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
        <div class="col-md-3">
            <h1>Right</h1>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'signin',
    data () {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        submit() {
            this.signIn(this.form).then(()=>{
                this.$router.replace({
                    name:'Home'
                })
            })
        }
    }
}  
</script>

<style>

</style>