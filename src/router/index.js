import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Catalogo from '../views/Catalogo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
