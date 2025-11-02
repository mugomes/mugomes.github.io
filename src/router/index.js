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
    path: '/catalogo.html',
    name: 'Catalogo',
    component: Catalogo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
