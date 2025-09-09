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
          :class="{ 'line-active': activeIndex >= index }"
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
          :class="{ 'node-active': activeIndex === nodes.length }"
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
onMounted(() => {
  const startAnimation = () => {
    nodes.forEach((_, i) => {
      setTimeout(() => {
        activeIndex.value = i;
      }, i * 1000); // cada nodo 1s
    });

    // Al final, enciende el nodo central
    setTimeout(() => {
      activeIndex.value = nodes.length;
    }, nodes.length * 1000);

    // Reinicia después de terminar todo el ciclo
    setTimeout(() => {
      activeIndex.value = -1; // apaga todo
      startAnimation();       // vuelve a empezar
    }, (nodes.length + 1) * 1000); // espera ciclo completo
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

.line-active {
  stroke: #38bdf8;
  stroke-width: 3;
  transition: stroke 0.6s;
}
</style>