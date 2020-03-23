<template>
    <div>
        <div class="header-1">
            <div class="page-header header-filter">
                <div class="page-header-image" style="background-image: url('img/bg16.jpg')"></div>
                <div class="content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 ml-auto text-right">
                                <h1 class="title">Service Particulier </h1>
                                <h4 class="description">
                                    Que vous soyez Locataire ou Propriétaire<br>
                                    et en fonction de l’étendu de votre patrimoine<br>
                                    nous nous efforçons de vous couvrir<br>
                                    contre tout risque probable en mettant<br>
                                    une attention particulière sur les défauts.<br>
                                    Nous faisons en sort que notre repense soit <br>
                                    la plus compétitive possible.
                                </h4>
                                <br/>
                                <div class="buttons">
                                    <a href="#mess" class="btn btn-info btn-lg mr-3">
                                        Demander un devis
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Nos assurances-->
        <Pills></Pills>


        <div id="mess" class="section section-contact-us text-center">
            <div class="container">
                <h2 class="title">Contactez nous pour un offre</h2>
                <p class="description">Nous vous répondons dans les 24H</p>
                <div class="row">
                    <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
                        <label v-if="errors.nom" class="labelError">Nom est obligatoire.</label>
                        <fg-input
                                class="input-lg"
                                placeholder="Nom et Prénom"
                                v-model="form.nom"
                                addon-left-icon="now-ui-icons users_circle-08">
                        </fg-input>
                        <label v-if="errors.email" class="labelError">Email est invalide.</label>
                        <fg-input
                                class="input-lg"
                                placeholder="Email "
                                v-model="form.email"
                                addon-left-icon="now-ui-icons ui-1_email-85"
                                error = "oups!"
                                :class="[{valid: value && !error}, inputClasses]"
                                v-on:blur="emailBlured = true">
                        </fg-input>
                        <label v-if="errors.gsm" class="labelError">GSM est obligatoire.</label>
                        <fg-input
                                class="input-lg"
                                placeholder="GSM"
                                v-model="form.gsm"
                                addon-left-icon="now-ui-icons tech_mobile">
                        </fg-input>
                        <label v-if="errors.ddn" class="labelError">Date de nassance est vide.</label>
                        <fg-input
                                class="input-lg"
                                placeholder="Date de naissance"
                                v-model="form.ddn"
                                addon-left-icon="now-ui-icons ui-1_calendar-60">
                        </fg-input>
                        <fg-input
                                class="input-lg"
                                placeholder="Date de permis de conduire"
                                v-model="form.permis"
                                addon-left-icon="now-ui-icons business_badge">
                        </fg-input>
                        <label v-if="errors.message" class="labelError">Message est vide.</label>
                        <div class="textarea-container">
                            <textarea class="form-control"
                                      name="name" rows="4" cols="80"
                                      v-model="form.message"
                                      placeholder="Veuillez formuler votre demande en quelques mots simple, s'il vous plait">
                            </textarea>
                        </div>
                        <div class="send-button">
                            <a href="#" class="btn btn-primary btn-round btn-lg btn-block"
                               @click.prevent="sendForm">Envoyer</a>
                            <!-- event click ne marche pas avec n-button
                            <n-button type="primary" round block size="lg" v-on:click="sendForm" >Envoyer</n-button>
                            -->
                        </div>


                        <div class="form-wrap container">
                            <div v-if="!submitted">
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input
                                        v-model="email"
                                        v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                                        v-on:blur="emailBlured = true">
                                    <div class="invalid-feedback">A valid email is required</div>
                                </div>
                                <div class="form-group">
                                    <a type="submit" href="#" v-on:click.stop.prevent="submit" class="btn btn-lg btn-success">Submit</a>
                                </div>
                            </div>
                            <div v-else class="alert alert-success" role="alert">
                                <h5>Thank you</h5>
                                <p>Your validation was a success!</p>
                            </div>
                        </div><!--end form-wrapper-->





                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Pills from './components/Pills'
    import { Button, FormGroupInput } from '@/components';
    import {mapActions, mapMutations} from "vuex"
    export default {
        name: "Particulier",
        components:{
            Pills,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        },
        data(){
            return{
                errors: {
                    nom : false,
                    message : false,
                    ddn : false,
                    gsm : false,
                    email : false,
                },
                form:{
                    nom : "",
                    email : "",
                    message : "",
                    gsm: "",
                    ddn: "",
                    permis: ""
                },

                email : "",
                emailBlured : false,
                valid : false,
                submitted : false
            }
        },
        methods:{
            ...mapMutations(["VALID_EMAIL", "CHECK_VALUE"]),

            ...mapActions(['sendEmail']),

            validate : function(){
                this.emailBlured = true;
                if( this.validEmail(this.email)){
                    this.valid = true;
                }
            },
            validEmail : function(email) {
                var re = /(.+)@(.+){2,}\.(.+){2,}/;
                return re.test(email);
            },
            submit : function(){
                this.validate();
                if(this.valid){
                    //THIS IS WHERE YOU SUBMIT DATA TO SERVER
                    this.submitted = true;
                }
            }, //end submit

            /**
             * @return {boolean}
             */
            CHECK(value, error){
                return error = (value === '')
            },

            sendForm(){
                console.log(this.VALID_EMAIL(this.form.email))
                this.errors = [];

                if (!this.form.nom) {
                    this.errors.nom = "Nom est obligatoire."
                }
                if (!this.form.message) {
                    this.errors.message = "Message est vide."
                }
                if (!this.form.ddn) {
                    this.errors.ddn = "Date de nassance est vide."
                }
                if (!this.form.gsm) {
                    this.errors.gsm = 'GSM est obligatoire.'
                }
                if (!this.VALID_EMAIL(this.form.email)) {
                    this.errors.email = 'Email est invalide.'
                }

                console.log(this.errors)

                if (!this.errors.length) {


                    return true;
                }

            },
        },


    }
</script>

<style scoped>
    .labelError{ color: #fa7a50; float: left }
</style>