<template>
  <div id="app">
    <StarterNavbar></StarterNavbar>

    <router-view/>

    <MainFooter></MainFooter>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex"
  import StarterNavbar from './layout/StarterNavbar';
  import MainFooter from './layout/MainFooter';

  export default {
    components: {
      StarterNavbar,
      MainFooter
    },
    computed:{
      ...mapState(["token"]),

    },
    methods:{
      ...mapActions(["getUser"]),

    },
    mounted(){
      //console.log("app " + this.token)
      this.getUser({
            headers: {
                'Accept' : 'application/json',
                'Authorization': 'Bearer '+ JSON.parse(this.token),
            }
        })
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
