import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Draw from "../views/DrawView.vue"
import Protected from '../views/ProtectedView.vue';
import { userSessionStore } from '../stores/userSession';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/draw',
      name: 'Draw',
      component: Draw,
    },
    {
      path: '/protected',
      name: 'protected',
      component: Protected,
      meta: {
        needsAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userSession = userSessionStore()

  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next()
    } else {
      return next('/')
    }
  }

  return next()
})

export default router