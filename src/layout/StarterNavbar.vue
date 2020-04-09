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

            <router-link class="nav-item nav-link" to="/presentation">
                Conditions générales
            </router-link>

            <router-link class="nav-item nav-link" to="/contact">
                Contact
            </router-link>

            <drop-down tag="li" title="" icon="now-ui-icons users_single-02" class="nav-item">
                <template v-if="loggedIn" >
                    <li class="nav-item nav-link" style="cursor: pointer;" @click.prevent="logoutUser">
                        Deconnexion
                    </li>
                </template>
                <template v-else>
                    <router-link class="nav-item nav-link" to="/register">
                        Inscription
                    </router-link>

                    <router-link class="nav-item nav-link" to="/login">
                        Connexion
                    </router-link>
                </template>
            </drop-down>
        </template>

    </navbar>
</template>

<script>
    import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
    import { Popover } from 'element-ui'
    import {mapMutations, mapGetters, mapState, mapActions} from "vuex";
    import {eventBus} from "../eventBus.js"

    export default {
        name: 'starter-navbar',
        components: {
            DropDown,
            Navbar,
            NavbarToggleButton,
            NavLink,
            [Popover.name]: Popover
        },
        data(){
            return{

            }
        },

        computed:{
            ...mapState(['loggedIn', 'token']),
            /*isLogged(){
                return (localStorage.getItem('token') !== '')
            }*/
        },

        methods:{
            ...mapActions(['logoutUser']),
            //...mapMutations(['SET_LOGGEDIN']),
            /*logoutUser(){
               this.SET_LOGGEDIN(false)
            }*/

            /* loggedIn() {
                 console.log('StarterNavbar ', this.$store.state.token )
                 console.log(this.$store.state.token !== '' ) //true
                 if(this.$store.state.token !== ''){
                     this.bbb = true
                     console.log(this.bbb)
                     return this.bbb
                 }else{
                     return this.bbb = false
                 }
             }

             updateToken: async function (newValue) {

                 this.$nextTick(function () {
                     this.$store.state.token = newValue
                 })
             },*/
            /*logoutUser() {
                axios.post("http://127.0.0.1:8000/api/auth/logout", {
                    'token': JSON.parse(localStorage.getItem('token'))
                })
                    .then(response => {
                        if (response.data.message) {

                            console.log(response.data.message)

                            localStorage.setItem('token', '')

                           // this.isLogged.set(false)// error

                            console.log("isLogged : " + this.isLogged)

                            router.push({name: 'login'})


                        }
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
            }*/
        },


        mounted() {
            console.log("token : " +  this.token)
            console.log("loggedIn : " +  this.loggedIn)

            //console.log("token : " + localStorage.getItem('token') )

            /*eventBus.$on("changeLoggedIn",newValue => {
                console.log("eventBus ",newValue)
                // this.isLogged.set(newValue) // error
                console.log("isLogged : " + this.isLogged)
            })*/
            //  console.log("loggedIn : " + this.$store.state.loggedIn )

            // Vue.nextTick(callback)

            /* this.updateToken(this.token)

            Vue.nextTick(function () {
                console.log(this.$store.state.token !== '' )
                return (this.$store.state.token !== '')
            })*/
        }

    }
</script>

<style scoped>
    .logo-img{
        background-image: url('/img/icons/logo-horizont.jpg');
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
