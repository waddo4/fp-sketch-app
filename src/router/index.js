import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import Draw from "../views/DrawView.vue";
import Profile from "../views/ProfileView.vue";
import Gallery from "../views/GalleryView.vue";

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
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    }
  ]
})

export default router