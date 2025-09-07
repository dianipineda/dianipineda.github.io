<template>
  <div>
    <h1>Portafolio</h1>
    <div class="gallery">
      <!-- Galería de SVGs -->
      <div class="frame" v-for="(svg, index) in svgs" :key="index">
        <img :src="svg" alt="Imagen SVG" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgs: [
        '/path/to/tu-svg1.svg',  // Reemplaza con tus rutas a SVGs
        '/path/to/tu-svg2.svg',
        // Añade más aquí
      ]
    };
  }
};
</script>

<style>
.gallery { display: flex; flex-wrap: wrap; justify-content: center; }
.frame { border: 2px solid #ccc; margin: 10px; padding: 10px; width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; }
img { max-width: 100%; max-height: 100%; }
</style>