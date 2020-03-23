import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store/store"
import "./registerServiceWorker";
//plugins
import NowUIKit from './plugins/now-ui-kit';
import 'es6-promise/auto'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import auth from './auth'

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.router = router

// Set Vue Axios
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `http://127.0.0.1:8000/api/`

// Set Vue authentication
Vue.use(VueAuth, auth)
Vue.config.productionTip = false;
Vue.use(NowUIKit);

// Set Vue localStorage : make it reactive



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


