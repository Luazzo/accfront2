<template>
    <div class="wrapper contact-page">
        <HeadImage></HeadImage>


        <!--BANNERS-->
        <div class="section " style="background-color: #eee; padding-top: 50px; padding-bottom: 50px;">
            <a  target="_blank" style="display:inline-block; padding-bottom: 30px;" href="https://www.dkv.be/fr/dkv-insureme?agent_id=999260&token=14813WdOyjrPcRiDQMhxC3IGQMwlEar6b0wMAd2BLmvVx2qU999260579&utm_source=agent_999260&utm_campaign=purl_generator&product=579&product_category=579#dkv-579">
                <img class="img-raised" src="img/partenaires/b2c_purl_web_insureme_970x250_202006_fr.png"  alt="dkv">
            </a>
            <a  target="_blank" href="https://www.europ-assistance.be/assurance-voyage?&AgtNum=salose">
                <img class="img-raised" src="img/partenaires/europassistance.jpg"  alt="europassistance">
            </a>
        </div>


        <!--FEATURES-->
        <div class="about-description text-center">
            <div class="features-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h2 class="title">Écoute et Efficacité</h2>
                            <h4 class="description">Nous vous écoutons. Nous analysons vos besoins. Nous faisons les études comparatives
                                et ensuite nous agissons avec efficacité pour y répondre.</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <router-link :to="{ name:'particulier'}">
                                    <div class="icon icon-success icon-circle">
                                        <i class="now-ui-icons users_single-02"></i>
                                    </div>
                                </router-link>
                                <h4 class="info-title text-success">Particulier</h4>
                                <p class="description">Regroupement avec une mensualité gratuite et franchise anglaise.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <router-link :to="{ name:'entreprise'}">
                                    <div class="icon icon-info icon-circle">
                                        <i class="now-ui-icons business_briefcase-24"></i>
                                    </div>
                                </router-link>
                                <h4 class="info-title text-info">Entreprise</h4>
                                <p class="description">Plan PME. Mensualité gratuite et remboursement jusqu'à 15% de votre prime d'assurance.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <router-link :to="{ name:'accueil'}">
                                    <div class="icon icon-primary icon-circle">
                                        <i class="now-ui-icons media-2_sound-wave"></i>
                                    </div>
                                </router-link>
                                <h4 class="info-title text-danger">Vie & Hospi</h4>
                                <p class="description">Rendement optimisé, sécurité intégrale.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="info info-hover">
                                <router-link :to="{ name:'accueil'}">
                                    <div class="icon icon-warning icon-circle">
                                        <i class="now-ui-icons objects_support-17"></i>
                                    </div>
                                </router-link>
                                <h4 class="info-title text-warning">Assistance juridique</h4>
                                <p class="description">Réponse aux défis par l'action et les conseils des spécialistes indépendants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--QUI SOMME NOUS-->
        <div style="background-color: dimgray;">
            <div class="team-3 section-image" style="background-image: url(img/sabri.jpg);
                                                 background-position: left top;
                                                 position: relative;
                                                 background-size:cover; height: inherit;
                                                 background-repeat:no-repeat; ">
                <div class="container" >
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto text-center">
                            <h2 class="title">Qui sommes-nous ?</h2>
                            <h4 class="description">Nous sommes des intermédiaires en assurances professionnels et totalement indépendants qui offrons des solutions sur mesures à nos affiliés pour la couvertures d’assurance de leurs patrimoines.
                                Avec nos partenaires, nous garantissons un service et un suivi personnalisés dans le but de satisfaire au mieux les demandes de nos affiliés.
                                Intéressé par nos solutions? Ecrivez-nous via le menu « contact ».</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--SLIDER PROMOS-->
        <!--<Promos></Promos>-->


        <!--NOS PARTENAIRES-->
        <div class="our-clients section">
            <div class="container">
                <div class="text-center">
                    <h2 class="title">Nos partenaires</h2>
                </div>

               <!-- <div class="row">
                    <compagny v-for="compagny in compagnies" :key="compagny.id" :compagny="compagny"></compagny>
                </div>-->


                <div class="row">
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://www.arag.be/fr/blog/business/des-conditions-generales-pourquoi-est-ce-utile-/" title="Conditions générales">
                            <div style="background: url('img/partenaires/arag.png') center center / contain no-repeat; height: 50px;"></div>
                        </a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="http://www.ardenneprevoyante.be/fr/conditions-generales" title="Conditions générales">
                            <div style="background: url('img/partenaires/ardennes.png') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://bnpparibascardif.be/documents/66925/93266/201702_CG_stpp+_FR/05ec10f7-839f-8429-bff6-d05414f27f5f" title="Conditions générales">
                            <div style="background: url('img/partenaires/cardif.jpg') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://www.baloise.be/fr/contact-service/conditions-generales.html" title="Conditions générales">
                            <div style="background: url('img/partenaires/baloise.png') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://www.das.be/das/ewcm/ewcm.nsf/0/643EDA480ADF733BC1257FBD0037EF9E/$file/F5010%20Conditions%20ge%CC%81ne%CC%81rales.pdf" title="Conditions générales">
                            <div style="background: url('img/partenaires/das.png') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://biblio.dkv.be/pdfbib.ashx?lang=fr&amp;id=11901.pdf" title="Conditions générales">
                        <div style="background: url('img/partenaires/arena.jpg') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://www.euromex.be/fr/conditions-de-polices" title="Conditions générales">
                        <div style="background: url('img/partenaires/europ.jpg') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://www.arag.be/fr/blog/business/des-conditions-generales-pourquoi-est-ce-utile-/" title="Conditions générales">
                        <div style="background: url('img/partenaires/Dela.jpg') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="https://www.dela.be/-/media/Corporate/Documenten/Conditions%20generales%202019.ashx?la=fr" title="Conditions générales">
                        <div style="background: url('img/partenaires/dkv.jpg') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                    <div class="col-md-3 ml-auto compagny">
                        <a target="_blank" href="http://arena-nv.be/storage/XmpW9VDPimaOgQu5xUHhHPokJBsYolOG8tgWYpHN.pdf" title="Conditions générales">
                        <div style="background: url('img/partenaires/euromex.jpg') center center / contain no-repeat; height: 50px;"></div></a>
                    </div>
                </div>

            </div>
        </div>




        <!--MY BROKER-->
        <div id="mybroker" class="subscribe-line subscribe-line-image"
             style="background-image: url('img/project15-blue.jpg');
                    position: relative; padding: 0; width: 100%; ">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 ">
                        <div class="text-right">
                            <h4 class="title">
                                <span style="color: #ffbe55">MyBroker</span>,<br>
                                votre courtier toujours à portée de main !
                            </h4>
                            <p class="description">
                                Grâce à MyBroker, <br>
                                consultez vos assurances et communiquez avec votre courtier.
                            </p>
                        </div>
                        <div style="margin-top: 20px; margin-bottom: 30px; float: right;">
                            <p>
                                <img src="img/download.svg" alt="download">
                                <span style="text-transform: uppercase; padding-left: 2%; color: white; font-weight: bold;">Télécharger MyBroker</span>
                            </p>
                            <div>
                                <a href="https://apps.apple.com/be/app/mybroker-en/id517191352?l=fr">
                                    <img src="img/app-store.svg" alt="app-store" class="downloads">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.portima.mybroker&hl=fr">
                                    <img src="img/google-play.svg" alt="google-play">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 " style="position: relative; min-height:300px; ">
                        <div style=" width:100%; height:90%;
                            position: absolute; bottom: 0;  z-index: 3;
                            background-image: url('img/mybroker.png'); background-size: contain;
                            background-repeat: no-repeat; background-position: right 20% bottom 0%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Button, HeadImage, FormGroupInput } from '../components';
    import {mapState, mapActions} from "vuex"
    import Compagny from "../pages/components/Compagny"
    import Promos from "../pages/components/Promos"
    import axios from "axios";

    export default {
        name: 'accueil',
        title: 'Assurances-Audit-Conseils  | Accueil',
        description: 'Nous vous écoutons. Nous analysons vos besoins. Nous faisons les études comparatives...',
        bodyClass: 'contact-page',
        components: {
            Compagny,
            Promos,
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
        },
        computed:{
            ...mapState(["token","loggedIn","compagnies"])
        },
        methods:{
            ...mapActions(['getCompagnies'])
        },
        mounted() {
            const url = "https://admin.acconseils.be/api/compagnies"; // site that doesn’t send Access-Control-*
            //let headers = new Headers();

           // headers.append('Content-Type', 'application/json');
         //   headers.append('Accept', 'application/json');
          //  headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
          //  headers.append('Origin','*');

            fetch(url)

            .then(response => response.text())
            .then(contents => console.log(contents))
            .catch(() => console.log())
            //localStorage.clear();
            //this.getCompagnies();
            //this.getPromos();
            //console.log(this.axios.defaults.baseURL)
            //console.log('token',this.token)
            //console.log('loggedIn', this.loggedIn)
        }
    }
</script>
<style lang="scss">

</style>
<style>
    .downloads{
        margin-right: 20px;
    }
    .container::after {
        content: "";
        display: block;
        clear: both;
    }
    .img-partenaire {
        padding: 0;
        display: block;
        margin: auto 0 ;
    }

    .compagny{
        padding-bottom: 40px; margin-right: auto; margin-left: auto;
    }

</style>
