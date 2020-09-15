<template>

    <div class="page-header header-filter">
        <div class="page-header-image" style="background-image: url('img/project13.jpg');
                background-repeat: no-repeat;background-size: cover;"></div>

        <div class="content-center" style="top: 30%;">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 ml-auto text-right">

                        <h1 style="font-weight: bold;">Bonjour {{user.name}}</h1>
                        <h4>
                            Votre email : {{user.email}}
                        </h4>
                        <h4>
                            Membre depuis : {{user.created_at}}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"

    export default {
        name: 'profil',
        bodyClass: 'profile-page',
        components: {

        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState(['user']),

        },
    }
</script>
<style>
</style>
