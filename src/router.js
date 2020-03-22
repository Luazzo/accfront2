import Vue from "vue";
import Router from "vue-router";
import Accueil from "./pages/Accueil.vue";
import Contact from "./pages/ContactUs.vue";
import Particulier from "./pages/Particulier.vue";
import MainNavbar from "./layout/MainNavbar.vue"
import MainFooter from "./layout/MainFooter.vue"
import Register from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/ProfilePage'


Vue.use(Router);

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
      path: "/particulier",
      name: "particulier",
      components: {default: Particulier},
      props: {header: {colorOnScroll: 450}}
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
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false
      }
    },
    // USER ROUTES
    {
      path: '/dashboard',
      name: 'dashboard',
      component: {default: Dashboard, header: MainNavbar, footer: MainFooter},
      meta: {
        auth: true
      }
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
