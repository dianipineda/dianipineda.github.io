import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import './style.css';
// Importa los estilos de PrimeVue y los íconos
import 'primeicons/primeicons.css';
import '@primevue/themes/aura'; // <-- Este es el estilo para los componentes


const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');