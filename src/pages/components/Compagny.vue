<template>
    <div class="col-md-3 ml-auto compagny" >
        <a :href="compagny.lien" title="Conditions générales">
            <div v-bind:style="styleImg"> </div>
        </a>
    </div>
</template>

<script>
    import * as CONFIG from "@/constants"

    export default {
        name: "compagny",
        data() {
            return {
                widthImg: null,
                heightImg : null,
            }
        },
        props:{
            compagny: Object,
        },
        computed:{
            styleImg(){
                let urlImg = CONFIG.URL_UPLOAD + this.convertString(this.compagny.image);
                //console.log(urlImg);
                return "background: url("+ urlImg +") no-repeat center center; height: 50px; background-size: contain";
            }
        },
        methods:{

            convertString(url){
                //console.log(url.replace("\\", "/")); // retourne pas correct -> compagnies/August2020\tC5F2dYG0zP8683mhR5y.jpg
                const arr = url.split("\\");
                return arr.join("/");
            },
        },
        mounted(){
            //console.log(CONFIG.URL_UPLOAD)
        },
    }
</script>

<style scoped>
    .compagny{
        padding-bottom: 40px; margin-right: auto; margin-left: auto;
    }

</style>