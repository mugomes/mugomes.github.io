import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Catalogo from '../views/Catalogo.vue';
import Servicos from '../views/Servicos.vue';
import Projetos from '../views/Projetos.vue';
import Apoie from '../views/Apoie.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Especialista em PHP | Murilo Gomes"
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Especialista em PHP | Murilo Gomes"
    }
  },
  {
    path: '/catalogo.html',
    name: 'Catálogo',
    component: Catalogo,
    meta: {
      title: "Catálogo - Murilo Gomes"
    }
  },
  {
    path: '/servicos.html',
    name: 'Serviços',
    component: Servicos,
    meta: {
      title: "Serviços - Murilo Gomes"
    }
  },
  {
    path: '/projetos.html',
    name: 'Projetos',
    component: Projetos,
    meta: {
      title: "Projetos - Murilo Gomes"
    }
  },
  {
    path: '/apoie.html',
    name: 'Apoie',
    component: Apoie,
    meta: {
      title: "Apoie - Murilo Gomes"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
