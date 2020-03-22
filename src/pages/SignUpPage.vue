<template>
    <div class="page-header signup-page section-image">
        <div class="page-header-image"
             style="background-image: url('img/bg18.jpg')">
        </div>
        <div class="content">
            <!---->
            <div class="container">

                <div class="row justify-content-md-center">
                    <div class="col-6">
                        <div class="card card-signup">
                            <div class="card-body">
                                <h4 class="card-title text-center">Register</h4>
                                <div class="card-body">
                                    <div class="alert alert-danger" v-if="has_error && !success">
                                        <p v-if="error == 'registration_validation_error'">Validation Errors.</p>
                                        <p v-else>Error, can not register at the moment. If the problem persists, please contact an administrator.</p>
                                    </div>


                                    <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
                                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.name }">
                                            <input  addon-left-icon="now-ui-icons users_circle-08"
                                                    v-model="name"
                                                    type="text" id="name" class="form-control" placeholder="Name">
                                            <span class="help-block" v-if="has_error && errors.name">{{ errors.name }}</span>
                                        </div>
                                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">
                                            <input type="email" id="email" class="form-control"
                                                   placeholder="user@example.com" v-model="email">
                                            <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
                                        </div>
                                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                                            <input type="password" id="password" class="form-control" v-model="password">
                                            <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
                                        </div>
                                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                                            <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation">
                                        </div>
                                        <div class="card-footer text-center">
                                             <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>

                                <!--
                                <fg-input addon-left-icon="now-ui-icons users_circle-08"
                                          v-model="form.firstName"
                                          placeholder="First Name...">
                                </fg-input>

                                <fg-input addon-left-icon="now-ui-icons text_caps-small"
                                          v-model="form.lastName"
                                          placeholder="Last Name...">
                                </fg-input>

                                <fg-input addon-left-icon="now-ui-icons ui-1_email-85"
                                          v-model="form.email"
                                          placeholder="Your Email...">
                                </fg-input>

                                <n-checkbox v-model="form.agree">
                                    I agree to the terms and
                                    <a href="#something">conditions</a>.
                                </n-checkbox>
                                <div class="card-footer text-center">
                                    <n-button type="primary" round size="lg">Get Started</n-button>
                                </div>

                                -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import { Card, Button, FormGroupInput, Checkbox } from '@/components';
    import MainFooter from '@/layout/MainFooter';

    export default {
        name: 'signup-page',
        bodyClass: 'signup-page',
        components: {
            Card,
            MainFooter,
            [Button.name]: Button,
            [Checkbox.name]: Checkbox,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',

                agree: false,

                has_error: false,
                error: '',
                errors: {},
                success: false,

                is_admin : null,
            }
        },
        methods: {
            register(){
                if (this.password === this.password_confirmation && this.password.length > 0) {
                    let url = "register"
                    /*if(this.is_admin != null || this.is_admin == 1) url = "http://localhost:8000/register-admin"*/
                    this.$http.post(url, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                       // is_admin: this.is_admin
                    })
                    .then(response => {
                        /*localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{*/
                                this.$router.push('/login')
                            /*}
                        }*/
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                } else {
                    this.password = ""
                    this.password_confirmation = ""

                    return alert("Passwords do not match")
                }
            }
            /*register() {
                var app = this
                this.$auth.register({
                    data: {
                        name: app.name,
                        email: app.email,
                        password: app.password,
                        password_confirmation: app.password_confirmation
                    },
                    success: function () {
                        console.log(res.response.data)
                        app.success = true
                        this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
                    },
                    error: function (res) {
                        console.log(res.response.data.errors)
                        app.has_error = true
                        app.error = res.response.data.error
                        app.errors = res.response.data.errors || {}
                    }
                })
            }*/
        }
    }
</script>
<style>
</style>
