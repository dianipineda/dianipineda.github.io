<template>
  <div>
    <div class="flex items-center w-full h-screen bg-gray-900 text-white px-8">
      <h1>Bienvenido a mi sitio</h1>
      <svg :width="size" :height="size" viewBox="0 0 400 400" :style="{ opacity: allWhite ? 0.5 : 0.4 }">
        <!-- Líneas -->
        <line
          v-for="(node, index) in nodes"
          :key="'line-' + index"
          x1="200"
          y1="200"
          :x2="node.x"
          :y2="node.y"
          stroke="white"
          stroke-width="2"
          :class="[
            { 'line-active': activeIndex >= index },
            { 'line-white': allWhite }
          ]"
        />

        <!-- Nodos -->
        <circle
          v-for="(node, index) in nodes"
          :key="'circle-' + index"
          :cx="node.x"
          :cy="node.y"
          :r="15"
          class="node"
          :class="[
            { 'node-active': activeIndex >= index },
            { 'node-white': allWhite }
          ]"
        />

        <!-- Nodo central -->
        <circle
          cx="200"
          cy="200"
          r="25"
          class="node"
          :class="[
            { 'node-active': activeIndex >= index },
            { 'node-white': allWhite }
          ]"
        />
      </svg>
      <div class="parrafo-container">
        <p>Soy ingeniera de datos y mi misión es transformar la complejidad de tu información en un activo estratégico. Si tú o tu equipo están perdiendo tiempo valioso intentando unir datos dispersos, yo construyo las soluciones que tu negocio necesita. Mi trabajo consiste en integrar tus sistemas y automatizar flujos para que la información fluya libremente, permitiéndote tomar decisiones más inteligentes y dirigir tu organización hacia su siguiente nivel</p>
      </div>
      <router-link to="/portafolio" class="enlace">
        Conoce mi portafolio
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const size = 180;
const center = { x: 200, y: 200 };
const radius = 100;
const totalNodes = 5;

// Calculamos posiciones en círculo
const nodes = Array.from({ length: totalNodes }, (_, i) => {
  const angle = (i / totalNodes) * 2 * Math.PI;
  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  };
});

const activeIndex = ref(-1);
const allWhite = ref(false);

onMounted(() => {
  const startAnimation = () => {
    allWhite.value = false;

    nodes.forEach((_, i) => {
      setTimeout(() => {
        activeIndex.value = i;
      }, i * 1000);
    });

    setTimeout(() => {
      activeIndex.value = nodes.length; // central
    }, nodes.length * 1000);

    // Al terminar, encendemos "modo blanco"
    setTimeout(() => {
      allWhite.value = true;
    }, (nodes.length + 1) * 1000);

    // Todo apagado antes de reiniciar
    setTimeout(() => {
      allWhite.value = false;
      activeIndex.value = -1; // apagado
    }, (nodes.length + 2) * 1000);

    // Reiniciamos ciclo completo
    setTimeout(() => {
      activeIndex.value = -1;
      startAnimation();
    }, (nodes.length + 3) * 1000); // damos 1s extra en blanco
  };

  startAnimation();
});
</script>


<style scoped>
.home {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}
.node {
  fill: #444;
  stroke: white;
  stroke-width: 2;
  transition: fill 0.6s, r 0.6s;
}
.node-active {
  fill: #eab676; /* azul brillante */
  r: 25; /* se agranda un poco al activarse */
}

.node-white {
  fill: white !important;
}

.line-active {
  stroke: #eab676;
  stroke-width: 3;
  transition: stroke 0.6s;
}

.line-white {
  stroke: white !important;
}

.parrafo-container {
  margin-left: 60px;   /* margen izquierdo */
  margin-right: 60px;  /* margen derecho */
}

.parrafo-container p {
  text-align: justify;  /* justificar texto */
  line-height: 1.6;     /* mejora la lectura */
}

.enlace {
  display: inline-block;   /* para que respete margen vertical */
  margin-top: 16px;        /* espacio respecto al párrafo */
  color: #007bff;          /* color azul tipo enlace */
  text-decoration: none;   /* quita el subrayado */
  font-weight: bold;
  cursor: pointer;
}

.enlace:hover {
  text-decoration: underline; /* subrayado al pasar el mouse */
}
</style>