import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "./jquery.min";
import {store} from "./store/store"
import "./registerServiceWorker";
//plugins
import NowUIKit from './plugins/now-ui-kit';
import Validate from './plugins/jquery.validate.min';
import 'es6-promise/auto'
import axios from 'axios'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import auth from './auth'
import FlashMessage from 'vue-flash-message';
import titleMixin from './titleMixin'

Vue.mixin(titleMixin)

//Message de confirmation post-emailing
Vue.use(FlashMessage);
require('vue-flash-message/dist/vue-flash-message.min.css');

// Set Vue globally
window.Vue = Vue

// Set Vue router
Vue.router = router

// Set Vue Axios
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `https://www.admin.acconseils.be/api/`
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Set Vue authentication
Vue.use(VueAuth, auth)

//Template HTML
Vue.use(NowUIKit);

//Validation de form
Vue.use(Validate);

Vue.config.productionTip = false;


new Vue({
  router, jQuery,
  store,
  render: h => h(App)
}).$mount("#app");


