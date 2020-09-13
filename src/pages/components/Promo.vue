<template>
    <div type="testimonial" plain>

        <div v-if="getWidth">
            <div class="row">
                <div class="col-md-4" :style="styleImg"></div>

                <div class="col-md-8  mr-auto ml-auto" style=" text-align: left;">
                    <h3 class="titre" >{{promo.titre}}</h3>
                    <div class="row">
                        <div class="col-md-8">
                            <p style="color:white; text-align: center; font-size: 1em;">Offre est valable jusqu'au
                                <br><span style="font-weight:bold; font-size: 1.8em;">{{convertDate(promo.fin)}}</span></p>
                        </div>
                        <div class="col-md-4" :style="styleLogo"></div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="row">
                <div class="col-md-12  mr-auto ml-auto" style=" text-align: left;">
                    <h3 class="titre" >{{promo.titre}}</h3>

                    <p style="color:white; text-align: center; font-size: 1em;">Offre est valable jusqu'au</br>
                        <span style="font-weight:bold; font-size: 1.8em;">{{convertDate(promo.fin)}}</span></p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import * as CONFIG from "@/constants"

    export default {
        name: "Promo",
        data() {
            return {
                dataStr : "",
            }
        },
        props:{
            promo: Object,
        },
        computed:{

            getWidth(){
                return (screen.width > 1000)
            },

            styleImg(){
                let urlImg = CONFIG.URL_UPLOAD + this.convertString(this.promo.image);
                return "background: url("+ urlImg +"); background-repeat: no-repeat; background-position: center center; height: 150px; background-size: auto 100% ;";
            },
            styleLogo(){
                let urlImg = CONFIG.URL_UPLOAD + this.convertString(this.promo.logo);
                return "background: url("+ urlImg +"); background-repeat: no-repeat; background-position: 0% center; height: 50px; text-shadow: 2px 2px 5px black; background-size: 70% auto ;";
            }
        },
        methods:{
            convertDate(date){
                const arr = date.split("-"); // ["2020", "08", "18"]
                let month = "";
                switch(arr[1]){
                    case "01":
                        month = "janvier";
                        break;
                    case "02":
                        month = "février";
                        break;
                    case "03":
                        month = "mars";
                        break;
                    case "04":
                        month = "avril";
                        break;
                    case "05":
                        month = "mai";
                        break;
                    case "06":
                        month = "juin";
                        break;
                    case "07":
                        month = "juillet";
                        break;
                    case "08":
                        month = "août";
                        break;
                    case "09":
                        month = "septembre";
                        break;
                    case "10":
                        month = "novembre";
                        break;
                    default:
                        month = "décembre";
                        break;
                }
                return this.dataStr = arr[2]+" "+ month +" "+arr[0];
            },

            convertString(url){
                const arr = url.split("\\");
                return arr.join("/");
            },
        },
        mounted(){
            // console.log(this.dataStr)
            this.convertDate(this.promo.fin);
            //console.log(this.getWidth)
        }
    }
</script>

<style lang="scss">
    .titre {
        font-size: 1.8em;
        font-weight:bold;
        color: black;
        text-transform: uppercase;
        padding-top: 5px;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }
    @media screen and (max-width: 1000px){

        .titre{
            text-align: center;
        }
    }

</style>