<template>

    <div class="row " style="background-color: orange;">
        <div class="col-md-2 promo"></div>

        <div class="col-md-8  mr-auto ml-auto">
            <el-carousel height="150px">

                <el-carousel-item class="promoLien" v-for="promo in promos" :key="promo.id">
                    <router-link :to="{ name:'promo', params: { id: promo.id }}">
                        <Promo :promo="promo"></Promo>
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
        },
        methods:{
            ...mapActions(['getPromos']),
        },
        mounted() {
            this.getPromos();
           // console.log(this.promos)
        }
    }
</script>

<style scoped>
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

</style>