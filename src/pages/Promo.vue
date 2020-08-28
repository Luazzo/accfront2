<template>
    <div>
        <div class="header-1">
            <div class="page-header header-filter">
                <div class="page-header-image" style="background-image: url('../img/percent.jpg')"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ml-auto text-center">
                            <h1 class="title">{{promo.titre}} </h1>
                            <p>{{promo.texte}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blogs-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 ml-auto mr-auto">
                        <h2 class="title">Promotions</h2>
                        <br />
                        <card type="blog" plain>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card-image">
                                        <img class="img img-raised rounded" src="img/examples/card-blog10.jpg" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <h3 class="card-title">
                                        <a href="#pablo">Rover raised $65 million for pet sitting</a>
                                    </h3>
                                    <p class="card-description">
                                        Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses..
                                        <a href="#pablo"> Read More </a>
                                    </p>
                                    <div class="author">
                                        <img v-lazy="'img/olivia.jpg'" alt="..." class="avatar img-raised">
                                        <span>Katie Roof</span>
                                    </div>
                                </div>
                            </div>
                        </card>
                        <card type="blog" plain>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded" src="img/examples/card-blog11.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <h3 class="card-title">
                                        <a href="#pablo">MateLabs mixes machine learning with IFTTT</a>
                                    </h3>
                                    <p class="card-description">
                                        If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with a new offering from MateLabs. MateVerse, a platform where novices can spin out machine...
                                        <a href="#pablo"> Read More </a>
                                    </p>
                                    <div class="author">
                                        <img v-lazy="'img/james.jpg'" alt="..." class="avatar img-raised">
                                        <span>John Mannes</span>
                                    </div>
                                </div>
                            </div>
                        </card>
                        <card type="blog" plain>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card-image">
                                        <a href="#pablo">
                                            <img class="img img-raised rounded" src="img/examples/card-blog12.jpg" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <h3 class="card-title">
                                        <a href="#pablo">US venture investment ticks up in Q2 2017</a>
                                    </h3>
                                    <p class="card-description">
                                        Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare..
                                        <a href="#pablo"> Read More </a>
                                    </p>
                                    <div class="author">
                                        <img v-lazy="'img/michael.jpg'" alt="..." class="avatar img-raised">
                                        <span>Devin Coldewey</span>
                                    </div>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { Card, Button, Badge, InfoSection, FormGroupInput } from '@/components';
    import {mapState} from "vuex";

    export default {
        name: "promo",
        title: 'AC Conseils | Promo',
        description: 'Découvrez nos promotions',
        data(){
            return{
            }
        },
        components: {
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput,
        },
        computed:{
            ...mapState(['promo', 'compagnies'])
        },
        methods:{
        },
        mounted(){
            this.$store.dispatch('getPromo', this.$route.params.id)
            this.$store.dispatch('getCompagnies')
            //console.log(this.$route.params.id)
        }

    }
</script>

<style scoped>

</style>