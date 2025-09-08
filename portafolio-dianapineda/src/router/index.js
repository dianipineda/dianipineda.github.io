import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortafolioView from '../views/PortafolioView.vue';
import ContactameView from '../views/ContactameView.vue';
import GalleriaTest from '../views/GalleriaTest.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/portafolio', name: 'portafolio', component: PortafolioView },
    { path: '/contactame', name: 'contactame', component: ContactameView },
    { path: '/galeria', name: 'galeria', component: GalleriaTest },
  ]
});

export default router;