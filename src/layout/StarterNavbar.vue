<template>
    <navbar position="fixed"
            type="white"
            menu-classes="ml-auto">

        <template slot-scope="{toggle, isToggled}">
            <router-link v-popover:popover1 class="" to="/accueil">
                <div class="logo-img" style=""> </div>
            </router-link>
        </template>


        <template slot="navbar-menu">
            <router-link class="nav-item nav-link" to="/accueil">
                Accueil
            </router-link>

            <router-link class="nav-item nav-link" to="/particulier">
                Particulier
            </router-link>

            <router-link class="nav-item nav-link" to="/entreprise">
                Entreprise
            </router-link>

            <router-link class="nav-item nav-link" to="/contact">
                Contact
            </router-link>


            <drop-down tag="li" title="Espace client" class="nav-item">
                <a class="" href="https://app.mybroker.be/cs/home/index/71228" target="_blank">
                    <div style="background: url(img/mybroker_logo.png) no-repeat 30% center; height: 40px; background-size: contain"> </div>
                </a>
                <nav-link v-show="loggedIn" to="/profil">
                    <span style=" text-transform: uppercase;" >Profil</span>
                </nav-link>
                <li v-show="loggedIn" class="nav-item nav-link" style="cursor: pointer; padding-left:24px; text-transform: uppercase;" @click.prevent="logoutUser">
                    Deconnexion
                </li>
                <nav-link v-show="!loggedIn" to="/register">
                    Inscription
                </nav-link>

                <nav-link v-show="!loggedIn" to="/login">
                    Connexion
                </nav-link>
            </drop-down>



        </template>

    </navbar>
</template>

<script>

    import { DropDown, Navbar, NavLink} from '@/components';
    import { Popover } from 'element-ui'
    import { mapState, mapActions} from "vuex";

    export default {
        name: 'starter-navbar',
        components: {
            Navbar,
            DropDown,
            NavLink,
            [Popover.name]: Popover
        },

        computed:{
            ...mapState(['loggedIn', 'token']),

        },

        methods:{
            ...mapActions(['logoutUser']),

        },
        mounted() {
            console.log("token : " +  this.token)
            console.log("loggedIn : " +  this.loggedIn)


        }

    }
</script>

<style scoped>
    .logo-img{
        background-image: url('/img/icons/logo-acc-horiz.jpg');
        background-size: contain;
        background-repeat: no-repeat;
        height:60px;
        width:200px;
        display: inline-block;
    }
    .navbar-brand {
        padding-top: 0 ;
        padding-bottom: 0;
    }

</style>
