<template>
    <div class="page-header header-filter" filter-color="orange">
        <div class="page-header-image"
             style="background-image: url('img/login.jpg')">
        </div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <h3>Connexion</h3>
                    <card type="login" plain>

                        <fg-input addon-left-icon="now-ui-icons ui-1_email-85"
                                  v-model="email"
                                  placeholder="Email">
                        </fg-input>

                        <fg-input addon-left-icon="now-ui-icons text_caps-small"
                                  v-model="password"
                                  type ="password"
                                  placeholder="Mot de passe">
                        </fg-input>

                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                <a href="#" class="btn btn-primary btn-round btn-lg btn-block"
                                   @click.prevent="login">Se connecter</a>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from "vuex"
    import { Card, Button, FormGroupInput } from '@/components';

    export default {
        name: 'login-page',
        title: 'AC Conseils | Connexion',
        description: "Connexion à l'espace privé" ,
        bodyClass: 'login-page',
        components: {
            Card,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
            return {
                email: null,
                password: null,
                success: false,
                has_error: false,
                error: ''
            }
        },

        computed:{
            ...mapState(['token', 'loggedIn'])
        },

        methods: {
            ...mapActions(['loginUser']),


            login(){
                if (this.email.length > 0 && this.password.length > 0) {

                    this.loginUser({
                            email: this.email,
                            password: this.password,
                        },
                        {
                            headers: {
                                'Accept' : 'application/json'
                            }
                        })
                } else {
                    this.password = ""

                    return alert("Passwords do not match")
                }
            },
        },

        mounted(){
            console.log('token', this.token)
            console.log('loggedIn', this.loggedIn)
        }
    }
</script>
<style>
</style>
