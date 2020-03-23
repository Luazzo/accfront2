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
        loggedIn: false
    },

    getters:{
        user : state =>{ return state.user },
        token : state =>{ return state.token },
        loggedIn : state =>{ return state.loggedIn },
    },

    mutations:{
        SET_USER(state,newValue){
            return state.user = newValue
        },
        SET_TOKEN(state,newValue){
            return state.token = newValue
        },
        SET_LOGGEDIN(state, newValue){
            return state.loggedIn = newValue
        },

        /**
         * @return {boolean}
         */
        VALID_EMAIL(email){
            const re = /(.+)@(.+){2,}\.(.+){2,}/;
            return re.test(email.toLowerCase());
        },
        /**
         * @return {boolean}
         */
        CHECK_VALUE(state, value){
            return value === '';
        },
},

actions:{


    sendEmail({state}, payload){

        console.log("ok")

    },

    loginUser({commit,state}, payload){

        axios.post("http://127.0.0.1:8000/api/auth/login", payload)
            .then(response => {

                commit('SET_TOKEN', JSON.stringify(response.data.accessToken))

                commit('SET_LOGGEDIN', true)

                console.log(state.token)
                console.log(state.loggedIn)

                router.push({name:'accueil'})

            })
            .catch(error => {
                console.log(error);
            });

    },

    logoutUser({commit,state}) {

        axios.post( "http://127.0.0.1:8000/api/auth/logout",{
            'token' : JSON.parse(state.token)
        })
            .then(response => {
                if (response.data.message) {

                    console.log(response.data.message)
                    router.push({name:'login'})

                    commit('SET_TOKEN', '')

                    commit('SET_LOGGEDIN', false)


                }
            })
            .catch(function (error) {
                commit('SET_TOKEN', '')
                console.error(error.response);
            });
    }
},


})
