<template>
  <div id="app" style="height: 100%;">
    <StarterNavbar></StarterNavbar>

    <router-view/>

    <MainFooter backgroundColor="black"></MainFooter>
  </div>
</template>

<script>
  import {mapActions, mapState, mapMutations} from "vuex"
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
      ...mapMutations(['SET_LOGGEDIN'])

    },
    mounted(){
      //this.SET_LOGGEDIN(false);
      console.log(this.token)


      if(this.token){
        this.getUser({
          headers: {
            'Accept' : 'application/json',
            'Authorization': 'Bearer '+ JSON.parse(this.token),
          }
        })
      }
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
