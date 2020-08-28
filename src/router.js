import Vue from "vue";
import Router from "vue-router";
import Accueil from "./pages/Accueil.vue";
import Promos from "./pages/Promos.vue";
import Promo from "./pages/Promo.vue";
import Contact from "./pages/ContactUs.vue";
import Particulier from "./pages/Particulier.vue";
import Entreprise from "./pages/Entreprise.vue";
import MainNavbar from "./layout/MainNavbar.vue"
import MainFooter from "./layout/MainFooter.vue"
import Register from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import License from './pages/License'
import ProfilePage from "./pages/ProfilePage";
import {store} from './store/store';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.loggedIn) {
    next();
    return
  }
  next('/')
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.loggedIn) {
    next();
    return
  }
  next('/login')
};


const router = new Router({

  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/accueil"
    },
    {
      path: "/accueil",
      name: "accueil",
      components: {default: Accueil},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/promos",
      name: "promos",
      components: {default: Promos},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/promos/:id",
      name: "promo",
      components: {default: Promo},
      props: {default: true, header: {colorOnScroll: 450}}
    },
    {
      path: "/particulier",
      name: "particulier",
      components: {default: Particulier},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/entreprise",
      name: "entreprise",
      components: {default: Entreprise},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: '/license',
      name: 'license',
      component: License,
    },
    {
      path: "/contact",
      name: "contact",
      components: {default: Contact},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/login",
      name: "login",
      components: {default: LoginPage},
      props: {header: {colorOnScroll: 450}},
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: ifNotAuthenticated,
    },
    // USER ROUTE
    {
      path: '/profil',
      name: 'profil',
      component: ProfilePage,
      beforeEnter: ifAuthenticated,
    }
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router;
