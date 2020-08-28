import Vue from "vue"
import VueX from "vuex"
import axios from 'axios';
import router from "../router";
import createPersistedState from "vuex-persistedstate";

Vue.use(VueX)


export const store = new VueX.Store({
    plugins: [createPersistedState()],
    state:{
        user: {},
        token : "",
        loggedIn: false,
        compagnies : Array,
        promos : Array,
        promo : Object,
    },

    getters:{
        user : state =>{ return state.user },
        token : state =>{ return state.token },
        loggedIn : state =>{ return state.loggedIn },
        compagnies : state =>{ return state.compagnies },
        promos : state =>{ return state.promos },
        promo : state =>{ return state.promo },
    },

    mutations:{
        SET_USER( state,newValue ){ return state.user = newValue },
        SET_TOKEN( state,newValue ){ return state.token = newValue },
        SET_LOGGEDIN( state, newValue ){ return state.loggedIn = newValue },
        SET_COMPAGNIES( state, newValue ){ state.compagnies = newValue },
        SET_PROMOS( state, newValue ){ state.promos = newValue },
        SET_PROMO( state, newValue ){ state.promo = newValue },


        /**
         * @return {boolean}
         */
        CHECK_VALUE(state, value){
            return value === '';
        },
    },

    actions:{

        getPromo({state, commit}, payload){
            //console.log("payload " + payload)
            axios.post("promos/"+ payload)
                .then(response => {
                    commit('SET_PROMO', response.data)
                    //console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getPromos({state, commit}){ //sans {} crée un error 400 : token undefined

            axios.post("promos")
                .then(response => {
                    commit('SET_PROMOS', response.data)

                })
                .catch(error => {
                    console.log(error);
                });
        },
        getCompagnies({state, commit}){ //sans {} crée un error 400 : token undefined

            axios.post("compagnies")
                .then(response => {
                    //console.log(response.data);
                    commit('SET_COMPAGNIES', response.data)

                })
                .catch(error => {
                    console.log(error);
                });
        },


        sendEmail({state}, payload){

            axios.post('contact', payload )
                .then(response => {

                    //console.log("email", response.data)

                })
                .catch(error => {
                    console.log(error);
                });

        },

        getUser({commit,state}){ //sans {} crée un error 400 : token undefined

            axios.get("auth/user",{
                params: {
                    token: JSON.parse(state.token)
                }
            })
                .then(response => {
                    //console.log("user", response.data)
                    commit('SET_USER', response.data)

                })
                .catch(error => {
                    console.log(error);
                });
        },

        loginUser({commit,state}, payload){

            axios.post("auth/login", payload,{
                headers: {
                    'Accept' : 'application/json',
                }
            })
                .then(response => {

                    commit('SET_TOKEN', JSON.stringify(response.data.access_token)) //access_token => parfois il faut remplacer par accessToken

                    commit('SET_LOGGEDIN', true)
                    commit('SET_USER', response.data.user.original)

                    //console.log("user", response.data.user.original.name)

                    router.push({name:'profil'}).catch(err => {})

                })
                .catch(error => {
                    console.log(error);
                });
        },

        logoutUser({commit,state}) {

            axios.post( "auth/logout",{
                'token' : JSON.parse(state.token)
            })
                .then(response => {
                    if (response.data.message) {

                       // console.log(response.data.message);

                        if (router.currentRoute.name!== 'accueil'){
                            router.push({name:'accueil'})
                        }

                        commit('SET_TOKEN', '');

                        commit('SET_LOGGEDIN', false)


                    }
                })
                .catch(function (error) {
                    commit('SET_TOKEN', '');
                    console.error(error.response);
                });
        }
    },


})
