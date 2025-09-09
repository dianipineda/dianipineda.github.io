<template>
  <div>
    <div class="flex justify-center items-center h-screen bg-gray-900">
      <svg :width="size" :height="size" viewBox="0 0 400 400">
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
          :r="20"
          class="node"
          :class="{ 'node-active': activeIndex >= index }"
        />

        <!-- Nodo central -->
        <circle
          cx="200"
          cy="200"
          r="30"
          class="node"
          :class="[
            { 'node-active': activeIndex >= index },
            { 'node-white': allWhite }
          ]"
        />
      </svg>
    </div>
    <h1>Bienvenido a mi sitio</h1>
    <p>Usa el menú para navegar.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const size = 200;
const center = { x: 200, y: 200 };
const radius = 120;
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
  fill: #38bdf8; /* azul brillante */
  r: 25; /* se agranda un poco al activarse */
}

.node-white {
  fill: white !important;
}

.line-active {
  stroke: #38bdf8;
  stroke-width: 3;
  transition: stroke 0.6s;
}

.line-white {
  stroke: white !important;
}
</style>