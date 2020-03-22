<template>
    <div class="wrapper contact-page">
        <HeadImage></HeadImage>

        <!--FEATURES-->
        <div class="about-description text-center">
            <div class="features-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h2 class="title">Écoute et Efficacité</h2>
                            <h4 class="description">Nous vous écoutons. Nous analisons vos besoins. Nous faisons les études comparatives
                            et en suite nous agissons avec éfficacité pour y repondre.</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-success icon-circle">
                                    <i class="now-ui-icons users_single-02"></i>
                                </div>
                                <h4 class="info-title text-success">Particulier</h4>
                                <p class="description">Regroupement avec une mensualité gratuite et franchise anglaise.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons business_briefcase-24"></i>
                                </div>
                                <h4 class="info-title text-info">Entreprise</h4>
                                <p class="description">Plan PME. mensualité gratuite et remboursement jusqu'à 15% de votre prime d'assurence.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-primary icon-circle">
                                    <i class="now-ui-icons media-2_sound-wave"></i>
                                </div>
                                <h4 class="info-title text-danger">Vie & Hospi</h4>
                                <p class="description">Rendement optimisé, securité integrale.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <div class="icon icon-warning icon-circle">
                                    <i class="now-ui-icons objects_support-17"></i>
                                </div>
                                <h4 class="info-title text-warning">Assistance juridique</h4>
                                <p class="description">Repense aux défis par l'action et les conseils des specialistes independants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--QUI SOMME NOUS-->
        <div class="team-3 section-image" style="background-image: url('img/project16.jpg')">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">AConseils, qui sommes-nous ?</h2>
                        <h4 class="description">AConseils, nous sommes des intermédiaires en assurances professionnels et totalement indépendants qui offrons des solutions sur mesures à nos affiliés pour la couvertures d’assurance de leurs patrimoines.
                            Nous garantissons un servie et un suivi personnalisé en partenariat avec nos partenaires dans le but de satisfaire au mieux les demandes de nos affiliés.
                            Si vous êtes intéressé par nos solutions, vous pouvez nous écrire via le menu « contact ».</h4>
                    </div>
                </div>
            </div>
        </div>

        <!--NOS PARTENAIRES-->
        <div class="our-clients section">
            <div class="container">
                <div class="text-center">
                    <h2 class="title">Nos partenaires</h2>
                </div>

                <div class="row">
                    <div class="col-md-3 ml-auto">
                        <img class="img-partenaire" v-lazy="'img/partenaires/arag.png'" alt="arag"/>
                    </div>
                    <div class="col-md-3 ml-auto">
                        <img class="img-partenaire" v-lazy="'img/partenaires/ardennes.png'" alt="ardennes"/>
                    </div>
                    <div class="col-md-3 ml-auto">
                        <img class="img-partenaire" v-lazy="'img/partenaires/cardif.png'" alt="cardif"/>
                    </div>
                    <div class="col-md-3">
                        <img class="img-partenaire" v-lazy="'img/partenaires/baloise.png'" alt="baloise"/>
                    </div>
                    <div class="col-md-3">
                        <img class="img-partenaire" v-lazy="'img/partenaires/das.png'" alt="das"/>
                    </div>
                    <div class="col-md-3">
                        <img class="img-partenaire" v-lazy="'img/partenaires/dkv.jpg'" alt="dkv"/>
                    </div>
                    <div class="col-md-3 mr-auto">
                        <img class="img-partenaire" v-lazy="'img/partenaires/euromex.png'" alt="euromex"/>
                    </div>
                    <div class="col-md-3 mr-auto">
                        <img class="img-partenaire" v-lazy="'img/partenaires/europ.jpg'" alt="europ"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Button, HeadImage,InfoSection, FormGroupInput } from '../components';
    import {mapState, mapActions, mapGetters, mapMutations} from "vuex"

    export default {
        name: 'accueil',
        bodyClass: 'contact-page',
        components: {
            HeadImage,
            InfoSection,
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
        },
        computed:{
            ...mapState(["token","loggedIn"])
        },
        mounted() {
            console.log('token',this.token)
            console.log('loggedIn', this.loggedIn)
            //console.log(this.$localStorage.token)
        }
    }
</script>
<style>
    .img-partenaire {
        padding: 15px;
        height: 80px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

</style>
