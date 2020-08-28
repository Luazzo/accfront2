<template>
    <div class="wrapper profile-page">
        <div style="margin-top: 150px; min-height: 530px;">
            <h2>Bonjour {{user.name}}</h2>
            <p>
                <img src="" alt="">
            </p>
                
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
