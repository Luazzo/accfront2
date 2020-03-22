<template>
    <div>
    <div class="header-1">
        <div class="page-header header-filter">
            <div class="page-header-image" style="background-image: url('img/bg16.jpg')"></div>
            <div class="content-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 ml-auto text-right">
                            <h1 class="title">Service Particulier </h1>
                            <h4 class="description">
                                Que vous soyez Locataire ou Propriétaire<br>
                                et en fonction de l’étendu de votre patrimoine<br>
                                nous nous efforçons de vous couvrir<br>
                                contre tout risque probable en mettant<br>
                                une attention particulière sur les défauts.<br>
                                Nous faisons en sort que notre repense soit <br>
                                la plus compétitive possible.
                            </h4>
                            <br/>
                            <div class="buttons">
                                <a href="#" class="btn btn-info btn-lg mr-3">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TabsSection></TabsSection>
    </div>
</template>

<script>

    import TabsSection from './components/Tabs';
    export default {
        name: "Particulier",
        components:{
            TabsSection
        },
    }
</script>

<style scoped>

</style>