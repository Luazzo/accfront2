<template>
    <div>
        <div class="header-1">
            <div class="page-header header-filter">
                <div class="page-header-image" style="background-image: url('img/all_family.jpg');
                background-repeat: no-repeat;background-size: cover;"></div>
                <div class="content-center" style="top: 65%;">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 ml-auto text-right">
                                <h1 class="title">Service Particulier </h1>
                                <h4 class="description" id="particL">
                                    Que vous soyez locataire ou propriétaire<br>
                                    et en fonction de l’étendue de votre patrimoine<br>
                                    nous vous couvrons<br>
                                    contre tout risque probable en mettant<br>
                                    une attention particulière sur les défauts.<br>
                                    Nous faisons en sorte que notre offre soit <br>
                                    la plus compétitive possible.
                                </h4>
                                <h4 class="description" id="particS">
                                    Que vous soyez locataire ou propriétaire
                                    nous vous couvrons contre tout risque probable.
                                    Nous faisons en sorte que notre offre soit
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

        <div class="separator-line separator-primary"></div>

        <div id="mess" class="section section-contact-us text-center">
            <div class="container">
                <h2 id="titleMess" class="title">Contactez-nous pour une offre</h2>
                <p class="description">Nous vous répondons dans les 24H</p>
                <flash-message></flash-message>
                <div class="row" id="FormValidation">
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
                                addon-left-icon="now-ui-icons ui-1_email-85">
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
                                      placeholder="Veuillez formuler votre demande en quelques mots simples, s'il vous plait">
                            </textarea>
                        </div>
                        <div class="send-button">
                            <a href="#" class="btn btn-primary btn-round btn-lg btn-block"
                               @click.prevent="sendForm" id="button">Envoyer</a>
                            <!-- event click ne marche pas avec n-button
                            <n-button type="primary" round block size="lg" v-on:click="sendForm" >Envoyer</n-button>
                            -->
                        </div>


                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import Pills from './components/Pills'
    import { Button, FormGroupInput } from '@/components';
    import axios from "axios";
    import emailjs from "emailjs-com";
    export default {
        name: "Particulier",
        title: 'AC Conseils | Particulier',
        description: "Que vous soyez locataire ou propriétaire et en fonction de l’étendue de votre patrimoine...",
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
            }
        },
        methods:{

            validEmail(email) {
                let re = /(.+)@(.+){2,}\.(.+){2,}/;
                return re.test(email);
            },

            videChamps(form){
                for (const prop in form) {
                    this.form[prop]  = ''
                }
            },

            /*sendForm(){
                this.errors = {};
                //validation des champs
                for (const prop in this.form) {
                    if(prop === "email") {
                        if (this.validEmail(this.form.email) === false) {
                            this.errors.email = true
                        }
                    }else if( prop === "permis" ) {
                        continue
                    }else if( !this.form[prop] ) {
                        this.errors[prop] = true
                    }
                }
                //Je verifie est-e qu'il y a au moins un TRUE d'error et si non j'appelle une fonction envoyer un email.
                if(!Object.values(this.errors).some(value => true)) {
                    axios.post('contact-particulier', this.form )
                        .then(response => {
                            if(response.status === 200){
                                this.videChamps(this.form)
                                this.flash('Merci! Votre message est bien envoyé.', 'success', {
                                    timeout: 4000,
                                });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }
            },*/

            sendForm(){
                this.errors = {};
                //validation des champs
                for (const prop in this.form) {
                    if(prop === "email") {
                        if (this.validEmail(this.form.email) === false) {
                            this.errors.email = true
                        }
                    }else if( prop === "permis" ) {
                        continue
                    }else if( !this.form[prop] ) {
                        this.errors[prop] = true
                    }
                }
                //Je verifie est-e qu'il y a au moins un TRUE d'error et si non j'appelle une fonction envoyer un email.
                if(!Object.values(this.errors).some(value => true)) {
                    const btn = document.getElementById('button');
                    btn.innerHTML = 'Envoie...';

                    const serviceID = 'default_service';
                    const templateID = 'template_syq5jgn';
                    const userID = 'user_3boUT3tUdBqFcee9hbni7';

                    let templateParams = {
                        from_name: this.form.nom,
                        reply_to : this.form.email,
                        message : {
                            nom : this.form.nom,
                            email : this.form.email,
                            message : this.form.message,
                            gsm: this.form.gsm,
                            ddn: this.form.ddn,
                            permis: this.form.permis,
                        },
                    };
                    console.log(templateParams)

                    emailjs.send(serviceID, templateID, templateParams, userID)
                        .then(() => {
                            btn.innerHTML = 'Envoyer';
                            this.videChamps(this.form)
                            this.flash('Merci! Votre message est bien envoyé.', 'success', {
                                timeout: 4000,
                            });
                        }, (err) => {
                            btn.value = 'Send Email';
                            alert(JSON.stringify(err));
                        });/**/


                }
            },
        },
        created(){
                 // console.log("Que vous soyez locataire ou propriétaire et en fonction de l’étendue de votre patrimoine,...".length);

        }
    }



</script>

<style lang="scss">

    @media (max-width: 480px){
        #particL{
            visibility: hidden;
        }
        #particS{
            visibility: visible;
        }
    }
    @media (min-width: 481px){
        #particL{
            visibility: visible;
        }
        #particS{
            visibility: hidden;
        }
    }
</style>
<style scoped>
    .labelError{ color: #fa7a50; float: left; margin-bottom: 0px;}

</style>