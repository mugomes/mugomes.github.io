import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Catalogo from '../views/Catalogo.vue';
import Apoie from '../views/Apoie.vue';

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
  {
    path: '/apoie.html',
    name: 'Apoie',
    component: Apoie
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
