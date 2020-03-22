<template>
    <div class="wrapper contact-page">
        <!--Image HEAD -->
        <HeadImage></HeadImage>

        <!--CONTACTEZ-NOUS-->
        <div class="main">
            <div class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ml-auto mr-auto">
                            <h2 class="title">Envoyez nous un message</h2>
                            <p class="description">Vous pouvez nous contacter pour tout ce qui concerne nos produits.
                                Nous prendrons contact avec vous dans les plus brefs délais.
                                <br>
                                <br>
                            </p>
                            <form role="form" id="contact-form" method="post">
                                <label>Votre Nom</label>
                                <fg-input
                                    placeholder="Nom..."
                                    v-model="form.firstName"
                                    addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>

                                <label>Email addresse</label>
                                <fg-input
                                    placeholder="Email..."
                                    v-model="form.email"
                                    addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>
                                <label>Téléphone</label>

                                <fg-input
                                    placeholder="Téléphone..."
                                    v-model="form.phone"
                                    addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>

                                <div class="form-group">
                                    <label>Votre message</label>
                                    <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                                </div>
                                <div class="submit text-center">
                                    <n-button type="primary" round>Envoyez</n-button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5 ml-auto mr-auto">
                            <info-section type="primary"
                                          class="mt-5"
                                          icon="now-ui-icons location_pin">
                                <h4 class="info-title">Notre adresse</h4>
                                <p> Avenue Rogier 10,
                                    <br> 4000 Liège
                                </p>
                            </info-section>

                            <info-section type="primary"
                                          icon="now-ui-icons tech_mobile">
                                <h4 class="info-title">Appellez-nous</h4>
                                <p> Sabri El Amri
                                    <br> +32 489 12 34 56
                                    <br> Lun - Ven, 8:30-17:00
                                </p>
                            </info-section>

                            <info-section type="primary"
                                          icon="business_briefcase-24 now-ui-icons">
                                <h4 class="info-title">Information légale</h4>
                                <p> AConseils
                                    <br> N° Ent. · 0875146074
                                    <br> IBAN · BE91 0004 4215 3076
                                </p>
                            </info-section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Pour afficher Google Maps j'utilise simple iframe;
        L'autre moyen de l'afficher - c'est avec API_KEY, mais ça coute 300e -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5061.282464808288!2d5.565214527289389!3d50.633781248531946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fa034ff756bf%3A0x62c3829e2a0d3f37!2sAvenue%20Rogier%2010%2C%204000%20Li%C3%A8ge!5e0!3m2!1sfr!2sbe!4v1580774371112!5m2!1sfr!2sbe"
                width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

    </div>
</template>
<script>
    import { Button, HeadImage, InfoSection, FormGroupInput } from '../components';

    export default {
        name: 'contact-us',
        bodyClass: 'contact-page',
        components: {
            InfoSection,
            HeadImage,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
        },
        data() {
            return {
                form: {
                    firstName: '',
                    email: '',
                    phone: ''
                },
            }
        }
    }
</script>
<style>
    .form-control {
        height: inherit;
    }
    .main{
        text-align: left;
    }

</style>
