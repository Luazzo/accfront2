<template>

    <div class="row slider-content" style="background-color: orange;">

        <!--si l'ecran est plus grand que 768px-->

        <div class="col-md-2 promo"></div>

        <div class="mr-auto ml-auto" :class="widthCarousel">
            <el-carousel height="setHeight">

                <el-carousel-item class="promoLien" v-for="promo in promos" :key="promo.id">
                    <router-link :to="{ name:'promo', params: { id: promo.id }}">
                        <promo :promo="promo"></promo>
                    </router-link>
                </el-carousel-item>

            </el-carousel>
        </div>
        <div class="col-md-2 promo"></div>
    </div>

</template>

<script>
    import { Carousel, CarouselItem} from 'element-ui';
    import {mapActions, mapState} from "vuex";
    import Promo from "./Promo";

    export default {
        name: "Promos",
        components: {
            Promo,
            [Carousel.name]: Carousel,
            [CarouselItem.name]: CarouselItem,
        },
        computed:{
            ...mapState(["promos"]),
            setHeight(){
                return (screen.width<768)? "100px": "150px";
            },
            // eslint-disable-next-line vue/return-in-computed-property
            widthCarousel(){
                return (screen.width>1000)? "col-md-8":"col-md-12";
            }
        },
        methods:{
            ...mapActions(['getPromos']),
        },
        mounted() {
            this.getPromos();
            console.log("setHeight", this.setHeight);
            console.log("screen.width", screen.width);
        }
    }
</script>

<style lang="scss">
    .promo{
        background-image:  url('/img/promo.png');
        background-repeat: no-repeat;
        background-position: center center;
        height: 150px;
        background-size: 100% auto;
    }
    .promoLien a:hover {
        text-decoration: none;
    }
    .slider-content {
        height: 150px;
    }
    @media screen and (max-width: 1000px){
        .slider-content{
            height: 125px;
        }
        .promo{
            display: none;
        }
    }

    .el-carousel__indicator{
        display: none;
    }
</style>