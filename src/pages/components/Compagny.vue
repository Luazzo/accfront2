<template>
    <div class="col-md-3 ml-auto" style="padding-bottom: 40px; margin-right: auto; margin-left: auto;">
        <a :href="compagny.lien" title="Conditions générales">
            <div v-bind:style="styleImg"> </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Compagny",
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
                let urlImg = 'http://127.0.0.1:8000/storage/'+ this.convertString(this.compagny.image);
                return "background: url("+ urlImg +") no-repeat center center; height: 60px; background-size: contain";
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
            //console.log()
        },
    }
</script>

<style scoped>


</style>