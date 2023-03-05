import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";

export default createRouter({
  history: createWebHistory(),
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
    }
  ]
})