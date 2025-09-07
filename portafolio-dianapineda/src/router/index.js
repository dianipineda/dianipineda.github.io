import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortafolioView from '../views/PortafolioView.vue';
import ContactameView from '../views/ContactameView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/portafolio', name: 'portafolio', component: PortafolioView },
    { path: '/contactame', name: 'contactame', component: ContactameView },
  ]
});

export default router;