<template>
    <div>
        <div class="header-1">
            <div class="page-header header-filter">
                <div class="page-header-image" style="background-image: url('img/plan_masson.jpg')"></div>
                <div class="content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 ml-auto text-right">
                                <h1 class="title">Entreprises et Professionnels </h1>
                                <h4 class="description">
                                    Vous avez besoin d'un courtier indépendant <br>
                                    ayant l'expérience nécessaire?<br>
                                    Nous vous apportons la solution <br>
                                    qui répond à votre activité.

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

        <div class="projects-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h4 class="description">Nous sommes à votre disposition tant pour analyser vos besoins <br>
                            que pour souscrire des polices adaptées à vos besoins, <br>
                            par ailleurs nous vous conseillons dans la gestion de vos assurances <br>
                            et dans le suivie de vos sinistres.</h4>
                        <div class="section-space"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 ml-auto">
                        <!-- <card type="background" raised class="card-background-product"
                               style="background-image: url('img/calculatrice.jpg')">
                             <h2 class="card-title"></h2>
                             <p class="card-description">
                             </p>
                             <badge type="neutral"></badge>
                         </card>-->
                        <img src="img/avantages.jpg" alt="avantages">
                    </div>

                    <div class="col-md-5 mr-auto">
                        <h3 class="title" style="padding-top: 0; margin-bottom: 0;">Quelques-uns de nos avantages     </h3>
                        <info-section type="danger"
                                      icon="now-ui-icons business_chart-pie-36"
                                      title="Un plan"
                                      description="Regroupement de vos assurances dans un plan PME."
                        />
                        <info-section type="danger"
                                      icon="now-ui-icons ui-2_like"
                                      title="Prime"
                                      description="Mensualisation gratuite de votre prime."
                        />
                        <info-section type="danger"
                                      icon="now-ui-icons arrows-1_refresh-69"
                                      title="Ristourne jusqu'à 15% "
                                      description="Restitution d’une part de votre prime annuelle (jusqu’à 15%)."
                        />
                        <info-section type="danger"
                                      icon="now-ui-icons business_money-coins"
                                      title="Avantageux"
                                      description="Tarifs avantageux."
                        />
                        <info-section type="danger"
                                      icon="now-ui-icons shopping_delivery-fast"
                                      title="Tarif spécial"
                                      description="Tarif spécial pour les flottes et véhicules."
                        />
                    </div>
                </div>
                <hr/>

                <!--<div id="mess" class="section section-contact-us text-center">
                    <div class="container">
                        <h2 class="title">Contactez-nous pour un offre</h2>
                        <p class="description">Nous vous répondons dans les 24H</p>
                        <flash-message></flash-message>
                        <div class="row" id="FormValidation">
                            <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
                                <label v-if="errors.entreprise" class="labelError">Nom de l'entreprise est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Nom de l'entreprise"
                                        v-model="form.entreprise"
                                        addon-left-icon="now-ui-icons business_briefcase-24">
                                </fg-input>
                                <label v-if="errors.personne" class="labelError">Personne de contact est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Personne de contact"
                                        v-model="form.personne"
                                        addon-left-icon="now-ui-icons business_badge">
                                </fg-input>

                                <label v-if="errors.tva" class="labelError">Numéro de TVA est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Numéro de TVA"
                                        v-model="form.tva"
                                        addon-left-icon="now-ui-icons travel_info">
                                </fg-input>


                                <label v-if="errors.numero" class="labelError">Numéro de l'entreprise est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Numéro d'entreprise "
                                        v-model="form.numero"
                                        addon-left-icon="now-ui-icons objects_key-25">
                                </fg-input>

                                <label v-if="errors.tel" class="labelError">Téléphone est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Téléphone"
                                        v-model="form.tel"
                                        addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>

                                <label v-if="errors.email" class="labelError">Email est invalide.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Email"
                                        v-model="form.email"
                                        addon-left-icon="now-ui-icons ui-1_email-85">
                                </fg-input>
                                <label v-if="errors.message" class="labelError">Message est obligatoire.</label>
                                <div class="textarea-container">
                                    <textarea class="form-control"
                                              name="name" rows="4" cols="80"
                                              v-model="form.message"
                                              placeholder="Veuillez formuler votre demande en quelques mots simples, s'il vous plait">
                                    </textarea>
                                </div>
                                <div class="send-button">
                                    <a href="#" class="btn btn-primary btn-round btn-lg btn-block"
                                       @click.prevent="sendForm">Envoyer</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>-->

                <div id="mess" class="section section-contact-us text-center">
                    <div class="container">
                        <h2 class="title">Contactez-nous pour un offre</h2>
                        <p class="description">Nous vous répondons dans les 24H</p>
                        <flash-message></flash-message>
                        <div class="row" id="FormValidation">
                            <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
                                <label v-if="errors.entreprise" class="labelError">Nom de l'entreprise est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Nom de l'entreprise"
                                        v-model="form.entreprise"
                                        addon-left-icon="now-ui-icons business_briefcase-24">
                                </fg-input>
                                <label v-if="errors.personne" class="labelError">Personne de contact est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Personne de contact"
                                        v-model="form.personne"
                                        addon-left-icon="now-ui-icons business_badge">
                                </fg-input>

                                <label v-if="errors.tva" class="labelError">Numéro de TVA est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Numéro de TVA"
                                        v-model="form.tva"
                                        addon-left-icon="now-ui-icons travel_info">
                                </fg-input>


                                <label v-if="errors.numero" class="labelError">Numéro de l'entreprise est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Numéro d'entreprise "
                                        v-model="form.numero"
                                        addon-left-icon="now-ui-icons objects_key-25">
                                </fg-input>

                                <label v-if="errors.tel" class="labelError">Téléphone est obligatoire.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Téléphone"
                                        v-model="form.tel"
                                        addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>

                                <label v-if="errors.email" class="labelError">Email est invalide.</label>
                                <fg-input
                                        class="input-lg"
                                        placeholder="Email"
                                        v-model="form.email"
                                        addon-left-icon="now-ui-icons ui-1_email-85">
                                </fg-input>
                                <label v-if="errors.message" class="labelError">Message est obligatoire.</label>
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
    import { Card, Button, Badge, InfoSection, FormGroupInput } from '@/components';
    import axios from "axios";
    import emailjs from 'emailjs-com';
    export default {
        name: "Entreprise",
        title: 'AC Conseils | Entreprises',
        description: "Vous avez besoin d'un courtier indépendant ayant l'expérience nécessaire?",
        components: {
            Card,
            InfoSection,
            Badge,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
        },
        data(){
            return{
                errors: {
                    entreprise : false,
                    personne : false,
                    tva : false,
                    numero : false,
                    tel : false,
                    email : false,
                    message : false,
                },
                form:{
                    entreprise : "",
                    personne : "",
                    tva : "",
                    numero : "",
                    tel : "",
                    email : "",
                    message : "",
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
                    }else if( prop === "tva" || prop === "numero" ) {
                        continue
                    }else if( !this.form[prop] ) {
                        this.errors[prop] = true
                    }
                }

                //Je verifie est-e qu'il y a au moins un TRUE d'error et si non j'appelle une fonction envoyer un email.
                if(!Object.values(this.errors).some(value => true)) {
                    axios.post('contact-entreprise', this.form )
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
                    }else if( prop === "tva" || prop === "numero" ) {
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
                    const templateID = 'template_18kyl33';
                    const userID = 'user_3boUT3tUdBqFcee9hbni7';

                    let templateParams = {
                        from_name: this.form.entreprise,
                        reply_to : this.form.email,
                        message : {
                            entreprise: this.form.entreprise,
                            personne: this.form.personne,
                            tva: this.form.tva,
                            numero: this.form.numero,
                            tel: this.form.tel,
                            email: this.form.email,
                            message: this.form.message,
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
    }
</script>

<style scoped>
    .labelError{ color: #fa7a50; float: left; margin-bottom: 0px;}
    .section{padding: 0;}

</style>