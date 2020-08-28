<template>
    <div class="page-header signup-page section-image">
        <div class="page-header-image"
             style="background-image: url('img/bg9.jpg')">
        </div>
        <div class="content">
            <!---->
            <div class="container">

                <div class="row justify-content-md-center">
                    <div class="col-6">
                        <div class="card card-signup">
                            <div class="card-body">
                                <h3 class="card-title text-center">Inscription</h3>
                                <div class="card-body">
                                    <div class="alert alert-danger" v-if="has_error && !success">
                                        <p v-if="error == 'registration_validation_error'">Validation Errors.</p>
                                        <p v-else>Error, can not register at the moment. If the problem persists, please contact an administrator.</p>
                                    </div>

                                    <flash-message></flash-message>
                                    <div class="row" id="FormValidation">
                                        <div class="col-lg-10 text-center ml-auto mr-auto col-md-8">
                                            <label v-if="errors.name" class="labelError">Nom est obligatoire.</label>
                                            <fg-input
                                                    class="input-lg"
                                                    placeholder="Nom"
                                                    v-model="form.name"
                                                    addon-left-icon="now-ui-icons users_circle-08">
                                            </fg-input>
                                            <label v-if="errors.email" class="labelError">Email est invalide.</label>
                                            <fg-input
                                                    class="input-lg"
                                                    placeholder="Email "
                                                    v-model="form.email"
                                                    addon-left-icon="now-ui-icons ui-1_email-85">
                                            </fg-input>

                                            <label v-if="errors.password" class="labelError">Mot de pass doit contenir de 7 à 15 caractères contenant au moins un chiffre numérique et un caractère spécial.</label>
                                            <fg-input
                                                    type="password"
                                                    class="input-lg"
                                                    placeholder="Mot de pass"
                                                    v-model="form.password"
                                                    addon-left-icon="now-ui-icons objects_key-25">
                                            </fg-input>
                                            <label v-if="errors.password_confirmation" class="labelError">Mot de pass n'est pas identique.</label>
                                            <fg-input
                                                    type="password"
                                                    class="input-lg"
                                                    placeholder="Confirmez mot de pass"
                                                    v-model="form.password_confirmation"
                                                    addon-left-icon="now-ui-icons objects_key-25">
                                            </fg-input>
                                            <div class="send-button">
                                                <a href="#" class="btn btn-info btn-round btn-lg btn-block"
                                                   @click.prevent="register">S'inscrire</a>
                                                <!-- event click ne marche pas avec n-button
                                                <n-button type="primary" round block size="lg" v-on:click="sendForm" >Envoyer</n-button>
                                                -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import { Button, FormGroupInput, Checkbox } from '@/components';
    import axios from "axios";

    export default {
        name: 'signup-page',
        title: 'AC Conseils | Inscrivez-vous',
        description: 'Inscription au site AC Conseils',
        bodyClass: 'signup-page',
        components: {
            [Button.name]: Button,
            [Checkbox.name]: Checkbox,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
            return {
                form : {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                errors: {},

                agree: false,

                has_error: false,
                error: '',
                success: false,

                is_admin : null,
            }
        },
        methods: {
            validEmail(email) {
                let re = /(.+)@(.+){2,}\.(.+){2,}/;
                return re.test(email);
            },
            checkPassword(inputtxt) {
                //   Mot de pass doit contenir de 7 à 15 caractères
                //   contenant au moins un chiffre numérique
                //   et un caractère spécial.
                let passwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
                return !!inputtxt.match(passwd);
            },
            register(){
                this.errors = {}
                //validation des champs
                if(this.form.email) {
                    if (this.validEmail(this.form.email) === false) {
                        this.errors.email = true
                    }
                }else{
                    this.errors.email = true
                }

                if(!this.form.password){
                    this.errors.password = true
                }else{
                    if( this.checkPassword(this.form.password) === true){
                        if( this.form.password_confirmation !== this.form.password){
                            this.errors.password_confirmation = true
                        }
                    } else{
                        this.errors.password = true
                    }
                }

                if( !this.form.name) {
                    this.errors.name = true
                }

                if (!Object.values(this.errors).some(value => true)) {
                    axios.post('auth/register',
                        {
                            name: this.form.name,
                            email: this.form.email,
                            password: this.form.password,
                            password_confirmation: this.form.password_confirmation,
                        },
                        {
                            headers: {
                                'Accept' : 'application/json'
                            }
                        })
                        .then(response => {
                            this.$router.push('/login')
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            }
        }
    }
</script>
<style>
    .labelError { color: #fa7a50; float: left; text-align:left; margin-bottom: 0px;}
    .signup-page { margin-bottom: 0;}
</style>
