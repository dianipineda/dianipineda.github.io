<template>
  <Galleria
    :value="images"
    :showIndicators="true"
    containerStyle="max-width: 800px"
  >
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
  </Galleria>
</template>

<script setup>
import { ref } from 'vue';
import Galleria from 'primevue/galleria';

const images = ref([
  { itemImageSrc: '/ingesta_datalake.svg', alt: 'Imagen SVG 1' },
  { itemImageSrc: '/integracion_consumo_combustible.svg', alt: 'Imagen SVG 2' },
  { itemImageSrc: '/integracion_datos_conductor_a_documento.svg', alt: 'Imagen SVG 3' },
  { itemImageSrc: '/integracion_ditribucion_costos_labor.svg', alt: 'Imagen SVG 4' },
  { itemImageSrc: '/integracion_novedades_nomina.svg', alt: 'Imagen SVG 5' },
  { itemImageSrc: '/integracion_precipitacion_granjas.svg', alt: 'Imagen SVG 6' },
  { itemImageSrc: '/integracion_productividad_granjas.svg', alt: 'Imagen SVG 7' },
  { itemImageSrc: '/integracion_productividad_maquinaria.svg', alt: 'Imagen SVG 8' }
]);
</script>